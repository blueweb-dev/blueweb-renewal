<template>
  <div>
    <!-- Page Header -->
    <section id="idz-header-inner">
      <video
        loop
        muted
        playsinline
        autoplay
        uk-video="autoplay: inview"
        style="position:absolute;top:0;left:0;width:100%;"
      >
        <source
          src="https://s3.envato.com/h264-video-previews/c9254a09-c8ac-4cbc-b47b-dcdf3f7da591/21720987.mp4"
          type="video/mp4"
        >
      </video>
      <div class="uk-container uk-container-center">
        <div class="idz-page-title idz-padding-medium">
          <div class="uk-grid">
            <!-- Page Header Title -->
            <div class="uk-width-large-1-2 uk-width-medium-1-3">
              <div class="idz-title">
                <h1 class="">
                  도메인<span>검색/등록</span>
                </h1>
                <i class="uk-icon-server" />
              </div>
            </div>
            <!-- Page Header Title End -->

            <!-- Page Description  -->
            <div class="uk-width-large-1-2 uk-width-medium-2-3">
              <div class="uk-grid">
                <div class="uk-width-medium-3-4 uk-push-1-4">
                  <div class="idz-page-promo uk-margin-top">
                    <p>NIDA 공인기관, 24시간 지원,<br>혁신적이고 강력한 도메인 관리 시스템</p>
                  </div>
                </div>
                <div class="uk-width-medium-1-4 uk-pull-3-4" />
              </div>
            </div>
            <!-- Page Description End -->
          </div>
        </div>
      </div>
    </section>
    <!-- Page Header End -->

    <!-- Content Section -->
    <section class="idz-padding">
      <div class="uk-container uk-container-center">
        <div
          class="uk-grid"
          data-uk-grid-margin
        >
          <div class="uk-width-large-1-1 idz-margin-top-ml uk-text-center">
            <!-- domain search begin -->
            <!--<form
              id="domain-search-page"
              class="uk-form uk-width-1-1"
            >
              <fieldset class="uk-width-1-1" uk-grid>
                <input
                  type="text"
                  placeholder="원하시는 도메인을 입력하세요"
                  class="uk-padding uk-width-4-5"
                >
                <button class="uk-button uk-padding uk-width-1-5">
                    도메인 검색
                </button>
              </fieldset>
            </form>-->
            <form
              id="domain-search-page"
              class="uk-form uk-width-1-1 idz-search-domain-form"
            >
              <fieldset>
                <input
                  type="text"
                  class="uk-form-large uk-width-1-1 "
                  placeholder="당신의 꿈을 이룰 최고의 도메인을 찾으세요!"
                >
                <button class="uk-button-large idz-button blue uppercase">
                  도메인 검색
                </button>
              </fieldset>
            </form>
            <!-- domain search end -->
          </div>
          <div class="uk-width-large-1-1 uk-margin-large-top uk-margin-medium-bottom">
            <table class="uk-table uk-table-striped idz-domain-pricing">
              <thead>
                <tr>
                  <th class="idz-domain-tld">
                    도메인
                  </th>
                  <th class="uk-hidden-small">
                    최소기간
                  </th>
                  <th class="idz-domain-price">
                    등록비용
                  </th>
                  <th class="idz-domain-price uk-hidden-small">
                    갱신비용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .com
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .net
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .org
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .info
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .biz
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .tv
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .mobi
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .website
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .name
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .in
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .ws
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="idz-domain-tld">
                    <i class="uk-icon-globe" /> .xyz
                  </td>
                  <td class="uk-hidden-small">
                    1년
                  </td>
                  <td>18,000원</td>
                  <td class="uk-hidden-small">
                    14,000 (22% 할인)
                    <div class="uk-badge uk-badge-notification uk-badge-success uk-margin-left">
                      12,000, 2년 구매 (33% 할인)
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <!-- Content Section End -->

    <!-- Content Section -->
    <section class="section-grey idz-padding bg-parallax4 idz-padding-bottom-medium">
      <div class="uk-grid content-bg2">
        <div class="uk-width-large-1-1 uk-width-medium-1-1 uk-width-small-1-1">
          <div class="uk-container uk-container-center">
            <div class="uk-grid">
              <div class="uk-width-large-2-3 uk-width-medium-1-1 uk-padding">
                <h1 class="uk-margin-top uk-margin-small-bottom">
                  Up to 40% off Domain prices
                </h1>
                <p class="idz-text-18px idz-text-blue  uk-margin-small-top uk-margin-medium-bottom">
                  Excepteur sint occaecat cupidatat proident sunt qui officia
                </p>
                <p class="uk-margin-medium-bottom">
                  Sed perspiciatis unde omnis natus error voluptatem accu santium doloremque laudan tium, totam rem aperiameaque ipsa quae ab illo inventore reprehenderit qui in ea voluptate.
                </p>
                <div
                  class="uk-grid uk-grid-medium"
                  data-uk-grid-margin
                >
                  <div class="uk-width-large-1-4 uk-width-medium-1-4 uk-width-small-1-2">
                    <div class="uk-panel uk-panel-box idz-panel-domain alt uk-vertical-align uk-padding-top-remove  uk-padding-bottom-remove">
                      <div class="uk-vertical-align-middle">
                        <img
                          src="/images/sample/domain-logo/com.png"
                          alt=""
                        >
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-large-1-4 uk-width-medium-1-4 uk-width-small-1-2">
                    <div class="uk-panel uk-panel-box idz-panel-domain alt uk-vertical-align  uk-padding-top-remove uk-padding-bottom-remove">
                      <div class="uk-vertical-align-middle">
                        <img
                          src="/images/sample/domain-logo/net.png"
                          alt=""
                        >
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-large-1-4 uk-width-medium-1-4 uk-width-small-1-2">
                    <div class="uk-panel uk-panel-box idz-panel-domain alt uk-vertical-align  uk-padding-top-remove uk-padding-bottom-remove">
                      <div class="uk-vertical-align-middle">
                        <img
                          src="/images/sample/domain-logo/org.png"
                          alt=""
                        >
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-large-1-4 uk-width-medium-1-4 uk-width-small-1-2">
                    <div class="uk-panel uk-panel-box idz-panel-domain alt uk-vertical-align  uk-padding-top-remove uk-padding-bottom-remove">
                      <div class="uk-vertical-align-middle">
                        <img
                          src="/images/sample/domain-logo/info.png"
                          alt=""
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="uk-button uk-button-large idz-button outline blue large uk-margin-medium-top uk-margin-medium-bottom"
                  href=""
                >
                  Get the Promo code<i class="uk-icon-chevron-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content Section End -->

    <!-- Content Section -->
    <section class="idz-padding uk-margin-top uk-margin-large-bottom">
      <div class="uk-container uk-container-center">
        <div
          class="uk-grid uk-grid-divider"
          data-uk-grid-margin
        >
          <div class="uk-width-large-1-2 uk-width-medium-1-2 uk-width-small-1-1 idz-padding-bottom-ml">
            <h3 class="uk-margin-small-top">
              Every domain includes
            </h3>
            <ul class="uk-list idz-list-check green">
              <li>Managed DNS at no additional cost.</li>
              <li>ICANN compliance guaranteed, including registrant validation.</li>
              <li>Search tools like Name Suggestion and Premium Domains.</li>
              <li>
                A 50% share of net advertising revenues ~ <a href="#">
                  Domain Parking Program
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-width-large-1-2 uk-width-medium-1-2 uk-width-small-1-1">
            <h3 class="uk-margin-small-top">
              Contact Privacy
            </h3>
            <p class="uk-nbfc">
              Contact Privacy hides the identity of a Registrant when a user does a WHOIS lookup on that Registrant’s domain. The benefit of having Contact Privacy is that the Registrant’s identity, including home address, phone number, and email address, is shielded from spammers, identity thieves and scammers.
            </p>
            <a
              class="uk-button idz-button link uk-padding-remove idz-text-blue"
              href="#"
            >
              Check out our Contact Privacy FAQ<i class="uk-icon-chevron-circle-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Content Section End -->
  </div>
</template>

<style scoped>
#domain-search-page { width: 100%; }
#domain-search-page fieldset { position: relative;width: 100%!important; }
#domain-search-page input[type=text] { border: 3px solid #4994cd; }
#domain-search-page button { position: absolute;right: 0;top: 0;left: inherit;padding-left: 15px;
    padding-right: 15px; }
@media only screen and (max-width: 479px) {
    #domain-search-page button {
        width: inherit;
    }
}
</style>
