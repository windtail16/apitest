<template>
  <div>
    <h3> 요구사항 </h3>
    <ul>
      <li>현재 도메인에 따라 요청 url이 바뀔 것</li>
      <li>통신하려는 API에 따라서도 요청 url이 바뀔 것</li>
      <li>요청할 때 HTTP Method(GET, POST) 선택 가능할 것</li>
      <li>요청할 때 Param 값을 입력 받아서 함께 보내도록</li>
      <li>CORS 통신이고, HTTP 헤더에 cookie 정보가 함께 가야 함</li>
    </ul>
    
    <router-link to="/apitest" exact>Home</router-link>
    <router-link to="/apitest/coins" exact>Coins</router-link>
    <router-link to="/apitest/markets" exact>Market</router-link>
    <router-link to="/apitest/centers" exact>Center</router-link>
    <router-link to="/apitest/login" exact>Login</router-link>
    <div>Path: {{$route.path}}</div>
    <router-view></router-view>
    <div id="apidata">API DATA</div>
  </div>
</template>

<script type="text/babel">
  import Fetch from '@/common/fetch.js';
  
  const apidata = document.getElementById('apidata');
  
  export default {
    created() {
      console.log('created');
      
    },
    data() {
      return {
        
      }
    },
    watch: {
     '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        Fetch(this.$route.params.api).then((resData) =>  {
          //let resData = response;
          return resData;
        }).then(function (resData) {
          //console.log(resData);
          document.getElementById('apidata').innerHTML = resData
        })
        
      }
    },
    updated () {
      console.log('updated');
    }
  }
</script>

<style>
  .router-link-active {
    color: white;
    background-color: red;
  }

  .router-link-exact-active {
    color: white;
    background-color: blue;
  }
</style>
