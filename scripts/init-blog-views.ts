/**
 * Initialisiert die Blog-Views-Datei mit den korrekten Startwerten
 * 
 * Ausführung: npx tsx scripts/init-blog-views.ts
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const VIEWS_FILE = join(process.cwd(), 'data', 'blog-views.json');

const initialViews = {
  "investieren-in-medina": 27,
  "investing-in-medina": 27,
  "saudi-premium-residency": 28,
  "familienzusammenfuehrung": 38,
  "in-saudi-arabien-leben-4-wege-nach-medina": 41,
  "so-startest-du-ein-business-in-saudi-arabien": 53
};

function initViews() {
  console.log('🔄 Initialisiere Blog-Views-Datei...\n');
  
  // Stelle sicher, dass das data-Verzeichnis existiert
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
    console.log('✅ data-Verzeichnis erstellt');
  }
  
  try {
    // Schreibe die Initialwerte
    writeFileSync(VIEWS_FILE, JSON.stringify(initialViews, null, 2), 'utf-8');
    console.log('✅ Blog-Views-Datei initialisiert:');
    console.log(JSON.stringify(initialViews, null, 2));
    console.log('\n✨ Fertig!');
  } catch (error) {
    console.error('❌ Fehler beim Initialisieren:', error);
    process.exit(1);
  }
}

initViews();
