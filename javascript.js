// 16×16のdivをつくる

// FOR:16×16回繰り返す
// マスのdivを作る
// グリッドコンテナに追加
// FOREND
// マスを16個ごとに折り返す
// 1マスの横幅を全体の1/16にする(CSS)

// マスの上を通るとマスの色が変わる機能
// 各マスにmouseenterイベントを設定
// マウスが上を通ると背景色を変える

// 入力フォームからsizeを受け取り、グリッドを作り直す機能
// フォームの送信動作をキャンセル
// フォームから入力を受ける
// 入力を数字に変更し保存
// 入力欄を空にする
// IF
// sizeが整数かつ0~100
// グリッドコンテナを空にする
// size * sizeのキャンバスを作る
// else
// エラーメッセージを表示
// IFEND
const gridContainer = document.querySelector("#gridContainer");
const form = document.querySelector("form");
const resetButton = document.querySelector(".resetButton");

makeCanvas(16);

function makeCanvas(size) {
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    const widthPercent = Math.round((100 / size) * 100) / 100;
    grid.style.width = `${widthPercent}%`;
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = "red";
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
  } else {
    input.value = "";
    gridContainer.textContent = "";
    makeCanvas(size);
  }
});

resetButton.addEventListener("click", () => {
  for (const grid of gridContainer.children) {
    grid.style.backgroundColor = "white";
  }
});
