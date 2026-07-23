export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Creatures' | 'Structures' | 'Ambience' | 'Night Events';
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Compatibility' | 'Installation';
}

export interface CreatureEntry {
  id: string;
  name: string;
  dangerLevel: 'Uncanny' | 'Severe' | 'Lethal' | 'Existential';
  behavior: string;
  lore: string;
  icon: string;
}

export interface ModVersion {
  version: string;
  minecraftVersion: string;
  loader: 'Forge' | 'Fabric' | 'NeoForge';
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  checksum: string;
  isLatest?: boolean;
}
