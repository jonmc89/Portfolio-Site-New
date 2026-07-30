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

// Message Send

emailjs.init({
  publicKey: 'rNNP43bprqgFovXvD',
});

const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector('.form-submit');
  submitButton.disabled = true;
  submitButton.value = 'Sending...';

  try {
    await emailjs.sendForm('service_a3lgzzt', 'template_hi7doq6', form);

    submitButton.value = 'Message Sent!';
    form.reset();
  } catch (error) {
    console.error('EmailJS error:', error);
    submitButton.value = 'Failed to Send';
  } finally {
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.value = 'Send message';
    }, 3000);
  }
});

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
