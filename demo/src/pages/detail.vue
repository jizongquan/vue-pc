<template>
  <div>
    <div class="detail-wrap"  @click="resetComponent">
      <div class="detail-left">
        <div class="product-board">
          <img  :src="productIcon">
          <ul>
            <!--<li v-for="item in products">{{item.name}}</li>-->
            <!--:key="index" 指定要不会报错 对应的索引-->
            <router-link v-for="(item,index) in products" :key="index" :to="{ path: item.path }" tag="li" active-class="active">{{ item.name }}</router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="app-foot">
      <p>© 2016 fishenal MIT</p>
    </div>

  </div>
</template>

<script>
  import {eventBus} from "@/eventBus"
  export default {
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
  },
  computed: {
    productIcon () {
//      console.log(this.$route.path)//获取路径
      return this.imgMap[this.$route.path]
    }
  },
    methods:{
      resetComponent(){
        eventBus.$emit('reset-component')
      }
    }
  }
</script>

<style>
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
  }
  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board {
    background: #fff;
    padding: 20px 0;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-form {

  }
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    clear: both;
    padding-bottom: 20px;
  }
  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
</style>
