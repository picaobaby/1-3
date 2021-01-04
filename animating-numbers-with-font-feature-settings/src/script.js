

const easeOutQuart = (t, b, c, d) => {
  return -c * (( t = t / d - 1) * t * t * t - 1) + b;
};

const spans = [...document.querySelectorAll('span')];

const animate = value => {
    const time = {
    total: 4000,
    start: performance.now()
  };
  const tick = now => {
    const elapsed = now - time.start,
          progress = easeOutQuart(elapsed, 0, 1, time.total);

    spans.forEach(s => s.textContent = Math.round(progress * value).toLocaleString())
    elapsed < time.total ? window.requestAnimationFrame(tick) : null;
  }
  window.requestAnimationFrame(tick);
}
  
window.addEventListener('load', () => {
  animate(50000)
})

document.querySelector('button').addEventListener('click', () => {
  animate(Math.round(Math.random()*50000))
});
    
    