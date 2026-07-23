import React, { useState } from 'react';
import { Download, Check, Copy, HardDrive, Gamepad2, ShieldCheck, ChevronDown, ChevronUp, Terminal, Layers, ExternalLink } from 'lucide-react';
import { DOWNLOAD_VERSIONS, MOD_INFO } from '../data/modData';

export const DownloadSection: React.FC = () => {
  const [selectedLoader, setSelectedLoader] = useState<'Forge' | 'Fabric' | 'NeoForge'>('Forge');
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const activeVersion = DOWNLOAD_VERSIONS.find((v) => v.loader === selectedLoader) || DOWNLOAD_VERSIONS[0];

  const handleCopyHash = () => {
    navigator.clipboard.writeText(activeVersion.checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleStartDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    setDownloadComplete(false);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);

          // Create direct text download file
          const element = document.createElement('a');
          const file = new Blob([
            `===================================================\n` +
            `FOLK VALLEY MINECRAFT HORROR MOD (${activeVersion.version})\n` +
            `Mod Loader: ${activeVersion.loader}\n` +
            `Minecraft Version: ${activeVersion.minecraftVersion}\n` +
            `Checksum: ${activeVersion.checksum}\n` +
            `===================================================\n\n` +
            `Thank you for downloading Folk Valley!\n` +
            `Place this jar file inside your .minecraft/mods directory.\n` +
            `Required Dependencies: GeckoLib 4.0+\n` +
            `Have fun surviving the fog.\n`
          ], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = `folkvalley-${activeVersion.loader.toLowerCase()}-${activeVersion.minecraftVersion}-${activeVersion.version}.jar`;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);

          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const installSteps = [
    {
      step: 1,
      title: `Install ${selectedLoader} Mod Loader`,
      desc: `Download and run the installer for ${selectedLoader} version ${activeVersion.minecraftVersion}. Ensure Minecraft has been launched at least once on version ${activeVersion.minecraftVersion}.`
    },
    {
      step: 2,
      title: 'Download Required Dependency (GeckoLib)',
      desc: 'Folk Valley utilizes custom entity skeletal animations powered by GeckoLib 4.0+. Download GeckoLib matching your mod loader.'
    },
    {
      step: 3,
      title: 'Place Mod File in .minecraft/mods',
      desc: 'Press Win+R, type %appdata%\\.minecraft\\mods (or ~/Library/Application Support/minecraft/mods on macOS) and copy Folk Valley jar into the folder.'
    },
    {
      step: 4,
      title: 'Launch Minecraft & Configure Audio',
      desc: 'Select the Forge/Fabric profile in your Minecraft Launcher. For maximum psychological immersion, wear headphones and set Master Volume to 80%.'
    }
  ];

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Glow background anchor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
          <Download className="w-3.5 h-3.5" />
          <span>Official Distribution</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wider text-white mb-6">
          DOWNLOAD FOLK VALLEY
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-sans">
          Select your preferred mod loader below to download the latest release.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />
      </div>

      {/* Main Download Card */}
      <div className="max-w-4xl mx-auto">
        <div className="card-horror p-8 sm:p-12 rounded-3xl relative overflow-hidden border-red-800/60 shadow-[0_0_50px_rgba(185,28,28,0.25)]">
          {/* Top Badge Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-red-950/80">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-red-950/90 border border-red-700/60 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                <ShieldCheck className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <span className="font-outfit font-extrabold text-xl text-white block">
                  {MOD_INFO.title} {activeVersion.version}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  Released: {activeVersion.releaseDate} • Verified Safe & Malware-Free
                </span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Latest Build
            </span>
          </div>

          {/* Loader Selection Tabs */}
          <div className="mb-8">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
              1. Choose Mod Loader:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['Forge', 'Fabric', 'NeoForge'] as const).map((loader) => (
                <button
                  key={loader}
                  onClick={() => setSelectedLoader(loader)}
                  className={`py-3.5 px-4 rounded-xl font-outfit font-bold text-sm sm:text-base border transition-all flex items-center justify-center gap-2 ${
                    selectedLoader === loader
                      ? 'bg-gradient-to-r from-red-900 to-red-950 text-white border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                      : 'bg-stone-950/80 text-gray-400 hover:text-white border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <Layers className="w-4 h-4 text-red-500" />
                  <span>{loader}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Spec details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-black/60 rounded-2xl border border-stone-800 mb-8 font-mono text-xs text-gray-300">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-5 h-5 text-red-500" />
              <div>
                <span className="text-gray-500 block">MINECRAFT:</span>
                <strong className="text-white text-sm">{activeVersion.minecraftVersion}</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-red-500" />
              <div>
                <span className="text-gray-500 block">FILE SIZE:</span>
                <strong className="text-white text-sm">{activeVersion.fileSize}</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-red-500" />
              <div>
                <span className="text-gray-500 block">CHECKSUM:</span>
                <div className="flex items-center gap-1">
                  <strong className="text-gray-300 truncate max-w-[100px]">{activeVersion.checksum}</strong>
                  <button
                    onClick={handleCopyHash}
                    className="p-1 hover:text-red-400 text-gray-500"
                    title="Copy Checksum"
                  >
                    {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="mb-12 text-center">
            {downloading ? (
              <div className="space-y-3 bg-stone-950 p-6 rounded-2xl border border-red-900/60">
                <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                  <span>Downloading Folk Valley {activeVersion.version} ({activeVersion.loader})...</span>
                  <span className="text-red-400 font-bold">{downloadProgress}%</span>
                </div>
                <div className="w-full bg-stone-900 h-3 rounded-full overflow-hidden border border-red-950">
                  <div
                    className="bg-gradient-to-r from-red-700 to-red-500 h-full transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            ) : downloadComplete ? (
              <div className="bg-emerald-950/40 border border-emerald-700/60 p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-outfit font-bold text-lg mb-2">
                  <Check className="w-6 h-6" />
                  <span>Download Complete!</span>
                </div>
                <p className="text-xs text-gray-300 font-sans mb-4">
                  File <code className="text-red-400 bg-black px-1.5 py-0.5 rounded">folkvalley-{selectedLoader.toLowerCase()}-{activeVersion.minecraftVersion}.jar</code> saved to your downloads folder.
                </p>
                <button
                  onClick={handleStartDownload}
                  className="text-xs font-mono text-red-400 hover:underline"
                >
                  Download again
                </button>
              </div>
            ) : (
              <button
                onClick={handleStartDownload}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:from-red-600 hover:to-red-900 text-white font-outfit text-xl font-extrabold tracking-wider border border-red-500/80 shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:shadow-[0_0_60px_rgba(239,68,68,0.9)] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
              >
                <Download className="w-7 h-7 animate-bounce" style={{ animationDuration: '2s' }} />
                <span>DOWNLOAD FOR {selectedLoader.toUpperCase()} ({activeVersion.minecraftVersion})</span>
              </button>
            )}
          </div>

          {/* Installation Instructions Accordion */}
          <div className="pt-8 border-t border-stone-900">
            <h3 className="font-outfit text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-red-500" />
              <span>Step-by-Step Installation Guide</span>
            </h3>

            <div className="space-y-3">
              {installSteps.map((step) => {
                const isOpen = activeStep === step.step;
                return (
                  <div
                    key={step.step}
                    className="border border-stone-800 rounded-xl overflow-hidden bg-black/40"
                  >
                    <button
                      onClick={() => setActiveStep(isOpen ? null : step.step)}
                      className="w-full p-4 text-left flex items-center justify-between font-outfit font-semibold text-gray-200 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-red-950 border border-red-900 text-red-400 text-xs font-mono flex items-center justify-center">
                          0{step.step}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-red-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-sm font-sans text-gray-400 border-t border-stone-900/80 pt-3 leading-relaxed">
                        {step.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
