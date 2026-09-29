// 16×16のdivをつくる

// FOR:16×16回繰り返す
// マスのdivを作る
// グリッドコンテナに追加
// FOREND
// マスを16個ごとに折り返す
// 1マスの横幅を全体の1/16にする(CSS)
const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = "a";
    gridContainer.appendChild(grid);
}