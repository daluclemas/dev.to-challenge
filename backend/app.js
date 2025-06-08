const flagEl = document.querySelector(".flag");

const rows = 50;
const columns = 30;
const rainbowColors = [
  "#e40303",
  "#ff8c00",
  "#ffed00",
  "#008026",
  "#004dff",
  "#750787",
];
const generateUnit = (columnNum, rowNum) => {
  const flagUnit = document.createElement("div");
  flagUnit.classList.add("flag-unit");

  flagUnit.style.setProperty("animation-delay", `${columnNum * 10}ms`);
  flagUnit.style.setProperty("--displacement", `${columnNum / 2.5}`);

  const colorIndex = Math.floor(rowNum / (rows / rainbowColors.length));
  flagUnit.style.backgroundColor = rainbowColors[colorIndex];

  const column = document.getElementById(`column-${columnNum}`);
  column.appendChild(flagUnit);
};

for (let i = 0; i < columns; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  column.id = `column-${i}`;
  column.style.width = "10px";
  flagEl.appendChild(column);

  for (let j = 0; j < rows; j++) {
    generateUnit(i, j);
  }
}
