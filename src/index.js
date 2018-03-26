import p5 from 'p5';
import Baton from './js/Baton';
// import Walker from './js/Walker';

// Initialize sketch
new p5(Baton);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function(data) {
    	console.log('dispose!');
  });
}