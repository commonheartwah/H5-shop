<template>
  <section>
    <div class="mid">
      <img class="img" src="../../../static/images/cha.png">
      <div class="timeOut">支付失败</div>
      <div class="pay">您的订单支付失败了</div>
      <div class="pay">请重新下单</div>
    </div>
    <mt-button type="danger" class="btn">重新支付</mt-button>
  </section>
</template>
<script>
  export default {};
</script>
<style lang="less" scoped>
  .mid{
    width: 100%;
    height: 15rem;

    // line-height: 15rem;
    text-align: center;
    font-size: 0.7rem;
    .img{
      width: 2rem;
      margin-top: 2rem;
      margin-bottom: 0.4rem;
    }
    .timeOut{
      font-size: 0.5rem;
      margin-bottom: 0.4rem;
    }
    .pay{
      font-size: 0.4rem;
      color: #a0a0a0;
      margin-bottom: 0.25rem;
    }
  }
  .btn {
    width: 50%;
    border-radius: 1rem;
    height: 1.5rem;
    left: 50%;
    margin-left: -2.5rem;
    position: fixed;
    bottom: 0.5rem;
    background-color: #f8526a;
  }
</style>


