function showFloor(floorCode) {
  const floorImage = document.getElementById("floorImage");
  floorImage.src = `img/main_${floorCode}.png`;

  const iconContainer = document.getElementById("iconContainer");
  iconContainer.innerHTML = ""; // 기존 아이콘 제거

  // 2층은 아이콘 없음
  const showIconFloors = ["3f", "4f", "5f", "6f", "7f", "8f", "9f"];
  if (showIconFloors.includes(floorCode)) {
    const btn = document.createElement("button");
    btn.className = "trashIcon";
    btn.style.top = "50%";
    btn.style.left = "48%";
    btn.onclick = () => openModal();
    iconContainer.appendChild(btn);
  }
}

function openModal() {
  document.getElementById("modalText").textContent = "분리수거로 환경을 보호해 주세요.";
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
