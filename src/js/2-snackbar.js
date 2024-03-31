// ============= import modules =============
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ==========================================

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const state = form.state.value;
  const delay = parseInt(form.delay.value);

  // ============= validation of the delay value ==============
  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid positive number for the delay',
      position: 'topLeft',
    });
    return;
  }

  // ============= create promise ==============
  try {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(
            iziToast.success({
              title: 'Resolve',
              message: `✅ Fulfilled promise in ${delay}ms`,
              position: 'topRight',
            })
          );
        } else {
          reject(
            iziToast.error({
              title: 'Reject',
              message: `❌ Rejected promise in ${delay}ms`,
              position: 'topLeft',
            })
          );
        }
      }, delay);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
