let totalCards = 0;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event, cardId, columnName) {
  event.dataTransfer.setData("cardId", cardId);
  event.dataTransfer.setData("columnName", columnName);
}

function drop(event, columnName) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("cardId");
  const sourceColumnName = event.dataTransfer.getData("columnName");

  if (sourceColumnName !== columnName) {
    const card = document.getElementById(cardId);
    const sourceColumnCards = document.getElementById(`${sourceColumnName}Cards`);
    const destColumnCards = document.getElementById(`${columnName}Cards`);

    destColumnCards.appendChild(card);

    const countElement = document.getElementById(`${columnName}Count`);
    countElement.textContent = parseInt(countElement.textContent) + 1;
    
    const sourceCountElement = document.getElementById(`${sourceColumnName}Count`);
    sourceCountElement.textContent = parseInt(sourceCountElement.textContent) - 1;
  }
}

function addCard(columnName) {
  totalCards++;
  const cardId = `card${totalCards}`;
  const cardTitle = `Card ${totalCards}`;

  const card = document.createElement("div");
  card.setAttribute("id", cardId);
  card.setAttribute("draggable", true);
  card.setAttribute("ondragstart", `drag(event, '${cardId}', '${columnName}')`);
  card.textContent = cardTitle;
  card.style.border = "2px solid black";
  card.style.margin = "11px";

  const columnCards = document.getElementById(`${columnName}Cards`);
  columnCards.appendChild(card);

  const countElement = document.getElementById(`${columnName}Count`);
  countElement.textContent = parseInt(countElement.textContent) + 1;
}
