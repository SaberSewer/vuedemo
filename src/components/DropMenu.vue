<template>
  <div class="row">
    <ul class="nav">
      <li><a href="#">下拉菜单</a></li>
      <li class="drop-down"><a href="#">下拉菜单</a>
        <ul class="drop-down-content">
          <li><a href="#">我是1</a></li>
          <li><a href="#">我是2</a></li>
          <li><a href="#">我是3</a></li>
        </ul>
      </li>
      <li><a href="#">下拉菜单</a></li>
      <li><a href="#">下拉菜单</a></li>
      <li><a href="#">下拉菜单</a></li>
    </ul>
    <div class="clean"></div>
  </div>
</template>

<script>
import menu from "@/router/menu";

export default {
  name: "DropMenu",
  data() {
    return {
      menu
    }
  }
}
</script>

<style scoped>
.row {
  width: 100%;
  background: #66ccFF;
  *text-align: center;
}

ul {
  list-style: none;
}

.nav > li {
  float: left;
}

ul a {
  display: block;
  text-decoration: none;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  background-color: #66ccFF;
}

.nav > li:first-child a {
  border-radius: 10px 0 0 10px;
}

.nav > li:last-child a {
  border-radius: 0 10px 10px 0;
}

.drop-down {
  /*position: relative;*/
  height: 50px;
  overflow: hidden;
}

.drop-down-content {
  padding: 0;
  /*position: absolute;*/
}

h3 {
  font-size: 30px;
  clear: both;
  /*            position: relative;
              z-index: -1;*/
}

.drop-down-content li:hover a {
  background-color: #66ccFFA1;
}

.nav .drop-down:hover {
  overflow: visible;
}

.clean {
  clear: both;
}
</style>
