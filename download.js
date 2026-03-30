const fs = require('fs');
const https = require('https');
const path = require('path');

const turns = [1, 2, 3, 4, 5, 6, 7];
const dir = path.join('/', 'public');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function tryDownload() {
  for (const turn of turns) {
    const url = `https://storage.googleapis.com/manta-zmt/tmp/turn-${turn}/attachment-0.png`;
    console.log(`Trying ${url}...`);
    
    const success = await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(path.join(dir, 'photo1.png'));
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Successfully downloaded from turn ${turn}`);
            resolve(true);
          });
        } else {
          resolve(false);
        }
      }).on('error', () => resolve(false));
    });
    
    if (success) return;
  }
  console.log('Could not find the image.');
}

tryDownload();
