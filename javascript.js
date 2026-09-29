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

// マスを塗る色をランダムにする機能
// ランダムに0~255の数字を返す関数
//　r,g,b,をランダムに生成し、色を変える
// 色を変えたマスには新たなクラスを与える
// クラスを持つグリッドは色が変わらないようにする
// リセットの時にこのクラスは消去する

// 同じマスを通るたびに10%ずつ暗くする機能
// 初期の色の不透明度を10%に設定
// IF
// 色が塗られている
// 不透明度を10%上昇
// IFEND
// リセット時にopecityも初期化
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
    const widthPercent = Math.round((100 / size) * 100) / 100;
    grid.style.width = `${widthPercent}%`;
    // 塗られていなければ、ランダムに色を塗る
    // 塗られていれば、10%暗くする
    let opacity = 0.1;
    grid.addEventListener("mouseenter", () => {
      if (!grid.classList.contains("painted")) {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);
        grid.style.backgroundColor = `rgb(${r},${g},${b})`;
        grid.style.opacity = `${opacity}`;
        grid.classList.toggle("painted");
      } else {
        opacity += 0.1;
        grid.style.opacity = `${opacity}`;
      }
    });
    resetButton.addEventListener("click", () => {
        opacity = 0.1;
        grid.style.opacity = `1`;
        grid.classList.remove("painted");
        grid.style.backgroundColor = "white";
      }
    )
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

