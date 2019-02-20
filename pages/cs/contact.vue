<template>
  <div>
    <section id="idz-header-contact">
      <div id="idz-gmap" />
      <div class="idz-color-overlay" />
      <div class="idz-contact-overlay idz-padding-medium">
        <div class="uk-container uk-container-center">
          <div
            class="uk-grid"
            data-uk-margin
          >
            <div class="uk-width-medium-1-1">
              <h1 class="uk-text-contrast uppercase uk-margin-large-bottom">
                고객센터
              </h1>
            </div>

            <div class="uk-width-medium-1-2 uk-margin-large-bottom">
              <div class="idz-contact-box">
                <p class="idz-text-22px uk-text-contrast uk-margin-remove idz-margin-bottom-tiny">
                  서울 성수 본사
                </p>
                <h1 class="idz-text-48px uk-text-contrast">
                  1588-2120
                </h1>
                <span class="idz-text-block">
                  평일 오전9시 ~ 오후6시
                </span>
                <span class="idz-text-block">
                  server@blueweb.co.kr
                </span>
              </div>
            </div>

            <div class="uk-width-medium-1-2 uk-margin-large-bottom">
              <div class="idz-contact-box">
                <p class="idz-text-22px uk-text-contrast uk-margin-remove idz-margin-bottom-tiny">
                  IDC 서버 당직실
                </p>
                <h1 class="idz-text-48px uk-text-contrast">
                  02-3429-1999
                </h1>
                <span class="idz-text-block">
                  365일 24시간
                </span>
                <span class="idz-text-block">
                  server@blueweb.co.kr
                </span>
              </div>
            </div>

            <div class="uk-width-medium-1-1">
              <p class="idz-text-18px uk-text-contrast">
                서버 장애관련 긴급 상담은 365일 24시간 운영됩니다 (상담시간 이후의 긴급 상황의 경우에만 연락 주시기 바랍니다)
              </p>
              <p>
                일반 서비스, 요금, 세금계산서 등 일반 문의는 평일에만 운영합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="idz-padding">
      <div class="uk-container uk-container-center">
        <div class="uk-grid">
          <div class="uk-width-large-1-2 uk-width-medium-1-1 uk-container-center">
            <h1>연락하기</h1>
            <p class="idz-text-18px idz-text-blue">
              For <strong>Billing</strong> or <strong>Support</strong> inquiries, please log in to the Customer Portal and use the "support" tab.
            </p>

            <div id="contact-form-wrapper">
              <form
                id="contact-form"
                class="uk-form"
              >
                <fieldset>
                  <label>
                    Name <em class="required">
                      *
                    </em>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="textfield"
                    value=""
                  >
                  <label>
                    E-mail <em class="required">
                      *
                    </em>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="textfield"
                    value=""
                  >
                  <label>
                    Subject <em class="required">
                      *
                    </em>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="textfield"
                    value=""
                  >
                  <label>
                    Message <em class="required">
                      *
                    </em>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="textarea"
                    cols="2"
                    rows="6"
                  />
                  <label>&nbsp;</label>
                  <button
                    id="buttonsend"
                    type="submit"
                    name="submit"
                    class="uk-button idz-button blue uk-align-right"
                  >
                    Submit
                  </button>
                  <span
                    class="loading"
                    style="display: none;"
                  >
                    Please wait..
                  </span>
                </fieldset>
              </form>
            </div>
          </div>

          <div class="uk-width-large-1-2 uk-width-medium-1-1">
            <h1>기타 연락처</h1>
            <div class="uk-clearfix" />

            <div class="uk-grid">
              <div class="uk-width-medium-1-2">
                <h3 class="idz-text-22px">
                  요금문의
                </h3>
                <ul class="uk-list ">
                  <li><i class="uk-icon-user idz-text-blue idz-margin-right-small" />John Paul</li>
                  <li><i class="uk-icon-phone idz-text-blue idz-margin-right-small" />1-800-123-4455</li>
                  <li><i class="uk-icon-envelope idz-text-blue idz-margin-right-small" />johnpaul@altishost.com</li>
                </ul>
              </div>

              <div class="uk-width-medium-1-2">
                <h3 class="idz-text-22px">
                  제휴(파트너) 프로그램
                </h3>
                <ul class="uk-list ">
                  <li><i class="uk-icon-user idz-text-blue idz-margin-right-small" />Ralph Wagner</li>
                  <li><i class="uk-icon-phone idz-text-blue idz-margin-right-small" />1-800-123-4456</li>
                  <li><i class="uk-icon-envelope idz-text-blue idz-margin-right-small" />ralphw@altishost.com</li>
                </ul>
              </div>
            </div>

            <hr class="uk-grid-divider">
            <div class="uk-grid">
              <div class="uk-width-medium-1-2">
                <h3 class="idz-text-22px">
                  도메인
                </h3>
                <ul class="uk-list ">
                    <li><i class="uk-icon-user idz-text-blue idz-margin-right-small" />Ralph Wagner</li>
                    <li><i class="uk-icon-phone idz-text-blue idz-margin-right-small" />1-800-123-4456</li>
                    <li><i class="uk-icon-envelope idz-text-blue idz-margin-right-small" />ralphw@altishost.com</li>
                </ul>
              </div>
                <div class="uk-width-medium-1-2">
                    <h3 class="idz-text-22px">
                        서버/웹호스팅
                    </h3>
                    <ul class="uk-list ">
                        <li><i class="uk-icon-user idz-text-blue idz-margin-right-small" />Ralph Wagner</li>
                        <li><i class="uk-icon-phone idz-text-blue idz-margin-right-small" />1-800-123-4456</li>
                        <li><i class="uk-icon-envelope idz-text-blue idz-margin-right-small" />ralphw@altishost.com</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#idz-header-contact {
    background-image: url('https://image.shutterstock.com/z/stock-photo-server-room-center-exchanging-cyber-datas-and-connections-d-rendering-776325814.jpg');
    background-position-y: center; }
</style>
