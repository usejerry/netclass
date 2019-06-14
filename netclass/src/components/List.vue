<template>
  <div class="mw-wrap g-wrap" id="auto-id-1560058011908">
    <header class="j-mw-header">
      <div id="j-mw-header" class="mw-header">
        <a class="mw-header_logo ga-click" href="/" data-category="全局导航" data-action="返回首页"></a>
        <div class="mw-header_search" data-category="wap_全局导航" data-action="搜索图标点击">
          <router-link to="/search" class="mw-header_search_a ux-icon-search"></router-link>
        </div>
      </div>
      <div id="j-mw-header-mini" class="mw-header f-dn">
        <a
          class="mw-header_search-mini"
          target="_blank"
          data-category="wap_全局导航"
          data-action="搜索图标点击"
        >
          <i class="mw-header_search_a ux-icon-search"></i>搜索课程
        </a>
      </div>
    </header>

    <div id="j-topMenu" style="position: sticky; top: 0px; z-index: 100;">
      <div class="topMenu-fixed" id="j-topMenuFixed">
        <div class="m-topMenu" id="auto-id-1560058011907">
          <div class="menu" id="j-scrollMenu">
            <ul class="menu_list" id="auto-id-1560058011906">
              <!--Regular list-->
              <li
                v-bind:class="{'menu_item':true, 'menu_item-crt':num==ins}"
                id="auto-id-1560058011911"
                v-for="(k,ins) in datas"
                v-bind:key="ins"
                @click="cin(ins)"
              >
                <router-link :to="nav[ins]" v-text="k.name" :style="{color:'#3c4a55'}"></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/list.css";
@import "../assets/ifo.css";
</style>

<script lang="ts">
import Vue from "vue";
import Job from "./Job";
export default Vue.extend({
  data() {
    return {
      datas: [],
      num: 0,
      nav: [
        "/list/job",
        "/list/programming",
        "/list/AL",
        "/list/product",
        "/list/plan",
        "/list/online",
        "/list/language",
        "/list/vocation",
        "/list/life"
      ]
    };
  },
  components: {
    Job
  },
  methods: {
    cin(i) {
      this.num = i;
    }
  },
  async created() {
    const list = await this.$axios(
      "https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/lists"
    );
    this.datas = list.data.result.frontCategoryDtoList;
    this.content = list.data.result.frontCategoryDtoList[0].children;
  }
});
</script>
