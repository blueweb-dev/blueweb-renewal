<template>
  <div>
    <!-- Footer -->
    <footer
      id="idz-footer"
      class="idz-padding"
    >
      <div class="uk-container uk-container-center">
        <div class="uk-grid" id="footer-grid-inner-wrapper">
          <!-- Footer Column 1 -->
          <div class="uk-width-large-1-5 uk-width-medium-1-5 uk-width-small-1-2">
            <div class="idz-footer-widget">
              <h3 class="uppercase idz-text-white">
                블루웹은
              </h3>
              <ul class="uk-list uk-list-space idz-footer-menu">
                <li>
                  <a href="#">
                    회사소개
                  </a>
                </li>
                <li>
                  <a href="#">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#">
                    사이트맵
                  </a>
                </li>
                <li>
                  <nuxt-link to="/cs/contact">
                    연락처
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/cs/contact">
                    채용정보
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- Footer Column 1 End -->

          <!-- Footer Column 2 -->
          <div class="uk-width-large-1-5 uk-width-medium-1-5 uk-width-small-1-2">
            <div class="idz-footer-widget">
              <h3 class="uppercase idz-text-white">
                부가서비스
              </h3>
              <ul class="uk-list uk-list-space idz-footer-menu">
                <li>
                  <nuxt-link to="/cs/contact">
                    파트너 프로그램 / 리셀러
                  </nuxt-link>
                </li>
                <li>
                  <a href="#">
                    SEO / 온라인마케팅
                  </a>
                </li>
                <li>
                  <a href="#">
                    유지보수 패키지
                  </a>
                </li>
                <li>
                  <a href="#">
                    코참비즈
                  </a>
                </li>
                <li>
                  <a href="#">
                    이비즈로 관리자
                  </a>
                </li>
                <li>
                  <a href="#">
                    블루웹 SMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Footer Column 2 End -->

          <!-- Footer Column 3 (Social Profile Links) -->
          <div class="uk-width-large-1-5 uk-width-medium-1-5 uk-width-small-1-2">
            <div class="idz-footer-widget idz-footer-social">
              <ul class="uk-list">
                <li>
                  <div class="idz-button-group">
                    <a href="uk-button">
                      <i class="uk-icon-facebook-official" />Check Out Our <span class="uppercase">
                        Facebook
                      </span>
                    </a>
                  </div>
                </li><li>
                  <div class="idz-button-group">
                    <a href="uk-button">
                      <i class="uk-icon-twitter" />Check Out Our <span class="uppercase">
                        Twitter
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Footer Column 3 (Social Profile Links) -->

          <!-- Footer Column 4 (SNS) -->
          <div class="uk-width-large-1-5 uk-width-medium-1-5 uk-width-small-1-2">
            <h3 class="uppercase idz-text-white">
              SNS
            </h3>
            <div
              class="uk-grid-small"
              uk-grid
            >
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="http://farm4.static.flickr.com/3945/15485436268_846ccca178_q.jpg">
                </div>
              </div>
            </div>
          </div>
          <!-- Footer Column 4 (SNS) -->

          <!-- Footer Column 5 (Corp) -->
          <div class="uk-width-large-1-5 uk-width-medium-1-5 uk-width-small-1-2" id="footer-logo-wrapper">
            <div>
              <img
                src="~assets/images/logo.png"
                alt="logo"
                class=""
              >
              <h2>1588-2120</h2>
              <p>The 4th internet infrastructure provider<br>Copyright &copy; 2019 Blueweb Inc.</p>
              <div class="partner-wrapper">
                <img src="~assets/images/partners/digicert-verified.png">
                <img src="~assets/images/partners/kisa-krnic.png">
                <img src="~assets/images/partners/iscs.png">
              </div>
            </div>
          </div>
          <!-- Footer Column 5 (Corp) -->
        </div>
      </div>

      <!-- Footer Text -->
      <div class="uk-grid">
        <div class="uk-width-1-1 uk-container-center"><!-- uk-text-center -->
          <p class="idz-footer-note idz-thin idz-text-22px uk-margin-remove">
            블루웹은 지난 20년 간 <span>50만</span> 개의 웹사이트를 안정적으로 운영 해왔습니다
          </p>
          <p class="idz-site-copyright uk-margin-remove">
            ㈜블루웹 / 서울 성동구 성수일로8길 5 서울숲 SK V1 TOWER B동 3층 / 대표이사 : 김남진, 장봉근 / 사업자등록증번호 : 106-81-85951 / 통신판매업 신고번호 : 강남 3315호
          </p>
        </div>
      </div>
      <!-- Footer Text End -->

      <!-- Scroll to Top -->
      <a
        href="#top"
        class="to-top uk-icon-chevron-up"
        data-uk-smooth-scroll
      />
      <!-- Scroll to Top End -->
    </footer>
    <!-- Footer End -->

    <!-- client area modal begin -->
    <div
      id="client-area"
      class="uk-modal"
    >
      <div class="uk-modal-dialog">
        <ul
          id="client-area-tab"
          class="uk-tab uk-tab-grid"
          data-uk-tab="{connect:'#account'}"
        >
          <li class="uk-active uk-width-large-1-2">
            <a href="">
              로그인
            </a>
          </li>
          <li class="uk-width-large-1-2">
            <a href="">
              새로가입
            </a>
          </li>
        </ul>

        <ul
          id="account"
          class="uk-switcher uk-margin"
        >
          <!-- Modal Login Form -->
          <li>
            <form
              id="signin-account"
              class="uk-form"
            >
              <fieldset>
                <div class="uk-form-icon">
                  <i class="uk-icon-envelope" />
                  <input
                    type="text"
                    placeholder="이메일 주소"
                  >
                </div>
                <div class="uk-form-icon">
                  <i class="uk-icon-key" />
                  <input
                    type="text"
                    placeholder="비밀번호"
                  >
                </div>
                <div
                  class="g-recaptcha"
                  data-sitekey="6LeRs3IUAAAAANdbjoRAwYzFKr37EG9EhqC5yRN2"
                  onfocus="this.blur();"
                />
                <a
                  href="client-area.html"
                  class="uk-button uk-button-large idz-button blue uk-width-large-1-1"
                >
                  로그인
                </a>
              </fieldset>
            </form>
          </li>
          <!-- Modal Login Form End -->

          <!-- Modal Register Form -->
          <li>
            <form
              id="create-account"
              class="uk-form"
            >
              <fieldset>
                <div class="uk-form-icon">
                  <i class="uk-icon-user" />
                  <input
                    type="text"
                    placeholder="Username"
                  >
                </div>
                <div class="uk-form-icon">
                  <i class="uk-icon-envelope" />
                  <input
                    type="text"
                    placeholder="Email"
                  >
                </div>
                <div class="uk-form-icon">
                  <i class="uk-icon-key" />
                  <input
                    type="text"
                    placeholder="Password"
                  >
                </div>
                <label>
                  <input type="checkbox"><a href="#">
                    약관
                  </a>에 동의합니다
                </label>
                <a
                  href="client-area.html"
                  class="uk-button uk-button-large idz-button blue uk-width-large-1-1"
                >
                  가입하기
                </a>
              </fieldset>
            </form>
          </li>
          <!-- Modal Register Form End -->
        </ul>
        <div class="uk-modal-caption">
          <a href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
    <!-- client area modal end -->
  </div>
</template>

<style>
.uk-grid-small>* { display: inline-block; }
#idz-footer { padding: 40px 0; }
#idz-footer .uk-grid-small img { width: 72px; height:72px;margin-bottom: 14px; }
#idz-footer .partner-wrapper img { height:46px;margin-right: 3px; }
#footer-grid-inner-wrapper { position: relative; }
#footer-logo-wrapper { position: absolute;top: -40px;right: -40px;background-color: #4994cd;height: 360px;
  padding: 14px 22px;color: white;font-size: 14px; }
@media (min-width: 1220px) {
  #idz-footer  .uk-container { padding: 0; }
}
</style>
