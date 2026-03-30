const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, status: e.message }));
  });
}

async function run() {
  const promises = [];
  for (let turn = 1; turn <= 15; turn++) {
    for (let att = 0; att <= 2; att++) {
      promises.push(checkUrl(`https://storage.googleapis.com/manta-zmt/tmp/turn-${turn}/attachment-${att}.png`));
      promises.push(checkUrl(`https://storage.googleapis.com/manta-zmt/tmp/turn-${turn}/attachment-${att}.jpg`));
      promises.push(checkUrl(`https://storage.googleapis.com/manta-zmt/tmp/turn-${turn}/attachment-${att}.jpeg`));
    }
  }
  const results = await Promise.all(promises);
  const found = results.filter(r => r.status === 200);
  console.log('Found:', found);
}

run();
