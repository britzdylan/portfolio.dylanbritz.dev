import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['public/opt/images/*.{jpg,png,jpeg}'], {
  destination: 'public/opt/images',
  plugins: [imageminWebp({ quality: 80 })],
});

console.log('Images optimized');
