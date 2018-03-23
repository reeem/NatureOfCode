import p5 from 'p5';
import sketch from './js/sketch';

// Initialize sketch
new p5(sketch);

if (module.hot) {
  console.log('hot loader!');
  module.hot.accept();
  module.hot.dispose(function(data) {
    	console.log('dispose!');
  });
}