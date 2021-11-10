<template>
  <div class="wrap">
    <div>
      <img src="@/assets/header_nps.png" class="header_img">
    </div>
    <a-divider />
    <div class="content">
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
</style>