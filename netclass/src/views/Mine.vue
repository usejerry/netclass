<template>
  <div>
    <div id="j-body">
      <!--Regular if3-->
      <div class="upm-setting f-pr">
        <div class="upm-setting_header f-cb">
          <!--Regular if4-->
          <img
            class="upm-setting_header_img"
            src="//edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&amp;quality=100&amp;thumbnail=100y100"
            alt="头像"
          >
          <router-link to="/login" class="upm-setting_login">登录/注册</router-link>
        </div>

        <ul class="upm-setting_item_wrap u-fix-margin" style="display: none;">
          <!--Regular list-->
          <!--inlcude-->
          <a href="https://study.163.com/cpAdmin.htm" target="_blank" class="upm-setting_link">
            <li class="upm-setting_item">
              <span class="upm-setting_icon ux-ykt-icon-gear"></span>
              管理中心
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if5-->
            </li>
          </a>
        </ul>

        <ul class="upm-setting_item_wrap upm-setting_items">
          <!--Regular list-->
          <!--inlcude-->
          <a href="https://m.study.163.com/order" target="_blank" class="upm-setting_link">
            <li class="upm-setting_item">
              <span class="upm-setting_icon ux-ykt-icon-cash"></span>
              我的订单
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if6-->
            </li>
          </a>

          <!--inlcude-->
          <a href="https://m.study.163.com/myCoupon" target="_blank" class="upm-setting_link">
            <li class="upm-setting_item">
              <span class="upm-setting_icon upm-setting_icon2 ux-ykt-icon-coupon"></span>
              我的优惠券
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if7-->
            </li>
          </a>

          <!--inlcude-->
          <a href="https://m.study.163.com/cart" target="_blank" class="upm-setting_link">
            <li class="upm-setting_item">
              <span class="upm-setting_icon ux-ykt-icon-cart"></span>
              我的购物车
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if8-->
            </li>
          </a>

          <!--inlcude-->
          <a href="https://m.study.163.com/payCard" target="_blank" class="upm-setting_link">
            <li class="upm-setting_item">
              <span class="upm-setting_icon upm-setting_icon2 ux-ykt-icon-xuexiqia"></span>
              我的学习卡
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if9-->
            </li>
          </a>
        </ul>

        <ul class="upm-setting_item_wrap">
          <!--Regular list-->
          <!--inlcude-->
          <a
            href="https://m.study.163.com/promoter/my.htm"
            target="_blank"
            class="upm-setting_link"
          >
            <li class="upm-setting_item">
              <span class="upm-setting_icon ux-ykt-icon-notice"></span>
              分享赚学费
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if10-->
            </li>
          </a>

          <!--inlcude-->
          <a
            href="https://m.study.163.com/order/protocol.htm?id=20004"
            target="_blank"
            class="upm-setting_link"
            style="display: none;"
          >
            <li class="upm-setting_item">
              <span class="upm-setting_icon ux-ykt-icon-privacy"></span>
              隐私政策
              <span class="ux-ykt-icon-right-arrow f-fr"></span>
              <!--Regular if11-->
            </li>
          </a>
        </ul>
      </div>
    </div>
    <footer class="mw-footer j-mw-footer" style="display: block;">
      <div class="um-common-footer">
        <!--Regular if12-->
        <!--Regular list-->
        <router-link to="/" class="um-common-footer_item" target="_self">
          <div class="um-common-footer_item_icon ux-icon ux-ykt-icon-home"></div>
          <div class="um-common-footer_item_text">首页</div>
        </router-link>

        <router-link to="/login" class="um-common-footer_item" target="_self">
          <div class="um-common-footer_item_icon ux-icon ux-ykt-icon-my-class"></div>
          <div class="um-common-footer_item_text">我的学习</div>
        </router-link>

        <router-link to="/mine" class="um-common-footer_item" target="_self">
          <div
            class="um-common-footer_item_icon ux-icon ux-ykt-icon-account-fill um-common-footer_item_active"
          ></div>
          <div class="um-common-footer_item_text">帐号</div>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/mine.css";
@import "../assets/ifo.css";
</style>
