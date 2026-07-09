const fs = require('fs');
const path = require('path');

const targetDirs = ['src', 'public'];
const rootFiles = ['index.html', 'package.json', 'README.md', 'package-lock.json'];
const extensions = ['.js', '.jsx', '.json', '.html', '.md', '.css'];

const replacements = [
  // Emails
  { search: /info@kktechsolutions\.in/g, replace: 'info@girirajmarketing.com' },
  // Component props
  { search: /kkTechServices/g, replace: 'companyServices' },
  { search: /whyKKTech/g, replace: 'whyChooseUs' },
  // Brand Names
  { search: /KK Tech Solutions/g, replace: 'Giriraj Marketing' },
  { search: /KK Tech/g, replace: 'Giriraj Marketing' },
  { search: /KKTech/g, replace: 'Giriraj' },
  { search: /kk-tech-react/g, replace: 'giriraj-marketing-enterprise' }
];

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!extensions.includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  for (const { search, replace } of replacements) {
    content = content.replace(search, replace);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

// Process Root Files
for (const file of rootFiles) {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath);
  }
}

// Process Directories
for (const dir of targetDirs) {
  const fullPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(fullPath)) {
    walkDir(fullPath);
  }
}

console.log('Rebranding complete.');
