import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios';
import VueAMap from "vue-amap";
Vue.use(VueAMap);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
VueAMap.initAMapApiLoader({
  key: "92ea8370fc3e7ac04c7046b8a854ef4e",
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" ,
     "Geocoder" 
    //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  uiVersion: "1.0"
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
