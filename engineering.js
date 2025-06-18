function showFloor(floorCode) {
  const floorImage = document.getElementById("floorImage");
  floorImage.src = `img/engineering_${floorCode}.png`;

  const floorInfo = {
    b1: "지하 1층: 일반 쓰레기 / 플라스틱",
    "1f": "1층: 일반 쓰레기 / 캔",
    "2f": "2층: 플라스틱 / 종이",
    "3f": "3층: 종이 / 일반",
    "4f": "4층: 캔 / 플라스틱",
    "5f": "5층: 플라스틱 / 유리",
    "6f": "6층: 일반 쓰레기 / 종이",
    "7f": "7층: 플라스틱 / 캔",
    "8f": "8층: 종이 / 캔 / 일반"
  };

  const modalText = document.getElementById("modalText");
  if (modalText && floorInfo[floorCode]) {
    modalText.textContent = floorInfo[floorCode];
  }
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
