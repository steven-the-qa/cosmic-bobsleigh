import fs from 'fs';
import path from 'path';

const DARDEN_DIR = 'public/darden';

// Helper to convert filename to title case and remove extension
function toTitleCase(filename) {
    return filename
        .replace(/\.[^/.]+$/, '') // Remove extension
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Get descriptions for each restaurant
const descriptions = {
    'olive_garden': 'Italian-American cuisine in a family-friendly setting',
    'longhorn_steakhouse': 'Legendary steaks done right',
    'cheddars': 'Made-from-scratch comfort food',
    'yard_house': 'Great food and world\'s largest selection of draft beer',
    'seasons_52': 'Fresh grill and wine bar',
    'bahama_breeze': 'Caribbean-inspired food and tropical drinks',
    'capital_grille': 'Upscale steakhouse and fine dining',
    'eddie_v': 'Luxury dining with fresh seafood and steaks'
};

function generateExperiences() {
    const files = fs.readdirSync(DARDEN_DIR)
        .filter(file => file.endsWith('.png'));

    const experiences = files.map(file => {
        const id = path.basename(file, '.png');
        return {
            id,
            title: toTitleCase(id),
            description: descriptions[id] || `Visit to ${toTitleCase(id)}`,
            imageUrl: `/darden/${file}`,
            date: '2023-07-01'
        };
    });

    console.log(JSON.stringify(experiences, null, 2));
}

generateExperiences();
