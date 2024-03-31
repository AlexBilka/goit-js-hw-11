import { elem, word, showLoading } from '../main';

export function fetchingFrom() {
  const options = {
    method: 'GET',
  };

  const params = new URLSearchParams({
    key: '42957626-41f27679caf00334274850a6e',
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${params}`;

  showLoading();

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
