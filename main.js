function showFloor(floorCode) {
  const floorImage = document.getElementById("floorImage");
  floorImage.src = `img/main_${floorCode}.jpeg`;

  const floorInfo = {
    b1: "지하 1층: 일반 쓰레기 / 캔 / 유리",
    "1f": "1층: 일반 쓰레기 / 플라스틱",
    "2f": "2층: 캔 / 종이 / 플라스틱",
    "3f": "3층: 일반 쓰레기 / 종이",
    "4f": "4층: 캔 / 플라스틱",
    "5f": "5층: 종이 / 플라스틱",
    "6f": "6층: 일반 쓰레기 / 유리",
    "7f": "7층: 플라스틱 / 종이",
    "8f": "8층: 캔 / 플라스틱",
    "9f": "9층: 일반 쓰레기 / 캔"
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
