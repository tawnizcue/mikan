const imgIdentifier = '202103';
const images = [
  { url: "img/④ 室内履き.jpg?" + imgIdentifier, caption: "④ 室内履き" },
  { url: "img/➂-1 座布団表面 光の刺繍.jpg?" + imgIdentifier, caption: "➂-1 座布団表面 光の刺繍" },
  { url: "img/⑥-1 カルタの袱紗.JPG?" + imgIdentifier, caption: "⑥-1 カルタの袱紗" },
  { url: "img/②-1 エコバッグ.JPG?" + imgIdentifier, caption: "②-1 エコバッグ" },
  { url: "img/➂-2 座布団 背面 イニシャル刺繍 Y.jpg?" + imgIdentifier, caption: "➂-2 座布団 背面 イニシャル刺繍 Y" },
  { url: "img/⑥-2 箱には熨斗(の絵).JPG?" + imgIdentifier, caption: "⑥-2 箱には熨斗(の絵)" },
  { url: "img/②-2 エコバッグ.JPG?" + imgIdentifier, caption: "②-2 エコバッグ" },
  { url: "img/⑥-3 箱のライニングも学園カレンダー.JPG?" + imgIdentifier, caption: "⑥-3 箱のライニングも学園カレンダー" },
  { url: "img/⑥-4 帯は学園カレンダーで作成.JPG?" + imgIdentifier, caption: "⑥-4 帯は学園カレンダーで作成" },
  { url: "img/➄高橋クラス アルバム表紙画像.jpg?" + imgIdentifier, caption: "➄高橋クラス アルバム表紙画像" },
  { url: "img/①コサージュ.jpg?" + imgIdentifier, caption: "①コサージュ" }
];

const pb = app.photoBrowser.create({ photos:images });
const openPhotoBrowser = (idx) => pb.open(idx);
