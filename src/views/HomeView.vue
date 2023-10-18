<template>
  <div>
    <h1>welcome to {{ title }}</h1>
    <!-- <input type="text" value="abc" /> -->
    <!-- value는 v-model로 접근 -->
    <input v-model="input1" type="text" />
    <!-- 클릭하면 @click -->
    <button type="button" @click="getData">GET</button>
    <button type="button" @click="setData">SET</button>
    <!-- 값이 변경되면 @change -->
    <select v-model="region" class="form-control" @change="changeRegion">
      <option v-for="(data, i) in options" :key="i" :value="data.v">
        {{ data.t }}
      </option>
    </select>

    <!-- if절은 v-if는 조건에 만족하지 않으면 아예 렌더링안함 -->
    <!-- <table v-if="tableShow" class="table table-bordered"> -->
    <!-- v-show는 조건에 만족하지않아도 렌더링하긴 함 (단지 화면에만 안보임)-->
    <!-- v-show는 화면에 자주 보였다안보였다 할 때 씀 ex)탭 전환 -->
    <table v-show="tableShow" class="table table-bordered">
      <tr v-for="(data, i) in options" :key="i">
        <td>{{ data.v }}</td>
        <td>{{ data.t }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '야옹이',
      title2: '뚱매기',
      input1: 'abc',
      options: [
        {v: 'S', t: 'Seoul'},
        {v: 'J', t: 'Jeju'},
        {v: 'B', t: 'Busan'},
      ],
      region: 'J',
      tableShow: false,
    };
  },
  watch: {
    // 데이터명과 동일하게
    input1() {
      console.log(this.input1);
    },
    title() {},
    region() {
      console.log(this.region);
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  },
  beforeUnmount() {
    // console.log('beforeUnmount');
  },
  unmounted() {
    // console.log('unmounted');
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = '12345';
    },
    changeRegion() {
      alert(this.region);
    },
  },
};
</script>
