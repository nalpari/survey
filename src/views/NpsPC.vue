<template>
  <div>
    <img src="@/assets/main_view.png">
    <a-modal
      v-model="modal2Visible"
      title="고객만족도 설문조사"
      centered
      okText="다음"
      cancelText="이전"
      @ok="() => (modal2Visible = false)"
    >
      <p class="title_text">
        귀하께서는 다음 중 어떤 항목을 특별히 만족하시나요? 해당되는 모든 것을 선택 하여 주십시오.
      </p>
      <div class="title_text">
        <div>
          <a-checkbox>
            오비맥주 회사
          </a-checkbox>
        </div>
        <div class="indent-1">
          <div>
            <a-checkbox>
              고객과의 전략적 파트너쉽
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              영업 전략 및 활동
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              시장 혁신 (이노베이션)
            </a-checkbox>
          </div>
        </div>

        <div>
          <a-checkbox>
            제품&브랜드
          </a-checkbox>
        </div>
        <div class="indent-1">
          <div>
            <a-checkbox>
              고객 니즈에 부합하는 다양한 제품
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              마케팅 캠페인 활동
            </a-checkbox>
          </div>
        </div>

        <div>
          <a-checkbox>
            오더 및 배송 서비스
          </a-checkbox>
        </div>
        <div class="indent-1">
          <div>
            <a-checkbox>
              원활한 제품 공급
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              오더 편의성
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              배송/회수 서비스
            </a-checkbox>
          </div>
        </div>

        <div>
          <a-checkbox>
            회사의 지원 및 서비스
          </a-checkbox>
        </div>
        <div class="indent-1">
          <div>
            <a-checkbox>
              영업사원의 비지니스 도움
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              필요시 쉽게 연락 가능한 서비스/지원
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              중요한 정보의 신속하고 지속적인 전달 및 공유
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              도매사 비지니스에 대한 이해와 적절한 지원
            </a-checkbox>
          </div>
          <div>
            <a-checkbox>
              고객과의 약속 이행
            </a-checkbox>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modal2Visible: true
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