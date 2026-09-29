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

// 入力フォームからsizeを受け取る
// IF
// sizeが整数かつ0~100
// 現在のgridを消去
// size * sizeのキャンバスを作る
// else
// エラーメッセージを表示
// IFEND
const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = "a";
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "red";
    });
    gridContainer.appendChild(grid);
}

