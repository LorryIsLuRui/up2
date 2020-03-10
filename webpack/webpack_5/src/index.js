import './css/index.scss';
import './print.js';
console.log('index.js');
if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
}
