import { clearCanvas } from './canvas.js';
import { moveParticles } from './particles.js';

function animate() {
  clearCanvas();

  moveParticles();

  requestAnimationFrame(animate);
}

animate();
