import { ctx } from './canvas.js';
import options from './constants.js';
import { mouse } from './mouse.js';

import {
  getRandomNumber,
  getDistanceBetweenPoints,
  drawLineBetweenPoints,
} from './utils.js';

const particles = [];

let hue = 0;

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;

    this.size = getRandomNumber(1, 15);
    this.speedX = getRandomNumber(-options.maxParticleSpeed, options.maxParticleSpeed);
    this.speedY = getRandomNumber(-options.maxParticleSpeed, options.maxParticleSpeed);
    this.color = `hsl(${hue}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > options.minParticleSize - 0.1) {
      this.size -= options.particleSizeDecrement;
    }
  }

  draw() {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles(count) {
  Array(count).fill().forEach(() => {
    particles.push(new Particle());
  });
}

export function moveParticles() {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    particle.update();
    particle.draw();

    for (let j = i; j < particles.length; j++) {
      const nextParticle = particles[j];
      const distance = getDistanceBetweenPoints(particle, nextParticle);

      if (distance < options.maxLineLength) {
        drawLineBetweenPoints(particle, nextParticle);
      }
    }

    if (particle.size <= options.minParticleSize) {
      particles.splice(i, 1);
      i--;
    }
  }

  hue += options.hueIncrement;
}

window.addEventListener('click', e => {
  mouse.updatePosition(e);

  createParticles(options.particleCountOnClick);
});

window.addEventListener('mousemove', e => {
  mouse.updatePosition(e);

  createParticles(options.particleCountOnMouseMove);
});
