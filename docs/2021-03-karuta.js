const app = new Framework7({
  el: '#app',
});
const mainView = app.views.create('.main-view');

const imgIdentifier = '202103';
const karutaCard = [
  { url: "2021-03-karuta/あ-飯塚母.jpg?" + imgIdentifier, caption: "あ-飯塚母" },
  { url: "2021-03-karuta/い-飯塚父.jpg?" + imgIdentifier, caption: "い-飯塚父" },
  { url: "2021-03-karuta/う-五十嵐家.jpg?" + imgIdentifier, caption: "う-五十嵐家" },
  { url: "2021-03-karuta/え-五十嵐家.jpg?" + imgIdentifier, caption: "え-五十嵐家" },
  { url: "2021-03-karuta/お-石崎母.jpg?" + imgIdentifier, caption: "お-石崎母" },
  { url: "2021-03-karuta/か-石崎父.jpg?" + imgIdentifier, caption: "か-石崎父" },
  { url: "2021-03-karuta/き-岡本母.jpg?" + imgIdentifier, caption: "き-岡本母" },
  { url: "2021-03-karuta/く-岡本父.jpg?" + imgIdentifier, caption: "く-岡本父" },
  { url: "2021-03-karuta/け-神尾母.jpg?" + imgIdentifier, caption: "け-神尾母" },
  { url: "2021-03-karuta/こ-神尾父.jpg?" + imgIdentifier, caption: "こ-神尾父" },
  { url: "2021-03-karuta/さ-小泉父.jpg?" + imgIdentifier, caption: "さ-小泉父" },
  { url: "2021-03-karuta/し-小泉母.jpg?" + imgIdentifier, caption: "し-小泉母" },
  { url: "2021-03-karuta/す-小菅家.jpg?" + imgIdentifier, caption: "す-小菅家" },
  { url: "2021-03-karuta/せ-小菅父.jpg?" + imgIdentifier, caption: "せ-小菅父" },
  { url: "2021-03-karuta/そ-後藤父.jpg?" + imgIdentifier, caption: "そ-後藤父" },
  { url: "2021-03-karuta/た-後藤母.jpg?" + imgIdentifier, caption: "た-後藤母" },
  { url: "2021-03-karuta/ち-篠部家.jpg?" + imgIdentifier, caption: "ち-篠部家" },
  { url: "2021-03-karuta/つ-篠部家.jpg?" + imgIdentifier, caption: "つ-篠部家" },
  { url: "2021-03-karuta/て-菅原母.jpg?" + imgIdentifier, caption: "て-菅原母" },
  { url: "2021-03-karuta/と-菅原父.jpg?" + imgIdentifier, caption: "と-菅原父" },
  { url: "2021-03-karuta/な-千田家.jpg?" + imgIdentifier, caption: "な-千田家" },
  { url: "2021-03-karuta/に-千田家.jpg?" + imgIdentifier, caption: "に-千田家" },
  { url: "2021-03-karuta/ぬ-高石父.jpg?" + imgIdentifier, caption: "ぬ-高石父" },
  { url: "2021-03-karuta/ね-高石母.jpg?" + imgIdentifier, caption: "ね-高石母" },
  { url: "2021-03-karuta/の-高橋母.jpg?" + imgIdentifier, caption: "の-高橋母" },
  { url: "2021-03-karuta/は-高橋父.jpg?" + imgIdentifier, caption: "は-高橋父" },
  { url: "2021-03-karuta/ひ-高山母.jpg?" + imgIdentifier, caption: "ひ-高山母" },
  { url: "2021-03-karuta/ふ-高山父.jpg?" + imgIdentifier, caption: "ふ-高山父" },
  { url: "2021-03-karuta/へ-竹内家.jpg?" + imgIdentifier, caption: "へ-竹内家" },
  { url: "2021-03-karuta/ほ-竹内母.jpg?" + imgIdentifier, caption: "ほ-竹内母" },
  { url: "2021-03-karuta/ま-益子父.jpg?" + imgIdentifier, caption: "ま-益子父" },
  { url: "2021-03-karuta/み-益子母.jpg?" + imgIdentifier, caption: "み-益子母" },
  { url: "2021-03-karuta/む-三雲家.jpg?" + imgIdentifier, caption: "む-三雲家" },
  { url: "2021-03-karuta/め-三雲家.jpg?" + imgIdentifier, caption: "め-三雲家" },
  { url: "2021-03-karuta/も-三谷家.jpg?" + imgIdentifier, caption: "も-三谷家" },
  { url: "2021-03-karuta/や-三谷家.jpg?" + imgIdentifier, caption: "や-三谷家" },
  { url: "2021-03-karuta/ゆ-山田(ももた)家.jpg?" + imgIdentifier, caption: "ゆ-山田(ももた)家" },
  { url: "2021-03-karuta/よ-山田(ももた)家.jpg?" + imgIdentifier, caption: "よ-山田(ももた)家" },
  { url: "2021-03-karuta/ら-山田(りの)母.jpg?" + imgIdentifier, caption: "ら-山田(りの)母" },
  { url: "2021-03-karuta/り-山田(りの)父.jpg?" + imgIdentifier, caption: "り-山田(りの)父" },
  { url: "2021-03-karuta/る-福川家(絵は采値ちゃん).jpg?" + imgIdentifier, caption: "る-福川家(絵は采値ちゃん)" },
  { url: "2021-03-karuta/れ-福川家(絵は采値ちゃん).jpg?" + imgIdentifier, caption: "れ-福川家(絵は采値ちゃん)" },
  { url: "2021-03-karuta/ろ-上田家(絵は道郎くん).jpg?" + imgIdentifier, caption: "ろ-上田家(絵は道郎くん)" },
  { url: "2021-03-karuta/わ-上田家(絵は道郎くん).jpg?" + imgIdentifier, caption: "わ-上田家(絵は道郎くん)" },
  { url: "2021-03-karuta/wo.jpg?" + imgIdentifier, caption: "を-詠み人知らず" },
  { url: "2021-03-karuta/nn.jpg?" + imgIdentifier, caption: "ん-詠み人知らず" }
];

const pb = app.photoBrowser.create({ photos:
  [{ url: '2021-03-karuta/八年間.jpg?' + imgIdentifier, caption: '八年間' }].concat(karutaCard).concat([{ url: 'img/canoe.png?' + imgIdentifier, caption: 'カヌー' }])
});
const openPhotoBrowser = (idx) => pb.open(idx);

window.onload = () => {
  // 画像ギャラリー
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
