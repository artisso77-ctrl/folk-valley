import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Radio, Music, ShieldAlert } from 'lucide-react';

export const AudioSynthesizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [preset, setPreset] = useState<'drone' | 'pulse' | 'wind'>('drone');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const mainGainRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const startAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      mainGainRef.current = masterGain;

      // Filter (Low pass sinister filter)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(preset === 'wind' ? 350 : 120, ctx.currentTime);
      filter.Q.setValueAtTime(6, ctx.currentTime);
      filter.connect(masterGain);
      filterRef.current = filter;

      // Oscillators (Dark Sub Drone)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(preset === 'pulse' ? 45 : 55, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(preset === 'pulse' ? 47 : 56.2, ctx.currentTime);

      // LFO for scary pitch breathing
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // Very slow breath
      lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);

      osc1.connect(filter);
      osc2.connect(filter);

      osc1.start();
      osc2.start();
      lfo.start();

      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
      lfoRef.current = lfo;

      setIsPlaying(true);
    } catch {
      console.warn('Web Audio API not allowed or supported');
    }
  };

  const stopAudio = () => {
    if (osc1Ref.current) {
      try { osc1Ref.current.stop(); } catch {}
      osc1Ref.current.disconnect();
      osc1Ref.current = null;
    }
    if (osc2Ref.current) {
      try { osc2Ref.current.stop(); } catch {}
      osc2Ref.current.disconnect();
      osc2Ref.current = null;
    }
    if (lfoRef.current) {
      try { lfoRef.current.stop(); } catch {}
      lfoRef.current.disconnect();
      lfoRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (mainGainRef.current && audioCtxRef.current) {
      mainGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    if (filterRef.current && audioCtxRef.current) {
      const freq = preset === 'wind' ? 380 : preset === 'pulse' ? 90 : 130;
      filterRef.current.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
    }
  }, [preset]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="flex items-center gap-2 bg-[#0d0a0e]/90 border border-red-900/40 backdrop-blur-md px-3.5 py-2 rounded-full shadow-2xl shadow-red-950/40 text-xs font-sans text-gray-300">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium transition-all ${
            isPlaying
              ? 'bg-red-950/90 text-red-400 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.3)] animate-pulse'
              : 'bg-stone-900 text-gray-400 hover:text-gray-200 border border-stone-800'
          }`}
          title="Toggle Ambient Audio Experience"
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="font-mono text-[11px] tracking-wider text-red-400">ATMOSPHERE: ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-gray-500" />
              <span className="font-mono text-[11px] tracking-wider">AUDIO: OFF</span>
            </>
          )}
        </button>

        {isPlaying && (
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-red-950/60">
            <select
              value={preset}
              onChange={(e) => setPreset(e.target.value as 'drone' | 'pulse' | 'wind')}
              className="bg-black/60 border border-red-900/40 text-[11px] text-gray-300 rounded px-2 py-0.5 outline-none focus:border-red-600"
            >
              <option value="drone">Dark Pine Drone</option>
              <option value="pulse">Blood Pulse</option>
              <option value="wind">Whisper Wind</option>
            </select>

            <div className="flex items-center gap-1.5 px-2">
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 accent-red-600 h-1 bg-stone-800 rounded cursor-pointer"
                title="Volume"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
