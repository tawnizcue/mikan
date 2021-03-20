const app = new Framework7({
  el: '#app',
});

const mainView = app.views.create('.main-view');

const karutaImage = [
  "2021-03-karuta/あ-飯塚母.jpg",
  "2021-03-karuta/い-飯塚父.jpg",
  "2021-03-karuta/う-五十嵐家.jpg",
  "2021-03-karuta/え-五十嵐家.jpg",
  "2021-03-karuta/お-石崎母.jpg",
  "2021-03-karuta/か-石崎父.jpg",
  "2021-03-karuta/き.png",
  "2021-03-karuta/く-岡本父.jpg",
  "2021-03-karuta/け-神尾母.jpg",
  "2021-03-karuta/こ-神尾父.jpg",
  "2021-03-karuta/さ-小泉父.jpg",
  "2021-03-karuta/し-小泉母.jpg",
  "2021-03-karuta/す-小菅家.jpg",
  "2021-03-karuta/せ.png",
  "2021-03-karuta/そ-後藤父.jpg",
  "2021-03-karuta/た-後藤母.jpg",
  "2021-03-karuta/ち-篠部家.jpg",
  "2021-03-karuta/つ-篠部家.jpg",
  "2021-03-karuta/て-菅原母.jpg",
  "2021-03-karuta/と-菅原父.jpg",
  "2021-03-karuta/な-千田家.jpg",
  "2021-03-karuta/に-千田家.jpg",
  "2021-03-karuta/ぬ-高石父.jpg",
  "2021-03-karuta/ね-高石母.jpg",
  "2021-03-karuta/の-高橋母.jpg",
  "2021-03-karuta/は-高橋父.jpg",
  "2021-03-karuta/ひ-高山母.jpg",
  "2021-03-karuta/ふ-高山父.jpg",
  "2021-03-karuta/へ-竹内家.jpg",
  "2021-03-karuta/ほ-竹内母.jpg",
  "2021-03-karuta/ま-益子父.jpg",
  "2021-03-karuta/み-益子母.jpg",
  "2021-03-karuta/む-三雲家.jpg",
  "2021-03-karuta/め-三雲家.jpg",
  "2021-03-karuta/も-三谷家.jpg",
  "2021-03-karuta/や-三谷家.jpg",
  "2021-03-karuta/ゆ-山田(ももた)家.jpg",
  "2021-03-karuta/よ-山田(ももた)家.jpg",
  "2021-03-karuta/ら-山田(りの)母.jpg",
  "2021-03-karuta/り-山田(りの)父.jpg",
  "2021-03-karuta/る-福川家(絵は采値ちゃん).jpg",
  "2021-03-karuta/れ-福川家(絵は采値ちゃん).jpg",
  "2021-03-karuta/ろ-上田家(絵は道郎くん).jpg",
  "2021-03-karuta/わ-上田家(絵は道郎くん).jpg",
  "2021-03-karuta/wo.jpg",
  "2021-03-karuta/nn.jpg"
];
const pb = app.photoBrowser.create({ photos:['2021-03-karuta/八年間.jpg'].concat(karutaImage).concat(['img/canoe.png']) });
const openPhotoBrowser = (idx) => pb.open(idx);

window.onload = () => {
  const ls = document.querySelector('#ls-karuta');
  karutaImage.forEach((imgPath, idx) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('click', () => openPhotoBrowser(idx + 1));
    img.classList.add('card');
    ls.appendChild(img);
  });
};
