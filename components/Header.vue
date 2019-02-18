<template>
  <div class="header-wrapper">
    <!-- Header Section -->
    <header id="idz-header">
      <!-- Mobile / Offcanvas Menu -->
      <div
        id="mobile-nav"
        class="uk-offcanvas"
      >
        <div class="uk-offcanvas-bar">
          <ul
            class="uk-nav uk-nav-offcanvas uk-nav-parent-icon"
            data-uk-nav
          >
            <li class="uk-parent uk-active">
              <a href="javascript:void(0);">
                도메인
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <nuxt-link to="/domain/search">
                    도메인 검색 / 등록
                  </nuxt-link>
                </li>
                <li>
                  <a href="#">
                    도메인 연결 / 포워딩
                  </a>
                </li>
                <li>
                  <a href="#">
                    도메인 장터
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">
                SSL/보안
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <nuxt-link to="#">
                    보안서버 인증서 (SSL)
                  </nuxt-link>
                </li>
                <li>
                  <a href="#">
                    와일드카드 SSL 인증서
                  </a>
                </li>
                <li>
                  <a href="#">
                    웹 취약성 점검 / 모의 해킹
                  </a>
                </li>
                <li>
                  <a href="#">
                    OTP 2차 인증
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">
                웹호스팅/워드프레스
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a href="#">
                    [PHP] 제로보드 호스팅
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">
                IDC/서버호스팅
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <nuxt-link to="/idc/server">
                    전용서버 호스팅
                  </nuxt-link>
                </li>
                <li>
                  <a href="#">
                    블록체인 호스팅
                  </a>
                </li>
                <li>
                  <a href="#">
                    상면 서비스 (Colocation)
                  </a>
                </li>
                <li>
                  <a href="#">
                    재판매 호스팅 (Reseller)
                  </a>
                </li>
                <li>
                  <a href="#">
                    데이터베이스 호스팅
                  </a>
                </li>
                <li>
                  <a href="#">
                    땡처리 서버
                  </a>
                </li>
                <li>
                  <a href="#">
                    NAS / FTP 호스팅
                  </a>
                </li>
              </ul>
            </li>
            <li class="uk-parent">
              <a href="javascript:void(0);">
                솔루션
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a href="#">
                    이메일
                  </a>
                </li>
                <li>
                  <a href="#">
                    전자결제 (PG)
                  </a>
                </li>
              </ul>
            </li>
            <li class="uk-parent">
              <a href="javascript:void(0);">
                패키지상품
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a href="#">
                    이메일 패키지
                  </a>
                </li>
                <li>
                  <a href="#">
                    웹호스팅 패키지
                  </a>
                </li>
                <li>
                  <a href="#">
                    전용서버 패키지
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                클라우드
              </a>
            </li>
            <li class="uk-parent">
              <a href="javascript:void(0);">
                개발지원
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a href="#">
                    GITLAB
                  </a>
                </li>
                <li>
                  <a href="#">
                    블루웹으로 이전
                  </a>
                </li>
                <li>
                  <a href="#">
                    웹사이트 백업
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile / Offcanvas Menu End -->

      <div class="uk-container uk-container-center">
        <div class="uk-grid">
          <!-- Logo -->
          <div class="uk-width-large-1-2 uk-width-medium-1-1 uk-width-small-1-1">
            <div class="idz-logo">
              <nuxt-link to="/">
                <img
                  src="~assets/images/logo.png"
                  alt="logo"
                  class=""
                >
              </nuxt-link>
            </div>
          </div>
          <!-- Logo End -->

          <!-- Domain Search Form -->
          <div class="uk-width-large-1-2  uk-width-medium-1-1 uk-width-small-1-1">
            <div class="idz-search-domain-block">
              <div class="idz-header-search-domain">
                <form class="uk-form idz-search-domain-form">
                  <fieldset>
                    <input
                      type="text"
                      class="uk-form-large uk-width-1-1 "
                      placeholder="도메인 이름 입력"
                    >
                    <button class="uk-button-large idz-button blue uppercase">
                      도메인 검색
                    </button>
                  </fieldset>
                </form>
              </div>
              <div class="idz-domain-promo">
                <ul class="uk-grid uk-grid-collapse uk-grid-width-large-1-4 uk-grid-width-medium-1-4  uk-grid-width-small-1-2 idz-promo-domain-list">
                  <li>
                    <img
                      src="/images/sample/domain-logo/dot-com.png"
                      alt="dot-com"
                    >$9.90
                  </li>
                  <li>
                    <img
                      src="/images/sample/domain-logo/dot-net.png"
                      alt="dot-net"
                    >$9.90
                  </li>
                  <li>
                    <img
                      src="/images/sample/domain-logo/dot-org.png"
                      alt="dot-org"
                    >$11.50
                  </li>
                  <li>
                    <img
                      src="/images/sample/domain-logo/dot-online.png"
                      alt="dot-online"
                    >$12.50
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Domain Search Form End -->

          <!-- Header Info -->
          <!--
                    <div class="uk-width-large-1-1 uk-width-medium-1-1 uk-width-small-1-1">
                        <ul class="uk-grid uk-grid-large uk-grid-with-medium-1-4 idz-header-contact">
                            <li><i class="uk-icon-globe"></i>English</li>
                            <li><i class="uk-icon-phone"></i>1-800-123-4567</li>
                            <li><i class="uk-icon-headphones"></i>Live Chat</li>
                            <li><i class="uk-icon-life-bouy "></i>Help</li>
                        </ul>
                    </div>
                    -->
          <!-- Header End -->
        </div>
      </div>

      <!-- Header Nav -->
      <div
        class="idz-header-nav"
        data-uk-sticky="{top:-400}"
      >
        <div class="uk-container uk-container-center">
          <div class="uk-grid">
            <div class="uk-width-medium-1-1">
              <div class="idz-menu-wrapper">
                <div class="uk-grid">
                  <div class="uk-width-large-8-10 uk-width-medium-3-10 uk-width-small-3-10">
                    <!-- Menu Items -->
                    <div class="idz-nav">
                      <nav class="uk-navbar">
                        <div class="uk-navbar-flip">
                          <ul class="uk-navbar-nav uk-hidden-medium  uk-hidden-small">
                            <li
                              class="uk-parent uk-active"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                도메인
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <nuxt-link to="/domain/search">
                                      도메인 검색 / 등록
                                    </nuxt-link>
                                  </li>
                                  <li>
                                    <a href="#">
                                      도메인 연결 / 포워딩
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      도메인 장터
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown="{justify:'.idz-menu-wrapper'}"
                            >
                              <a href="javascript:void(0);">
                                SSL/보안
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar idz-megamenu">
                                <ul
                                  class="uk-grid"
                                  data-uk-grid-margin
                                >
                                  <li class="uk-width-large-3-10 uk-width-medium-4-10">
                                    <ul class="uk-list uk-list-space">
                                      <li>
                                        <a href="#">
                                          <div class="icon-wrap circle left small blue">
                                            <i class="uk-icon-cubes" />
                                          </div>
                                          <h5>SSL 인증서</h5>
                                          <p class="uk-nbfc">
                                            일반 웹사이트/홈페이지에 적용
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div class="icon-wrap circle left small blue">
                                            <i class="uk-icon-cube" />
                                          </div>
                                          <h5>와일드카드 SSL 인증서</h5>
                                          <p class="uk-nbfc">
                                            하위 도메인(Sub Domain)을 가진 대형 웹사이트
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div class="icon-wrap circle left small blue">
                                            <i class="uk-icon-tasks" />
                                          </div>
                                          <h5>웹 취약성 점검 / 모의 해킹</h5>
                                          <p class="uk-nbfc">
                                            글로벌 해킹대회에 입상한 전문가가 웹 취약성 점검과 모의 해킹을 실시
                                          </p>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="uk-width-large-2-10 uk-width-medium-3-10">
                                    <h5>기타 서비스</h5>
                                    <ul class="uk-list uk-list-space idz-list-check">
                                      <li>
                                        <a href="#">
                                          OTP 2차 인증
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="uk-width-large-3-10 uk-hidden-medium">
                                    <h5>SSL 제공사</h5>
                                    <p>DigiCert - Standard SSL</p>
                                    <p>GlobalSign - Alpha SSL</p>
                                    <p>Comodo - Positive SSL</p>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                IDC/서버호스팅
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <nuxt-link to="/idc/server">
                                      전용서버 호스팅
                                    </nuxt-link>
                                  </li>
                                  <li>
                                    <a href="#">
                                      블록체인 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      상면 서비스 (Colocation)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      재판매 호스팅 (Reseller)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      데이터베이스 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      땡처리 서버
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      NAS / FTP 호스팅
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                웹호스팅/워드프레스
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <a href="#">
                                      [PHP] 워드프레스 홈페이지
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [PHP] 제로보드 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [PHP] 그누보드 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [Node.JS] NodeBB 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [공유] 리눅스 PHP 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [공유] 윈도우즈 .NET 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      [공유] 데이터베이스 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      이미지 호스팅
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      동영상 스트리밍 호스팅
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                솔루션
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <a href="#">
                                      이메일
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      전자결제 (PG)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      유지보수 패키지
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      홈페이지 제작
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                패키지상품
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <a href="#">
                                      이메일 패키지
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      웹호스팅 패키지
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      전용서버 패키지
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                클라우드
                              </a>
                            </li>
                            <li
                              class="uk-parent"
                              data-uk-dropdown
                            >
                              <a href="javascript:void(0);">
                                  개발지원
                              </a>
                              <div class="uk-dropdown uk-dropdown-navbar">
                                <ul class="uk-nav uk-nav-navbar">
                                  <li>
                                    <a href="#">
                                      GITLAB
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      블루웹으로 이전
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      웹사이트 백업
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <!-- Mobile Menu Toggle  -->
                      <a
                        href="#mobile-nav"
                        class="uk-navbar-toggle uk-visible-small uk-visible-medium"
                        data-uk-offcanvas
                      />
                      <!-- Mobile Menu Toggle End-->
                    </div>
                    <!-- Menu Items End -->
                  </div>

                  <!-- Client Area Button -->
                  <div class="uk-width-large-2-10 uk-width-medium-7-10 uk-width-small-7-10">
                    <div class="idz-portal-button">
                      <a
                        href="#client-area"
                        data-uk-modal
                        class="uk-button uk-button-large idz-button red xlarge uppercase"
                      >
                          <!--<i class="uk-icon-user" />-->
                        서비스관리
                      </a>
                    </div>
                  </div>
                  <!-- Client Area Button End -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header Nav End -->
    </header>
    <div
      class="uk-alert uk-alert-danger"
      data-uk-alert=""
    >
      <a
        href=""
        class="uk-alert-close uk-close"
      />
      <p class="uk-margin-small-top">
        [새해 프로모션] 지급 가입하면 <strong>1만원</strong>, 추천하면 <strong>5천원</strong> 적립
      </p>
    </div>
    <!-- Header Section End -->
  </div>
</template>

<style>
.idz-nav .uk-navbar-nav>li>a, .idz-search-domain-form .idz-button,
    .idz-portal-button .idz-button.xlarge { font-size: 18px; }
.idz-search-domain-form input[type=text] {
    padding-left: 12px;border: 3px solid #4994cd; }
#idz-header { height: inherit;padding-bottom: 0;padding-top: 20px; }
.header-wrapper .uk-alert { margin: 0;border-radius: 0; }
.idz-search-domain-form input[type=text] { font-size: 22px;font-weight: bold;
    color: #4994cd; }
.idz-search-domain-form input[type=text]::placeholder { font-size: 18px;font-weight: normal; }
.idz-header-nav.uk-active>li.uk-active>a, .idz-nav .uk-navbar-nav>li.uk-active a, .idz-nav .uk-navbar-nav>li>a:active {
  border-bottom: 5px solid #fff; }
</style>
