import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your lighthouses images folder
const LIGHTHOUSES_DIR = path.join(__dirname, '..', 'public', 'lighthouses');
// Path to your collections data file
const COLLECTIONS_FILE = path.join(__dirname, '..', 'src', 'content', 'lighthouses.json');

function generateExperiences() {
  // Read all files in the lighthouses directory
  const files = fs.readdirSync(LIGHTHOUSES_DIR);
  
  // Filter for image files (you can adjust extensions as needed)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  // Create experience objects for each image
  const experiences = imageFiles.map(filename => {
    // Remove file extension and convert to title case
    const name = filename
      .replace(/\.[^/.]+$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      name,
      image: `/lighthouses/${filename}`,
      // Add any other default fields you need
      description: `Visit the beautiful ${name} lighthouse`,
      location: 'Location TBD',
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    };
  });

  // Add this before writing the file
  const contentDir = path.dirname(COLLECTIONS_FILE);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Write to collections file
  fs.writeFileSync(
    COLLECTIONS_FILE,
    JSON.stringify({ lighthouses: experiences }, null, 2)
  );

  console.log(`Generated ${experiences.length} lighthouse experiences`);
}

generateExperiences(); 