import './css/index.scss';
import printMe from './print.js';
console.log('index.js');
if (module.hot) {
  module.hot.accept('./print.js', printMe)
}
