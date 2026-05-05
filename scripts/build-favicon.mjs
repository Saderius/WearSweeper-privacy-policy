import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const content = fs.readFileSync(path.join(__dirname, '../src/logoBase64.ts'), 'utf8');
  const match = content.match(/data:image\/png;base64,([^`]+)/);
  
  if (match && match[1]) {
    const base64 = match[1];
    fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
    fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), Buffer.from(base64, 'base64'));
    console.log('Successfully generated public/favicon.png from base64.');
  }
} catch (e) {
  console.error('Failed to generate favicon.png', e);
}
