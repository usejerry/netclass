<template>
  <div id="j-firstCategories-parent">
    <div>
      <div id="banner">
        <div class="mw-swipe" style="position: relative;">
          <div id="mySwipe" class="swipe" style="visibility: visible;">
            <div class="swipe-wrap" style="width: 2898px;">
              <!--Regular list-->
              <div
                data-index="0"
                style="width: 414px; left: 0px; transition-duration: 300ms; transform: translate(-414px, 0px) translateZ(0px);"
              >
                <a
                  href="https://study.163.com/course/introduction/1208936832.htm"
                  data-customhref="1"
                >
                  <img
                    src="//edu-image.nosdn.127.net/ba1b78464fd44d00bfd249b3dbc41e4e.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="1"
                style="width: 414px; left: -414px; transition-duration: 300ms; transform: translate(-414px, 0px) translateZ(0px);"
              >
                <a
                  href="https://study.163.com/course/introduction/1003810064.htm"
                  data-customhref="1"
                >
                  <img
                    src="//edu-image.nosdn.127.net/98573c1b-dbaa-4f80-8b9d-7227ad8f79d2.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="2"
                style="width: 414px; left: -828px; transition-duration: 300ms; transform: translate(-414px, 0px) translateZ(0px);"
              >
                <a
                  href="https://study.163.com/course/introduction/1006187100.htm"
                  data-customhref="1"
                >
                  <img
                    src="//edu-image.nosdn.127.net/8c959e37-b6f6-42c9-90c3-ce99dee84f28.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="3"
                style="width: 414px; left: -1242px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);"
              >
                <a href="https://study.163.com/course/introduction/1106004.htm" data-customhref="1">
                  <img
                    src="//edu-image.nosdn.127.net/cff5bfea-6fb1-4efc-9f10-2060b13ad867.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="4"
                style="width: 414px; left: -1656px; transition-duration: 0ms; transform: translate(414px, 0px) translateZ(0px);"
              >
                <a href="https://study.163.com/topics/fangcunshan_changqi/" data-customhref="1">
                  <img
                    src="//edu-image.nosdn.127.net/a7a667db609541968b5a8c6cf1a7c3af.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="5"
                style="width: 414px; left: -2070px; transition-duration: 300ms; transform: translate(-414px, 0px) translateZ(0px);"
              >
                <a
                  href="https://study.163.com/course/introduction/1005709017.htm"
                  data-customhref="1"
                >
                  <img
                    src="//edu-image.nosdn.127.net/7302d2f6e94f438ca33663f67aeae933.jpg?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>

              <div
                data-index="6"
                style="width: 414px; left: -2484px; transition-duration: 300ms; transform: translate(-414px, 0px) translateZ(0px);"
              >
                <a href="https://study.163.com/series/1001199005.htm" data-customhref="1">
                  <img
                    src="//edu-image.nosdn.127.net/ccce7fe3-230c-44d4-b61c-da1f71b212a8.png?imageView&amp;crop=0_0_1242_573&amp;quality=100&amp;thumbnail=750y346&amp;type=webp"
                    style="width: 100%;"
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="mw-swipe-dots" style="margin-left: -52px;">
            <div class="dots-box">
              <!--Regular list-->
              <div class="dot"></div>

              <div class="dot"></div>

              <div class="dot"></div>

              <div class="dot dot-active"></div>

              <div class="dot"></div>

              <div class="dot"></div>

              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="second-cate-set">
        <div class="mw-capsules">
          <!--Regular list-->
          <router-link to v-for="(k,index) in content" :key="index">
            <div class="capsule f-toe" style v-text="k.name"></div>
          </router-link>
        </div>
        <div style="height: 10px;"></div>
      </div>
      <div id="custom-module">
        <div class="mw-custom-module-wrap">
          <!--Regular list-->
          <!--Regular if24-->
          <div class="mw-divide"></div>
          <div class="mw-inner-box">
            <div class="mw-custom-module">
              <div class="custom-top f-cb">
                <div class="custom-name">品质精选</div>
                <!--Regular if25-->
              </div>

              <!--Regular if26-->
              <!--Regular if27-->
              <!--Regular list-->
              <div class="f-cb">
                <div class="custom-card custom-card-small f-fl">
                  <a>
                    <div class="img-box">
                      <img
                        data-src
                        src="//edu-image.nosdn.127.net/c1773aaa82844c0cbb07f6ae47759dc0.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">真正的跳槽技巧，是什么样子的？</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if28-->
                      <!--Regular if29-->
                    </div>
                  </a>
                </div>

                <!--Regular if30-->
                <div class="custom-card custom-card-small f-fr">
                  <a>
                    <div class="img-box">
                      <img
                        data-src
                        src="//edu-image.nosdn.127.net/3f0539e9c0e740eb8f33b00696e84abb.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">25课通识阅读 带你打破知识边界</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if31-->
                      <!--Regular if32-->
                    </div>
                  </a>
                </div>
              </div>

              <div class="f-cb">
                <div class="custom-card custom-card-small f-fl">
                  <a>
                    <div class="img-box">
                      <img
                        data-src
                        src="//edu-image.nosdn.127.net/ef4465dd8288435a91868654af76beb8.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">明星学长手把手教你成为“面霸”</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if33-->
                      <!--Regular if34-->
                    </div>
                  </a>
                </div>

                <!--Regular if35-->
                <div class="custom-card custom-card-small f-fr">
                  <a>
                    <div class="img-box">
                      <img
                        data-src
                        src="//edu-image.nosdn.127.net/be5301ff-cb11-4197-8d61-9942f15fabec.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">20天通关计算机二级</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if36-->
                      <span style="display: none;">￥</span>
                      <span class>￥100</span>
                    </div>
                  </a>
                </div>
              </div>

              <div class="f-cb">
                <div class="custom-card custom-card-small f-fl">
                  <a>
                    <div class="img-box">
                      <img
                        src="http://edu-image.nosdn.127.net/3fb089ba-152a-48f7-a6a9-697ae7413051.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">新手到大神 你的最后一套PPT课程</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if37-->
                      <span style="display: none;">￥</span>
                      <span class>￥159</span>
                    </div>
                  </a>
                </div>

                <!--Regular if38-->
                <div class="custom-card custom-card-small f-fr">
                  <a>
                    <div class="img-box">
                      <img
                        src="http://edu-image.nosdn.127.net/e24db187e6844e94848653cf11d7c52b.jpg?imageView&amp;quality=100&amp;thumbnail=336y190"
                      >
                    </div>
                    <div class="course-title two-row-limit">能帮你赚到钱的商业思维提升课</div>
                    <div class="course-price" style="display: none;">
                      <!--Regular if39-->
                      <!--Regular if40-->
                    </div>
                  </a>
                </div>
              </div>

              <!--Regular if41-->

              <!--Regular if42-->

              <!--Regular if43-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      datas: [],
      num: 0,
      content: []
    };
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
