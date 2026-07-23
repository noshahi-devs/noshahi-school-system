const fs = require('fs');
const path = 'e:\\NSS Website\\noshahi-school-system\\academics.html';
const premiumPath = 'e:\\NSS Website\\noshahi-school-system\\premium_subject.html';

const premiumContent = fs.readFileSync(premiumPath, 'utf8');

let currentContent = fs.readFileSync(path, 'utf8');
let currentLines = currentContent.split('\n');

let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < currentLines.length; i++) {
    if (currentLines[i].includes('<!-- ===== SUBJECT DISTRIBUTION ACROSS LEVELS ===== -->')) {
        startIdx = i;
    }
    if (currentLines[i].includes('<!-- ===== FOOTER ===== -->')) {
        endIdx = i;
        break;
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    // Replace everything between startIdx and endIdx with the premium content
    const newLines = [...currentLines.slice(0, startIdx), premiumContent, '', ...currentLines.slice(endIdx)];
    fs.writeFileSync(path, newLines.join('\n'));
    console.log('Successfully applied premium section!');
} else {
    console.log('Could not find boundaries.', startIdx, endIdx);
}
