import p5 from 'p5';
// import Baton from './js/Baton';
// import Walker from './js/Walker';
// import OOPWave from './js/OOPWave';
import Gradient from './js/Gradient';

// Initialize sketch
new p5(Gradient);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function(data) {
    console.log('dispose!');
  });
}