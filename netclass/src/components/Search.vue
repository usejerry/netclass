<template>
  <div class="mw-wrap g-wrap">
    <header class="j-mw-header">
      <div id="j-mw-header" class="mw-header">
        <a class="mw-header_logo ga-click" href="/" data-category="全局导航" data-action="返回首页"></a>
        <div
          id="j-mw-header_app"
          class="mw-header_app j-mw-header_app"
          data-category="wap_全局导航"
          data-action="app查看"
          style="display: block;"
        >App查看</div>
        <div class="mw-header_search" data-category="wap_全局导航" data-action="搜索图标点击">
          <a href="//m.study.163.com/search" class="mw-header_search_a ux-icon-search"></a>
        </div>
      </div>
      <div id="j-mw-header-mini" class="mw-header f-dn">
        <a
          class="mw-header_search-mini"
          href="//m.study.163.com/search"
          target="_blank"
          data-category="wap_全局导航"
          data-action="搜索图标点击"
        >
          <i class="mw-header_search_a ux-icon-search"></i>搜索课程
        </a>
      </div>
    </header>
    <div id="j-search-course-parent">
      <div>
        <div class="m-search-box" id="j-searchBox">
          <div class="search">
            <section class="search_input">
              <div class="input-box">
                <input type="search" name="搜索" placeholder="行家专业亲授，直击就业痛点">
                <span class="chacha" style="display: none;"></span>
              </div>

              <a class="search_btn search_btn-search">搜索</a>
              <!--Regular if2-->
            </section>
            <div class="search_result">
              <ul>
                <!--Regular list-->
              </ul>
            </div>
          </div>
        </div>
        <div class="hot-keyword" id="j-hotKeywordList">
          <div class="m-keyword">
            <p>热门搜索</p>
            <ul class="keyword">
              <!--Regular list-->
              <li class="ga-click" data-action="热门搜索点击" data-label="测试高级工程师，专家亲授">测试高级工程师，专家亲授</li>

              <li class="ga-click" data-action="热门搜索点击" data-label="金融入门">金融入门</li>

              <li class="ga-click" data-action="热门搜索点击" data-label="前端高级开发，产品思路揭秘">前端高级开发，产品思路揭秘</li>

              <li class="ga-click" data-action="热门搜索点击" data-label="通识阅读">通识阅读</li>

              <li class="ga-click" data-action="热门搜索点击" data-label="高级java，升职加薪只需1课">高级java，升职加薪只需1课</li>
            </ul>
          </div>
        </div>
        <div class="m-select-bar" id="j-orderAndFilter"></div>
        <div class="m-course-list">
          <div class="course-list" id="j-relativeCourseList"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/search.css";
@import "../assets/ifo.css";
</style>
