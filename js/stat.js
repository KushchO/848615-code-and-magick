'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LEFT_GAP = 40;
var TOP_GAP = 30;
var BOTTOM_GAP = 40;
var CURRENT_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_COLOR = '#000000';
var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';

var startPositionX = CLOUD_X + LEFT_GAP;
var startPositionY = CLOUD_Y + GAP + CLOUD_HEIGHT;
var fullBarWidth = BAR_WIDTH + BAR_GAP;

var cloudTitle = [
  'Ура вы победили!',
  'Список результатов:'
];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length > 0) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return Math.round(maxElement);
  }

  return 1;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT_SIZE + 'px' + ' ' + FONT_FAMILY;
  ctx.textBaseline = 'hanging';
  for (var i = 0; i < cloudTitle.length; i++) {
    ctx.fillText(cloudTitle[i], CLOUD_X + GAP * 5, (GAP * 2) * (1 + i));
  }

  var maxTime = getMaxElement(times);

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[j], (startPositionX) + (fullBarWidth) * j, (startPositionY) - BOTTOM_GAP);
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';;
    if (names[j] === 'Вы') {
      ctx.fillStyle = CURRENT_BAR_COLOR;
    }

    var currentBarHeight = Math.round((MAX_BAR_HEIGHT * Math.round(times[j])) / maxTime);
    ctx.fillRect((startPositionX) + (fullBarWidth) * j, (startPositionY) - BOTTOM_GAP - currentBarHeight - GAP, BAR_WIDTH, currentBarHeight);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(times[j]), (startPositionX) + (fullBarWidth) * j, (startPositionY) - BOTTOM_GAP - currentBarHeight - TOP_GAP);
  }

};

