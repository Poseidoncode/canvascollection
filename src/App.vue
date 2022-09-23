<template>
  <!-- <loading /> -->

  <div class="all-content">
    <router-view />
  </div>
</template>

<script>
import { inject, ref } from "vue";
// import headercontent from "@/components/cartHeader.vue";
// import footercontent from "@/components/footer.vue";
// import loading from "@/components/loadingThird.vue";
// import loading from "@/components/loadingSecond.vue";
// import loading from "@/components/loadingFinal.vue";

export default {
  components: {
    // loading
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.all-content {
  // background: url("/public/assets/brandfinalt.png") no-repeat calc(100% - 19px);
  // background: transparent url("/public/assets/bgrough.jpg") repeat 0 0;
  overflow: hidden;
  // position: relative;
  // width: 99%;
  height: 99%;
  // width: 99vw;
  z-index: 1;
}
</style>
