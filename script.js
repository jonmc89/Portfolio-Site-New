// Mobile Menu

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const items = document.querySelectorAll('.header-link');
const indicator = document.getElementById('indicator');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('visible');
  menuBtn.classList.toggle('highlighted');
});

// Section Fade

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.section-fade').forEach((section) => {
  observer.observe(section);
});

// Nav Indicator

function moveIndicator(item) {
  if (!item || !indicator) return;

  indicator.style.width = `${item.offsetWidth}px`;
  indicator.style.left = `${item.offsetLeft}px`;
}

const activeItem = document.querySelector('.header-link.active') || items[0];
moveIndicator(activeItem);

items.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.header-link.active')?.classList.remove('active');

    item.classList.add('active');
    moveIndicator(item);
  });
});
