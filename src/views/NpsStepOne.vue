<template>
  <div class="wrap">
    <div>
      <img src="@/assets/header_nps.png" class="header_img">
    </div>
    <a-divider />
    <div class="content">
      <div class="t-l">
        <p class="t-p">대표님께</p>
        <p class="t-p">안녕하십니까 오비맥주 입니다</p>
        <p class="t-p">평소 오비맥주에 보여주신 성원과 도움에 진심으로 감사의 말씀을 드리며, COVID-19로 어려운 시기에 가족과 임지원들 모두 건강 하시기를 바랍니다.</p>
        <p class="t-p">오비맥주는 고객의 평가에 가장 높은 가치를 두고 있습니다.귀하의 소중한 평가 및 의견이 오비맥주가 제공하는 제품, 브랜드, 서비스를 개선하는데 큰 도움이 될수 있습니다.</p>
        <p class="t-p">이어지는 간단한 설문에 대해 평가를 부탁드립니다.</p>
        <p class="t-p">(본 설문은 철저히 익명으로 진행되며, 상기 목적 이외의 어떤 다른 목적으로도 사용되지 않습니다.)</p>
        <p class="t-p">감사합니다.</p>
        <p class="t-p t-b">오비맥주(주) 대표이사 배하준</p>
      </div>
      <div class="title_text">
        <h5>Consent</h5>
        <p>
          <a-checkbox @change="chkRequire">
            I am to collect my information and send it to AB-InBev.
          </a-checkbox>
        </p>
        <p>Terms and Conditions.</p>
      </div>
      <div>
        <p class="t-l t-p t-b">귀하께서는 오비맥주의 비지니스(제품, 서비스, 지원 등)에 얼마나 만족하십니까?</p>
        <a-button-group>
          <a-button v-for="item in range" :key="item" @click="chkScore(item)">{{ item }}</a-button>
        </a-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: false,
        require: false,
        score: -1,
        range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      chkScore(score) {
        this.score = score;
        console.log(`this.score = ${this.score}`);
        this.require ? this.$router.push('/nps_step_two') : this.openNotificationWithIcon('error');
      },
      chkRequire() {
        this.require  = !this.require
      },
      openNotificationWithIcon(type) {
        this.$notification[type]({
          message: 'ERROR',
          description:
            '필수체크에 동의해야 합니다.',
        });
      },
    }
  }
</script>

<style scoped>
.wrap {
  width: 500px;
}

.content {
  padding: 0 10px;
}

.header_img {
  width: 500px;
}

.title_text {
  text-align: left;
}

.t-l {
  text-align: left;
}

.t-p {
  padding-bottom: 10px;
}

.t-b {
  font-weight: bold;
}
</style>