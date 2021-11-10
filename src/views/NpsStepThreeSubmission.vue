<template>
  <div class="wrap">
    <div>
      <img src="@/assets/header_nps.png" class="header_img">
    </div>
    <a-divider />
    <div class="content">
      <p class="title_text">
        [KWAM-전체] 귀하께서는 도매사 선진화 프로그램(KWAM)에 대하여 전반적으로 얼마나 만족하시나요?
      </p>
      <div class="score_range">
        <a-button-group>
          <a-button v-for="item in range1" :key="item">{{ item }}</a-button>
        </a-button-group>
      </div>
      <p class="title_text">
        [KWAM-OB Patch] 귀하께서는 KWAM 소프트웨어(OB-Patch)에 대하여 전반적으로 얼마나 만족하시니요?
      </p>
      <div class="score_range">
        <a-button-group>
          <a-button v-for="item in range2" :key="item">{{ item }}</a-button>
        </a-button-group>
      </div>
      <p class="title_text">
        [KWAM-진단미팅] 귀하께서는 '진단미팅'에 대하여 전반적으로 얼마나 만족하시니요?
      </p>
      <div class="score_range">
        <a-button-group>
          <a-button v-for="item in range3" :key="item">{{ item }}</a-button>
        </a-button-group>
      </div>
      <p class="title_text">
        [KWAM-DB미팅] 귀하께서는 'DB미팅(실질분석, 벤치마킹, 매거진)'에 대하여 전반적으로 얼마나 만족하시니요?
      </p>
      <div class="score_range">
        <a-button-group>
          <a-button v-for="item in range4" :key="item">{{ item }}</a-button>
        </a-button-group>
      </div>
      <p class="title_text">
        [KWAM-교육] 귀하께서는 '임직원 교육 및 KWAM아카데미'에 대하여 전반적으로 얼마나 만족하시니요?
      </p>
      <div class="score_range">
        <a-button-group>
          <a-button v-for="item in range5" :key="item">{{ item }}</a-button>
        </a-button-group>
      </div>
      <p class="title_text">
        마지막으로 오비맥주의 제품 및 서비스 개선을 위한 의견이 있으시면, 자유롭게 작성하여 주십시오.
      </p>
      <div>
        <a-textarea placeholder="Answer here" :rows="4" />
      </div>
    </div>
    <div class="btn-box">
      <a-row>
        <a-col :span="6">
        </a-col>
        <a-col :span="6" class="align-l">
          <a-button @click="goBack">뒤로</a-button>
        </a-col>
        <a-col :span="6" class="align-r">
          <a-button type="primary" @click="goNext">
            제출
          </a-button>
        </a-col>
        <a-col :span="6">
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        range1: [1, 2, 3, 4, 5],
        range2: [1, 2, 3, 4, 5],
        range3: [1, 2, 3, 4, 5],
        range4: [1, 2, 3, 4, 5],
        range5: [1, 2, 3, 4, 5],
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        score5: 0,
      }
    },
    methods: {
      goBack() {
        this.$router.push('/nps_step_two');
      },
      goNext() {
        this.$router.push('/nps_step_four');
      }
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

.title_text > div {
  margin-bottom: 10px;
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

.indent-1 {
  margin-left: 20px;
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.btn-box {
  margin-top: 50px;
}

.score_range {
  margin-bottom: 20px;
}
</style>