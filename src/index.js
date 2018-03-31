import p5 from 'p5';
// import Baton from './js/Baton';
// import Walker from './js/Walker';
import Wave from './js/Wave';

// Initialize sketch
new p5(Wave);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function(data) {
    console.log('dispose!');
  });
}