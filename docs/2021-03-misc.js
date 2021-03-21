const images = [
  { url: "img/① corsage.jpg?" + resourceId, caption: "① コサージュ" },
  { url: "img/②-1 eco.jpg?" + resourceId, caption: "②-1 エコバッグ" },
  { url: "img/②-2 eco.jpg?" + resourceId, caption: "②-2 エコバッグ" },
  { url: "img/③-1 座布団表面 光の刺繍.jpg?" + resourceId, caption: "③-1 座布団表面 光の刺繍" },
  { url: "img/③-2 座布団 背面 イニシャル刺繍 Y.jpg?" + resourceId, caption: "③-2 座布団 背面 イニシャル刺繍 Y" },
  { url: "img/④ 室内履き.jpg?" + resourceId, caption: "④ 室内履き" },
  { url: "img/⑤ album-top.jpg?" + resourceId, caption: "⑤ 高橋クラス アルバム表紙画像" },
  { url: "img/⑥-1 カルタの袱紗.jpg?" + resourceId, caption: "⑥-1 カルタの袱紗" },
  { url: "img/⑥-2 箱には熨斗(の絵).jpg?" + resourceId, caption: "⑥-2 箱には熨斗(の絵)" },
  { url: "img/⑥-3 box.jpg?" + resourceId, caption: "⑥-3 箱のライニングも学園カレンダー" },
  { url: "img/⑥-4 karuta-belt.jpg?" + resourceId, caption: "⑥-4 帯は学園カレンダーで作成" }
];

const pb = app.photoBrowser.create({ photos:images });
const openPhotoBrowser = (idx) => pb.open(idx);
