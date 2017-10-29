import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

   btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
   
  return element;
}

if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }
// cosnole.log('I get called from print.js!');
document.body.appendChild(component());