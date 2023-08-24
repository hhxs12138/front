<template>
    <h1>
        personal page
    </h1>
    <p>
        this is the personal page of the building.
    </p>
<body>
    <table class="user-table">
      <tr>
        <th>用户ID</th>
        <th>用户名</th>
        <th>简介</th>
        <th>所属地区</th>
        <th>粉丝数</th>
        <th>关注数</th>
        <th>已发布视频</th>
      </tr>
      <!-- Add table rows and data here -->
    </table>
</body>
<div class="back-button">
      <button @click="goToHomePage">返回主页</button>
    </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      // 使用 router.go(-1) 返回上一页，如果你的主页在当前页面之前，这将返回主页
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.back-button {
  margin-top: 20px;
}
.back-button button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.back-button button:hover {
  background-color: #45a049;
}

.user-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.user-table th, .user-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.user-table th {
  background-color: #f2f2f2;
}
</style>