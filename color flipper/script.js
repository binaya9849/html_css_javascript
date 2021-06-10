/*
! Problem
$ when user clicks button
$ Generate a random color
$ change the background color of body with that random color
$ show the rgba() value of that color

! Plan
- add event listener on button
  - when activated, run the main function
- main function calls randomColor(), displayColor(), changeColor()
- add event listener on anchor tags
  - on click, set flipper value to the id value of that element
  - and add active class to that element
*/

// ! global variable
let flipper = 'rgb';

// ! DOM ELements Object
const domEL = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  button: document.querySelector('#clickButton'),
  options: document.querySelectorAll('.nav__link'),
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rgbColor () {
  return `rgb(${randomNumber(0, 256)}, ${randomNumber(0, 256)}, ${randomNumber(
    0,
    256
  )})`;
}

function nameColor() {
  // ! Color Name
  const CSS_COLOR_NAMES = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
  ];

  return CSS_COLOR_NAMES[randomNumber(0, CSS_COLOR_NAMES.length - 1)];
}
//ya bata hex suru hola
//constant haru declare gareko
const value = "0123456789abcdef";
//makadox jasto math 
function getRandomNumber(){
  return value[Math.floor(Math.random()*value.length)]
}
//array ko lagi
function getRandom(){
  let arr= [];
  arr.push(getRandomNumber());
  return arr[Math.floor(Math.random()*arr.length)]
}
//loop ko lagi tyo naya color generate 
function hexColor() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
   color +=getRandom();
  }
  return color;
}
//ya samma hex ko xahi sakyo 
function colorChanger(element, color) {
  element.style.backgroundColor = color;
}

function displayColor(element, color) {
  element.innerText = color;
}

function clickHandler() {
  let color;
  if (flipper === 'rgb') {
    color = rgbColor();
  } else if (flipper === 'name') {
    color = nameColor();
  } else if (flipper === 'hex') {
    color = hexColor();
  }

  colorChanger(domEL.body, color);
  displayColor(domEL.color, color);
}

domEL.button.addEventListener('click', clickHandler);

domEL.options.forEach((optionEl, i, array) => {
  optionEl.addEventListener('click', (e) => {
    array.forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    flipper = e.target.getAttribute('id');
  });
});

