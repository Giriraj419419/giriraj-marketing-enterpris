const Jimp = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/logo.jpg');
    
    // Iterate over all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If pixel is very close to white, make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // alpha channel
      }
    });
    
    await image.writeAsync('public/logo.png');
    console.log('Successfully saved to public/logo.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
