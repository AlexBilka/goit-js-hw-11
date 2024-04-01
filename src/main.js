// ================ import modules ================

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getItems } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

// ============= document elements =============

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlay: true,
  overlayOpacity: 0.7,
});

// ============= Submit function =============

function handleSubmit(event) {
  event.preventDefault();

  // ================= reset ==================
  loaderPlay();
  gallery.innerHTML = '';

  const query = event.target['queryInput'].value.trim();

  if (query !== '') {
    getItems(query)
      .then(response => {
        console.log(response);
        if (response.hits.length === 0) {
          return iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
        gallery.innerHTML = galleryMarkup(response.hits);
        lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        loaderStop();
      });
  } else {
    iziToast.error({
      message: 'Please, enter a query, for example "cats"',
      position: 'topRight',
    });
  }

  event.currentTarget.reset(); // reset input value
}

function loaderPlay() {
  loader.classList.remove('is-hidden');
}

function loaderStop() {
  loader.classList.add('is-hidden');
}
