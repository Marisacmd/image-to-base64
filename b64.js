const fs = require('fs');

function base64Encode(file) {
    const result = fs.readFileSync(file, 'base64');
    return result;
}

console.log(base64Encode('image.png'));
