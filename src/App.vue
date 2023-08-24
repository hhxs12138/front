<template>
  <div class = "jump">
    <el-form-item :inline="true">
      <div class="jump-input">
        <el-input type="success" :placeholder="placeholderInfo" v-model="jumpDestination" clearable>   
        </el-input>
      </div>
      <div class="jump-button">
        <router-link :to="'/'+jumpDestination">
          <el-button type="success">Jump</el-button>
        </router-link>
      </div>
    </el-form-item>
  </div>

  <div class="show">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Error from './components/Error.vue'
import page from './components/page.vue'


//kkk
export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    Error,
    page
  },
  data(){
    return {
      placeholderInfo: "Please input the jump destination here.",
      countNumber: 0,
      jumpDestination: ''
    }
  },
  methods:{
    // 这里可以写自己的函数，调用的时候可以使用vue的绑定的方式进行响应，例如下：
    /*
      yourFunction(){
        console.log("*")
      }
    */
    goHome:function (){
      this.$router.push({path: '../components/Home.vue'})
    },

    onCounting(){
      this.countNumber++
    }
  },
    // created是一个生命周期函数，里面的内容会在vue页面创建完成之后进行加载，这里我调用了onCounting
    // 函数，对data中的countNumber进行自增，然后输出到控制台中(F12)
  created(){
    this.onCounting()
    console.log(this.countNumber)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.jump {
  display: inline-block;
}

.jump-input {
  width: 270px;
}

.jump-button{
  margin-left: 10px;
}
.show {
  margin-top: 50px;
}

</style>

//发发发发发发发
