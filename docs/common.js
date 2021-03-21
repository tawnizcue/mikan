const app = new Framework7({
  el: '#app',
});
const mainView = app.views.create('.main-view');

const resourceId = '202103a';
window.onload = () => {
  // 画像ギャラリー
  if (images) {
    const fr = document.createDocumentFragment();
    images.forEach((karuta, idx) => {
      const img = document.createElement('img');
      img.src = karuta.url;
      img.alt = karuta.caption;
      img.addEventListener('click', () => openPhotoBrowser(idx));
      img.classList.add('card');

      const cap = document.createElement('figcaption');
      cap.classList.add('text-align-center');
      cap.innerText = karuta.caption;

      const fig = document.createElement('figure');
      fig.appendChild(img);
      fig.appendChild(cap);
      fr.appendChild(fig);
    });
    document.querySelector('#ls').appendChild(fr);
  }
};
