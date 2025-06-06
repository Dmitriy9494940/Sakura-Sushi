
function tiltEffect(event) {
  const card = event.currentTarget.querySelector('.card');
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * -10;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetTilt(event) {
  const card = event.currentTarget.querySelector('.card');
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
}
