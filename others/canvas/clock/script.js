const body = document.querySelector("body");
const canvasDom = document.getElementById("pic");
// const w = body.clientWidth;
// const h = body.clientHeight;
const w = 500;
const h = 500;
canvasDom.width = w;
canvasDom.height = h;
canvasDom.style.border = "1px #ccc solid";

const ctx = canvasDom.getContext("2d");

const drawBase = () => {
  ctx.restore();
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(w / 2, h / 2);

  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 200, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate((30 * Math.PI) / 180);
    ctx.lineWidth = 4;
    ctx.moveTo(190, 0);
    ctx.lineTo(200, 0);
    ctx.stroke();
    ctx.closePath();
  }

  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.rotate((6 * Math.PI) / 180);
    ctx.lineWidth = 2;
    ctx.moveTo(190, 0);
    ctx.lineTo(195, 0);
    ctx.stroke();
    ctx.closePath();
  }
  ctx.restore();
};

const drawArrow = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.beginPath();
  ctx.rotate(((hours * 30 + (minutes * 30) / 60) * Math.PI) / 180);
  ctx.lineWidth = 4;
  ctx.moveTo(0, 10);
  ctx.lineTo(0, -140);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.beginPath();
  ctx.rotate(((minutes * 6 + (seconds * 6) / 60) * Math.PI) / 180);
  ctx.lineWidth = 3;
  ctx.moveTo(0, 10);
  ctx.lineTo(0, -160);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.beginPath();
  ctx.rotate((seconds * 6 * Math.PI) / 180);
  ctx.lineWidth = 2;
  ctx.moveTo(0, 10);
  ctx.lineTo(0, -180);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};

window.requestAnimationFrame(function step(x) {
  drawBase();
  drawArrow();
  window.requestAnimationFrame(step);
});
