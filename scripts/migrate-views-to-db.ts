/**
 * Migrations-Script: Migriert View-Counts aus blog-views.json zur SQLite-Datenbank
 * 
 * Ausführung: npx tsx scripts/migrate-views-to-db.ts
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { setBlogViews, getAllBlogViews } from '../lib/blog-views-db';

const JSON_FILE = join(process.cwd(), 'lib', 'blog-views.json');

interface BlogViews {
  [slug: string]: number;
}

function migrateViews() {
  console.log('🔄 Starte Migration der Blog-Views zur Datenbank...\n');
  
  // Lese bestehende JSON-Datei
  if (!existsSync(JSON_FILE)) {
    console.log('⚠️  Keine blog-views.json gefunden. Überspringe Migration.');
    return;
  }
  
  try {
    const fileContent = readFileSync(JSON_FILE, 'utf-8');
    const views: BlogViews = JSON.parse(fileContent);
    
    console.log(`📊 Gefundene Einträge: ${Object.keys(views).length}\n`);
    
    // Migriere jeden Eintrag
    let migrated = 0;
    for (const [slug, count] of Object.entries(views)) {
      setBlogViews(slug, count);
      console.log(`✅ ${slug}: ${count} Views`);
      migrated++;
    }
    
    console.log(`\n✨ Migration abgeschlossen: ${migrated} Einträge migriert\n`);
    
    // Zeige alle Views in der Datenbank
    const allViews = getAllBlogViews();
    console.log('📈 Aktuelle Datenbank-Inhalte:');
    allViews.forEach(({ slug, views }) => {
      console.log(`   ${slug}: ${views} Views`);
    });
    
  } catch (error) {
    console.error('❌ Fehler bei der Migration:', error);
    process.exit(1);
  }
}

migrateViews();
