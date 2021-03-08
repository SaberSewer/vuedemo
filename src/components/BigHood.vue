<template>
  <a-carousel effect="fade" autoplay="true">
    <div><h2><a href="#"> 1</a></h2></div>
    <div><h2><a href="#">2</a></h2></div>
    <div><h2><a href="#">3</a></h2></div>
    <div><h2><a class="title" href="#">4</a></h2></div>
  </a-carousel>
</template>

<script>
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd);
export default {
  name: "BigHood"
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 480px;
  line-height: 480px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.title {
  font-size: 2.5rem

}
</style>
