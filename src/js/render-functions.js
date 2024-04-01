export function galleryMarkup(params) {
  return params
    .map(
      image => `<li class="gallery-item">
                <a class="gallery-link" href="${image.largeImageURL}">
                  <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <div class="stats">
                  <p class="text">Likes<br/>${image.likes}</p>
                  <p class="text">Views<br/>${image.views}</p>
                  <p class="text">Comments<br/>${image.comments}</p>
                  <p class="text">Downloads<br/>${image.downloads}</p>
                </div>
              </li>`
    )
    .join('');
}
