<template>
  <div class="container">
    <button @click="sendReq('get')">发送get请求</button>
    <button @click="sendReq('post')">发送post请求</button>
    <button @click="sendReq('put')">发送put请求</button>
    <button @click="sendReq('delete')">发送delete请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendReq(param) {
      this.$api[`${param}Req`]({
        test: "1",
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: @main-bg-color;
  .flexBoxFunc(space-around;space-around);
  flex-direction: column;
  position: fixed;
  width: 200px;
  height: 200px;
  .positionCenter();
}
</style>
