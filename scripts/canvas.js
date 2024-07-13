const canvas = document.getElementById('canvas');

export const ctx = canvas.getContext('2d');

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', setCanvasSize);

setCanvasSize();
