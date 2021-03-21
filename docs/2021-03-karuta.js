const app = new Framework7({
  el: '#app',
});
const mainView = app.views.create('.main-view');

const karutaCard = [
  { url: "2021-03-karuta/あ-飯塚母.jpg", caption: "あ-飯塚母" },
  { url: "2021-03-karuta/い-飯塚父.jpg", caption: "い-飯塚父" },
  { url: "2021-03-karuta/う-五十嵐家.jpg", caption: "う-五十嵐家" },
  { url: "2021-03-karuta/え-五十嵐家.jpg", caption: "え-五十嵐家" },
  { url: "2021-03-karuta/お-石崎母.jpg", caption: "お-石崎母" },
  { url: "2021-03-karuta/か-石崎父.jpg", caption: "か-石崎父" },
  { url: "2021-03-karuta/き-岡本母.jpg", caption: "き-岡本母" },
  { url: "2021-03-karuta/く-岡本父.jpg", caption: "く-岡本父" },
  { url: "2021-03-karuta/け-神尾母.jpg", caption: "け-神尾母" },
  { url: "2021-03-karuta/こ-神尾父.jpg", caption: "こ-神尾父" },
  { url: "2021-03-karuta/さ-小泉父.jpg", caption: "さ-小泉父" },
  { url: "2021-03-karuta/し-小泉母.jpg", caption: "し-小泉母" },
  { url: "2021-03-karuta/す-小菅家.jpg", caption: "す-小菅家" },
  { url: "2021-03-karuta/せ-小菅父.jpg", caption: "せ-小菅父" },
  { url: "2021-03-karuta/そ-後藤父.jpg", caption: "そ-後藤父" },
  { url: "2021-03-karuta/た-後藤母.jpg", caption: "た-後藤母" },
  { url: "2021-03-karuta/ち-篠部家.jpg", caption: "ち-篠部家" },
  { url: "2021-03-karuta/つ-篠部家.jpg", caption: "つ-篠部家" },
  { url: "2021-03-karuta/て-菅原母.jpg", caption: "て-菅原母" },
  { url: "2021-03-karuta/と-菅原父.jpg", caption: "と-菅原父" },
  { url: "2021-03-karuta/な-千田家.jpg", caption: "な-千田家" },
  { url: "2021-03-karuta/に-千田家.jpg", caption: "に-千田家" },
  { url: "2021-03-karuta/ぬ-高石父.jpg", caption: "ぬ-高石父" },
  { url: "2021-03-karuta/ね-高石母.jpg", caption: "ね-高石母" },
  { url: "2021-03-karuta/の-高橋母.jpg", caption: "の-高橋母" },
  { url: "2021-03-karuta/は-高橋父.jpg", caption: "は-高橋父" },
  { url: "2021-03-karuta/ひ-高山母.jpg", caption: "ひ-高山母" },
  { url: "2021-03-karuta/ふ-高山父.jpg", caption: "ふ-高山父" },
  { url: "2021-03-karuta/へ-竹内家.jpg", caption: "へ-竹内家" },
  { url: "2021-03-karuta/ほ-竹内母.jpg", caption: "ほ-竹内母" },
  { url: "2021-03-karuta/ま-益子父.jpg", caption: "ま-益子父" },
  { url: "2021-03-karuta/み-益子母.jpg", caption: "み-益子母" },
  { url: "2021-03-karuta/む-三雲家.jpg", caption: "む-三雲家" },
  { url: "2021-03-karuta/め-三雲家.jpg", caption: "め-三雲家" },
  { url: "2021-03-karuta/も-三谷家.jpg", caption: "も-三谷家" },
  { url: "2021-03-karuta/や-三谷家.jpg", caption: "や-三谷家" },
  { url: "2021-03-karuta/ゆ-山田(ももた)家.jpg", caption: "ゆ-山田(ももた)家" },
  { url: "2021-03-karuta/よ-山田(ももた)家.jpg", caption: "よ-山田(ももた)家" },
  { url: "2021-03-karuta/ら-山田(りの)母.jpg", caption: "ら-山田(りの)母" },
  { url: "2021-03-karuta/り-山田(りの)父.jpg", caption: "り-山田(りの)父" },
  { url: "2021-03-karuta/る-福川家(絵は采値ちゃん).jpg", caption: "る-福川家(絵は采値ちゃん)" },
  { url: "2021-03-karuta/れ-福川家(絵は采値ちゃん).jpg", caption: "れ-福川家(絵は采値ちゃん)" },
  { url: "2021-03-karuta/ろ-上田家(絵は道郎くん).jpg", caption: "ろ-上田家(絵は道郎くん)" },
  { url: "2021-03-karuta/わ-上田家(絵は道郎くん).jpg", caption: "わ-上田家(絵は道郎くん)" },
  { url: "2021-03-karuta/wo.jpg", caption: "を-詠み人知らず" },
  { url: "2021-03-karuta/nn.jpg", caption: "ん-詠み人知らず" }
];

const pb = app.photoBrowser.create({ photos:
  [{ url: '2021-03-karuta/八年間.jpg', caption: '八年間' }].concat(karutaCard).concat([{ url: 'img/canoe.png', caption: 'カヌー' }])
});
const openPhotoBrowser = (idx) => pb.open(idx);

window.onload = () => {
  const fr = document.createDocumentFragment();
  karutaCard.forEach((karuta, idx) => {
    const img = document.createElement('img');
    img.src = karuta.url;
    img.alt = karuta.caption;
    img.addEventListener('click', () => openPhotoBrowser(idx + 1));
    img.classList.add('card');

    const cap = document.createElement('figcaption');
    cap.classList.add('text-align-center');
    cap.innerText = karuta.caption;

    const fig = document.createElement('figure');
    fig.appendChild(img);
    fig.appendChild(cap);
    fr.appendChild(fig);
  });
  document.querySelector('#ls-karuta').appendChild(fr);
};
