// Etch-a-Sketch
// ーーーーーーーーーーーーーーーーーーーーーーーー
// DOM
// グリッドを収納するdiv要素 gridContainer
// グリッドサイズを受け取るフォーム form
// キャンバスを白紙に戻すボタン resetButton
// ーーーーーーーーーーーーーーーーーーーーーーーー
// ランダムな整数を返す関数 getRandomInt
// Parameter
// 最小値 min
// 最大値 max
// ーーーーーーーーーーーーーーーーーーーーーーーー
// 任意のサイズのキャンバスを生成する関数 makeCanvas
// Paramater
// グリッドサイズ size

//  FOR:生成するグリッドの数
// 　　グリッドを生成
// 　　グリッドクラスを与える
// 　　グリッドにカウントを保存
// 　　横幅を設定する
// 　　グリッドごとにイベントを設定する
// 　　　マウスカーソルがグリッドの上を通った時
// 　　　IF
// 　　　塗られていない
// 　　　　0~255のランダムな整数を3こ生成
// 　　　　グリッドの背景色をランダムに設定
// 　　　　グリッドカウントを1増加
// 　　　　不透明度を10%に設定
// 　　　　paintedクラスを追加
// 　　　ELSEIF
// 　　　塗られている　かつ　グリッドカウントが10未満
// 　　　　グリッドカウントを1増加
// 　　　　不透明度を10%増加させる
// 　　　　不透明度をグリッドカウント / 10 に更新
// 　　　IFEND
// 　　グリッドコンテナにグリッドを追加
// 　FOREND
// ーーーーーーーーーーーーーーーーーーーーーーーー
// グリッドサイズ変更
// フォームが送信された時
// 　デフォルトの送信動作をキャンセル
// 　inputからsizeを取得し、数値に変換
// 　IF
// 　数値が整数ではない or 数値が1~100でない
// 　　エラーメッセージを表示
// 　　入力欄を空にする
// 　ELSE
// 　　入力欄を空にする
// 　　現在のグリッドを削除
// 　　受け取ったsizeのキャンバスを生成
// 　IFEND
// ーーーーーーーーーーーーーーーーーーーーーーーー
// キャンバスを白紙に戻す
// 　リセットボタンが押された時
// 　FOR:すべてのグリッドに行う
// 　　グリッドの不透明度を初期化する
// 　　グリッドのカウントを0に戻す
// 　　グリッドからpaintedクラスを消去
// 　　グリッドの背景色を白に戻す
// 　FOREND
// ーーーーーーーーーーーーーーーーーーーーーーーー


const gridContainer = document.querySelector("#gridContainer");
const form = document.querySelector("form");
const resetButton = document.querySelector(".resetButton");

makeCanvas(16);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeCanvas(size) {
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.dataset.count = 0;
    // 横幅をグリッドコンテナの横幅の100 / size %に設定する
    // 小数第三位を四捨五入する
    const widthPercent = Math.round((100 / size) * 100) / 100;
    grid.style.width = `${widthPercent}%`;
    // 塗られていなければ、ランダムに色を塗る
    // 塗られていれば、10%暗くする
    grid.addEventListener("mouseenter", () => {
      if (!grid.classList.contains("painted")) {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);
        grid.dataset.count = Number(grid.dataset.count) + 1;
        grid.style.backgroundColor = `rgb(${r},${g},${b})`;
        grid.style.opacity = "0.1";
        grid.classList.add("painted");
      } else if (Number(grid.dataset.count) < 10) {
        grid.dataset.count = Number(grid.dataset.count) + 1;
        const count = Number(grid.dataset.count)
        const opacity = count / 10;
        grid.style.opacity = `${opacity}`;
      }
    });
    gridContainer.appendChild(grid);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#size");
  const size = Number(input.value);
  if (!Number.isInteger(size) || size <= 0 || 100 < size) {
    alert("1 ~ 100 の整数を入力してください");
    input.value = "";
  } else {
    input.value = "";
    gridContainer.textContent = "";
    makeCanvas(size);
  }
});

resetButton.addEventListener("click", () => {
  for (const grid of gridContainer.children) {
    grid.style.opacity = `1`;
    grid.dataset.count = 0;
    grid.classList.remove("painted");
    grid.style.backgroundColor = "white";
  }
});