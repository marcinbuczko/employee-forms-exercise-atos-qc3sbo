const turnOn = () => {
  document.getElementById("overlay").style.display = "block";
}

const turnOff = () => {
  document.getElementById("overlay").style.display = "none";
}

export { turnOn, turnOff }
