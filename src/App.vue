<template>
  <!-- html코드 -->

  <!-- html 반복문 -->
  <!-- <태그 v-for = "작명 in 몇회" > -->
  <!-- :key 안쓰면 에러남 -->
  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    원룸샵
    <!-- HTML속성도 바인딩 가능 :속성="데이터이름" -->
    <h4 class="red" :style="스타일">
      {{ products[0] }}
    </h4>
    <!-- 밑에있는 데이터룸에서 데이터이름명 입력 -->
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p>{{ price2 }} 만원</p>
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
    };
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
  margin-top: 60px;
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
</style>
