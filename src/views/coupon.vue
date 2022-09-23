<template>
  <main>
    <h1 style="text-align: center">刮刮樂</h1>
    <canvas id="canvas" width="400" height="100"></canvas>
    <div class="text">恭喜您中獎</div>
  </main>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUpdated } from "vue";

const setCanvas = () => {
  //https://juejin.cn/post/6986785259966857247
  // js
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // 填充的顏色
  ctx.fillStyle = "darkgray";
  // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
  ctx.fillRect(0, 0, 400, 100);
  ctx.fillStyle = "#fff";
  // 繪製填充文字
  ctx.fillText("刮刮卡", 180, 50);

  let isDraw = false;
  canvas.onmousedown = function () {
    isDraw = true;
  };
  canvas.onmousemove = function (e) {
    if (!isDraw) return;
    // 計算滑鼠在canvas里的位置
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    // 設置 globalCompositeOperation
    ctx.globalCompositeOperation = "destination-out";
    // 畫圓
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    // 填充圆形
    ctx.fill();
  };
  canvas.onmouseup = function () {
    isDraw = false;
  };
};

onMounted(() => {
  // DOM 渲染完成後 Vue 實體與掛載完成
  setCanvas();
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.text {
  position: absolute;
  left: 130px;
  top: 35px;
  z-index: -1;
}
</style>
