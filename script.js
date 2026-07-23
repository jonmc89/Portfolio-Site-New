// Mobile Menu

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('visible');
  menuBtn.classList.toggle('highlighted');
});

// Section Fade

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visbile');
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
