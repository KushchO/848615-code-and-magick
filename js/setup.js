'use strict';
var fragment = document.createDocumentFragment();
var similarMages = document.querySelector('.setup-similar-list');
var setupSemiliar = document.querySelector('.setup-similar');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var sernames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var colors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var generateMagesList = function (quantity) {
  var mages = [];
  for (var i = 0; i < quantity; i++) {
    var mage = {};
    mage.name = names[getRandomInRange(1, names.length - 1)] + ' ' + sernames[getRandomInRange(1, sernames.length - 1)];
    mage.coatColor = colors[getRandomInRange(1, colors.length - 1)];
    mage.eyesColor = eyeColors[getRandomInRange(1, eyeColors.length - 1)];
    mages.push(mage);
  }

  return mages;
};

var mages = generateMagesList(4);
var generateMages = function (magesList) {
  for (var i = 0; i < magesList.length; i++) {
    var randomMage = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);
    randomMage.querySelector('.setup-similar-label').textContent = mages[i].name;
    randomMage.querySelector('.wizard-coat').style.fill = mages[i].coatColor;
    randomMage.querySelector('.wizard-eyes').style.fill = mages[i].eyesColor;
    fragment.appendChild(randomMage);
  }
  return fragment;
};

similarMages.appendChild(generateMages(mages));
setupSemiliar.classList.remove('hidden');


