<template>
  <!-- html코드 -->

  <!-- 모달 -->
  <!-- 동적UI 만드는법 -->
  <!-- 0. HTML CSS로 일단 디자인부터 -->
  <!-- 1. UI의 현재 상태를 데이터로 저장해둠 -->
  <!-- 2. 데이터에 따라 UI가 어떻게 보일지 작성 (v-if)-->
  <div v-if="모달창열렸니 === true" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <!-- html 반복문 -->
  <!-- <태그 v-for = "작명 in 몇회" > -->
  <!-- :key 안쓰면 에러남 (반복문 돌린 요소를 컴퓨터가 구분하기위함)-->
  <!-- 변수작명 2개까지 가능 / 왼쪽변수는 array내의 데이터, 오른쪽변수는 1씩 증가하는 정수 -->
  <div class="menu">
    <!-- <a v-for="a in 메뉴들" :key="a">{{ a }}</a> -->
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <div>
    원룸샵
    <!-- HTML속성도 바인딩 가능 :속성="데이터이름" -->
    <!-- 밑에있는 데이터룸에서 데이터이름명 입력 -->

    <div v-for="(a, i) in 원룸들" :key="a">
      <!-- 이미지 절대경로는 그냥 주소 넣으면 됨 -->
      <!-- <img src="./assets/room0.jpg" class="room-img" /> -->
      <img :src="원룸들[i].image" class="room-img" />
      <h4 @click="모달창열렸니 = true">{{ 원룸들[i].title }}</h4>
      <p>{{ 원룸들[i].price }}원</p>
      <!-- 정통 자바스크립트 버튼 실행방식 onClick="" -->
      <!-- 버튼 실행방식 v-on:click @click=""-->
      <!-- 데이터가 변하면 HTML도 자동으로 바뀜 -->
      <!-- <button @click="신고수 += 2">허위매물신고</button> -->
      <button @click="increase(i)">허위매물신고</button>
      <span>신고수: {{ 신고수[i] }}</span>
    </div>
  </div>
</template>

<script>
// JS코드

// 데이터바인딩
// js를 HTML에 꽂아넣는 문법
// document.getElementById().innerHTML = ??
// 쓰는이유
// 1. html에 하드코딩하면 나중에 변경어려움
// 2. Vue의 실시간 자동렌더링 사용하기위해

// 자바스크립트용함수
function onIncrease() {
  console.log('증가해라');
}

import data from './assets/oneroom';

export default {
  name: 'App',
  components: {},

  // 데이터보관함부터 있어야한다
  // 데이터는 object로
  // 자주변하는 데이터
  data() {
    return {
      price1: 80,
      price2: 70,
      스타일: 'color:blue',
      메뉴들: ['HOME', 'SHOP', 'ABOUT'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices: ['60', '70', '90'],
      신고수: [0, 0, 0, 0, 0, 0],
      모달창열렸니: false,
      원룸들: data,
    };
  },

  methods: {
    // VUE에서 함수만들고싶으면 여기안에
    // 함수안에서 데이터쓸땐 this.데이터명
    increase(i) {
      this.신고수[i] += 1;
    },
  },
};
</script>

<style>
/* CSS코드 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 5px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
