import p5 from 'p5';
import Walker from './js/Walker';

// Initialize sketch
new p5(Walker);
// Walker(p5);

if (module.hot) {
  console.log('hot loader!');
  module.hot.accept();
  module.hot.dispose(function(data) {
    	console.log('dispose!');
  });
}