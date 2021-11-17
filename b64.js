const fs = require('fs');

function base64_encode(file) {
    const result = fs.readFileSync(file, 'base64');
    return result;
}

console.log(base64_encode('image.png'));
