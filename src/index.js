import './styles/index.scss';
import './assets/extract-text-webpack-plugin.png';

const a = () => {
  alert([1, 2, 3].map(n => n + 1));
};
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'hellodadasasss';
  a();
  return element;
}

document.body.appendChild(component());
