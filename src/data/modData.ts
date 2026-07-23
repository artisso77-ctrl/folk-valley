import { FeatureItem, GalleryItem, FAQItem, CreatureEntry, ModVersion } from '../types';

export const MOD_INFO = {
  title: 'FOLK VALLEY',
  subtitle: 'A Minecraft Horror Mod that transforms your world into a nightmare.',
  tagline: 'Step into a twisted wilderness where the silence speaks, shadows stalk, and survival requires paranoia.',
  latestVersion: 'v1.4.2',
  minecraftVersion: '1.20.1 & 1.20.2',
  fileSize: '28.4 MB',
  releaseDate: 'July 2026',
  updateName: 'The Whispering Fog Update',
  stats: [
    { label: 'Active Terror Modules', value: '14+' },
    { label: 'Custom Ambient Sounds', value: '120+' },
    { label: 'Community Downloads', value: '450K+' },
    { label: 'CurseForge Rating', value: '4.9 ★' },
  ]
};

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'creatures',
    title: 'New Horror Creatures',
    description: 'Encounter entities that study your habits, hide in tree lines, impersonate innocent animals, and mimic player audio.',
    icon: 'Skull',
    tag: 'Entities'
  },
  {
    id: 'sounds',
    title: 'Dynamic Ambient Sounds',
    description: 'Procedural 3D directional audio: distant heavy breathing, wooden floorboard creaks beneath your base, and footsteps following you.',
    icon: 'Volume2',
    tag: 'Audio Engine'
  },
  {
    id: 'structures',
    title: 'Haunted Structures',
    description: 'Explore overgrown cursed altars, abandoned wooden cabins with blood-soaked journals, and underground bone vaults.',
    icon: 'Home',
    tag: 'World Generation'
  },
  {
    id: 'events',
    title: 'Random Night Events',
    description: 'Experience blood moons, dense glowing red fog, flickering torch light failure, phantom doors opening, and hall hallucinations.',
    icon: 'Moon',
    tag: 'Mechanics'
  },
  {
    id: 'atmosphere',
    title: 'Immersive Atmosphere',
    description: 'Custom volumetric fog shaders, sanity mechanic, camera jitter, and subtle visual distortions when creatures draw near.',
    icon: 'CloudFog',
    tag: 'Visuals'
  },
  {
    id: 'performance',
    title: 'High Performance',
    description: 'Engineered from scratch using lightweight multithreaded AI loops. Smooth 60+ FPS even with shaders and heavy modpacks.',
    icon: 'Zap',
    tag: 'Optimization'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Spruce Pines in Red Fog',
    category: 'Ambience',
    imageUrl: '/src/assets/images/folk_valley_hero_1784837721631.jpg',
    caption: 'Thick blood red fog rolls across the spruce valley at midnight. Glowing eyes observe from the thicket.'
  },
  {
    id: 'g2',
    title: 'The Abandoned Cabin at Creek Bend',
    category: 'Structures',
    imageUrl: '/src/assets/images/haunted_cabin_1784837734876.jpg',
    caption: 'A solitary overgrown structure emitting an unholy faint glow. Inside lies cryptic lore and rare cursed artifacts.'
  },
  {
    id: 'g3',
    title: 'The Whispering Stalker',
    category: 'Creatures',
    imageUrl: '/src/assets/images/stalker_creature_1784837746509.jpg',
    caption: 'A tall slender silhouette that disappears the moment you attempt to look directly at it.'
  },
  {
    id: 'g4',
    title: 'Blood Moon Over Cursed Valley',
    category: 'Night Events',
    imageUrl: '/src/assets/images/folk_valley_hero_1784837721631.jpg',
    caption: 'When the blood moon rises, standard sleep is disabled and creatures break wooden doors.'
  },
  {
    id: 'g5',
    title: 'Underground Bone Vault',
    category: 'Structures',
    imageUrl: '/src/assets/images/haunted_cabin_1784837734876.jpg',
    caption: 'Subterranean crypts scattered beneath mountain biomes containing forgotten sacrificial altars.'
  },
  {
    id: 'g6',
    title: 'Visual Sanity Distortion',
    category: 'Ambience',
    imageUrl: '/src/assets/images/stalker_creature_1784837746509.jpg',
    caption: 'Low sanity causes chromatic aberration, screen vignette darkness, and phantom mob sounds.'
  }
];

export const CREATURE_BESTIARY: CreatureEntry[] = [
  {
    id: 'c1',
    name: 'The Pine Stalker',
    dangerLevel: 'Lethal',
    behavior: 'Lurks 30 blocks away from the player. Advances only when your back is turned. Extinguishes torches in a 15-block radius.',
    lore: 'Local folklore speaks of a tall shadow that mimics distant wood-chopping sounds to lure miners into pitch darkness.',
    icon: 'Eye'
  },
  {
    id: 'c2',
    name: 'The Mimic Villager',
    dangerLevel: 'Severe',
    behavior: 'Appears as a normal villager in abandoned settlements. Emits normal trade hums until the player right-clicks.',
    lore: 'A parasitic entity that wears the skin of forgotten villagers to hunt unsuspecting wanderers.',
    icon: 'UserX'
  },
  {
    id: 'c3',
    name: 'The Screaming Fog',
    dangerLevel: 'Existential',
    behavior: 'A sentient red mist event that slowly drains sanity, disables sprinting, and causes hallucinated enemy footsteps.',
    lore: 'When the red mist rolls in, veteran survivors barricade themselves in cobblestone bunkers and cover all glass windows.',
    icon: 'Wind'
  }
];

export const DOWNLOAD_VERSIONS: ModVersion[] = [
  {
    version: 'v1.4.2',
    minecraftVersion: '1.20.1',
    loader: 'Forge',
    fileSize: '28.4 MB',
    releaseDate: 'July 2026',
    downloadUrl: '#download-forge-1201',
    checksum: 'sha256-a9f81d82e1872c4e',
    isLatest: true
  },
  {
    version: 'v1.4.2',
    minecraftVersion: '1.20.1',
    loader: 'Fabric',
    fileSize: '27.9 MB',
    releaseDate: 'July 2026',
    downloadUrl: '#download-fabric-1201',
    checksum: 'sha256-b8c71d93d2983d5f',
    isLatest: true
  },
  {
    version: 'v1.4.2',
    minecraftVersion: '1.20.2',
    loader: 'NeoForge',
    fileSize: '29.1 MB',
    releaseDate: 'July 2026',
    downloadUrl: '#download-neoforge-1202',
    checksum: 'sha256-c7d61e04f3094e6a',
    isLatest: false
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Is Folk Valley completely free to download?',
    answer: 'Yes! Folk Valley is 100% free and open-source. You can download it directly from CurseForge, Modrinth, or from this official website without any paywalls.',
    category: 'General'
  },
  {
    id: 'faq2',
    question: 'Does Folk Valley support multiplayer / server play?',
    answer: 'Absolutely. Folk Valley is fully synchronized for dedicated servers and LAN multiplayer. All players on the server will experience synchronized night events, red fog, and creature audio cues.',
    category: 'Compatibility'
  },
  {
    id: 'faq3',
    question: 'Which Minecraft versions are supported?',
    answer: 'The primary stable release supports Minecraft 1.20.1 and 1.20.2. Ports for 1.20.4 and 1.21 are currently in active beta testing on our Discord server.',
    category: 'Compatibility'
  },
  {
    id: 'faq4',
    question: 'Does it require Forge, Fabric, or NeoForge?',
    answer: 'Folk Valley has native builds for both Forge (1.20.1+), Fabric (1.20.1+ via Fabric API), and NeoForge (1.20.2+). Select your preferred mod loader in the Download section below.',
    category: 'Installation'
  },
  {
    id: 'faq5',
    question: 'What dependency mods are required to run Folk Valley?',
    answer: 'For Forge & NeoForge: Requires GeckoLib 4.0+. For Fabric: Requires GeckoLib, Fabric API, and Cloth Config API. All required dependencies are lightweight and automatically linked in CurseForge.',
    category: 'Installation'
  },
  {
    id: 'faq6',
    question: 'Is Folk Valley compatible with shaders (e.g. Iris, Oculus, Complementary)?',
    answer: 'Yes! Folk Valley includes a custom shader fallback pass. Fog effects and visual sanity vignettes adapt seamlessly with popular shader packs like Complementary, Complementary Reimagined, and BSLL.',
    category: 'Compatibility'
  }
];

export const CHANGELOG_v142 = [
  'Added "The Pine Stalker" procedural stalking AI with sound-locating pathfinding.',
  'New Volumetric Blood Red Fog storm event with adjustable spawn chance in folkvalley-common.toml.',
  'Added 18 new immersive environmental 3D sound cues (wood scratch, whisper, distant bell).',
  'Created 3 haunted wooden cabin structures in Taiga and Old Growth Pine biomes.',
  'Optimized mob AI tick loops resulting in a 35% reduction in CPU overhead during night events.',
  'Fixed tile entity memory leak on dedicated servers running Forge 1.20.1.'
];
