const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const regex = /\btracking-(wide|wider|widest|\[0\.2em\])\b/g;

function processDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(dir, file);
      fs.stat(fullPath, (err, stat) => {
        if (err) {
          console.log('Error stat file:', err);
          return;
        }

        if (stat.isDirectory()) {
          processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.html')) {
          fs.readFile(fullPath, 'utf8', (err, data) => {
            if (err) {
              console.log('Error reading file:', err);
              return;
            }

            if (regex.test(data)) {
              const result = data.replace(regex, '');
              fs.writeFile(fullPath, result, 'utf8', err => {
                if (err) {
                  console.log('Error writing file:', err);
                } else {
                  console.log(`Updated ${fullPath}`);
                }
              });
            }
          });
        }
      });
    });
  });
}

processDirectory(directoryPath);
