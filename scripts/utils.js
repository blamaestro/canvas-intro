import { ctx } from './canvas.js';
import options from './constants.js';

export function getRandomNumber(min = 0, max) {
  return Math.random() * (max - min) + min;
};

export function getDistanceBetweenPoints(pointA, pointB) {
  const dx = pointA.x - pointB.x;
  const dy = pointA.y - pointB.y;

  return Math.sqrt(dx * dx + dy * dy);
};

export function drawLineBetweenPoints(pointA, pointB) {
  ctx.strokeStyle = pointA.color;
  ctx.lineWidth = options.connectingLineWidth;

  ctx.beginPath();
  ctx.moveTo(pointA.x, pointA.y);
  ctx.lineTo(pointB.x, pointB.y);
  ctx.stroke();
  ctx.closePath();
}
