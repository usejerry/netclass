<template>
  <div class="g-content">
    <div class="g-main">
      <div class="m-classLogin f-f0" id="j-mobile">
        <div
          class="ux-login-set-wap"
          style="background-image: url(&quot;//edu-image.nosdn.127.net/85c3396e-3851-4c1a-ad4b-d1e062ad53f2.png?imageView&amp;quality=100&quot;);"
        >
          <div class="ux-login-set-wap-topwrap f-pr">
            <div class="ux-login-set-wap-top f-pa">
              <img
                src="//edu-image.nosdn.127.net/c26ea87a-f364-4b52-97d0-dce9851d7761.png?imageView&amp;quality=100"
              >
              <div class="btn-wrap f-cb">
                <!--Regular list-->
                <!--Regular if0-->
                <!--Regular if1-->

                <!--Regular if2-->
                <a
                  class="f-fl btn-main"
                  href="//study.163.com/member/telLogin.htm"
                  data-log-act="click"
                  data-log-data="{&quot;wap&quot;:&quot;phoneLogin&quot;}"
                >手机号登录</a>

                <!--Regular if3-->
                <a
                  class="f-fl btn-main"
                  href="//study.163.com/member/mobileTelRegister.htm"
                  data-log-act="click"
                  data-log-data="{&quot;wap&quot;:&quot;phoneReg&quot;}"
                >手机号快捷注册</a>
              </div>
            </div>
          </div>

          <div class="ux-login-set-wap-bottom">
            <div class="sep f-pr">
              <div class="line"></div>
              <div class="huo">其他方式登录</div>
              <div class="line"></div>
              <div class="other f-pa" style="display: none;"></div>
            </div>

            <div class="third-bind third" id="j-thirdWays">
              <!--Regular list-->
              <a
                class="btn-bottom"
                href="#/mobileUrsLogin?oauthType=login&amp;returnUrl=aHR0cHM6Ly9tLnN0dWR5LjE2My5jb20vbS9teT9mcm9tPXN0dWR5"
                data-log-act="click"
                data-log-data="{&quot;sns&quot;:&quot;mail&quot;}"
              >
                <span
                  class="f-ib icon"
                  style="background-image: url(&quot;//edu-image.nosdn.127.net/8d0ce296-9f92-4f3b-b6fe-8d727a323064.png?imageView&amp;quality=100&quot;);"
                ></span>
                <p>邮箱</p>
              </a>

              <a
                class="btn-bottom"
                href="/passport/sns/doOAuth.htm?snsType=2&amp;nc=1&amp;oauthType=login&amp;returnUrl=aHR0cHM6Ly9tLnN0dWR5LjE2My5jb20vbS9teT9mcm9tPXN0dWR5"
                data-log-act="click"
                data-log-data="{&quot;sns&quot;:&quot;weibo&quot;}"
              >
                <span
                  class="f-ib icon"
                  style="background-image: url(&quot;//edu-image.nosdn.127.net/15c811d3-6a3d-459b-b100-3f4eb776b2c2.png?imageView&amp;quality=100&quot;);"
                ></span>
                <p>微博</p>
              </a>

              <a
                class="btn-bottom"
                href="/passport/sns/doOAuth.htm?snsType=4&amp;nc=1&amp;oauthType=login&amp;returnUrl=aHR0cHM6Ly9tLnN0dWR5LjE2My5jb20vbS9teT9mcm9tPXN0dWR5"
                data-log-act="click"
                data-log-data="{&quot;sns&quot;:&quot;qq&quot;}"
              >
                <span
                  class="f-ib icon"
                  style="background-image: url(&quot;//edu-image.nosdn.127.net/9bd019b4-f657-4674-8550-212d47128d60.png?imageView&amp;quality=100&quot;);"
                ></span>
                <p>QQ</p>
              </a>

              <a
                class="btn-bottom"
                href="/passport/sns/doOAuth.htm?snsType=3&amp;nc=1&amp;oauthType=login&amp;returnUrl=aHR0cHM6Ly9tLnN0dWR5LjE2My5jb20vbS9teT9mcm9tPXN0dWR5"
                data-log-act="click"
                data-log-data="{&quot;sns&quot;:&quot;renren&quot;}"
              >
                <span
                  class="f-ib icon"
                  style="background-image: url(&quot;//edu-image.nosdn.127.net/84c18e49-200b-440d-a15c-db363e4b132d.png?imageView&amp;quality=100&quot;);"
                ></span>
                <p>人人</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f-dn">
      <nav class="m-footernav" id="j-topnav">
        <div class="f-cb head-box-wrap">
          <a class="login f-fl j-nav-loginBtn" id="j-login">登录/注册</a>
          <span class="tips f-ib">支持网易邮箱、QQ、微博号</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/login1.css";
@import "../assets/login2.css";
</style>
