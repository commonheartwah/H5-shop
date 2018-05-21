<template>
  <section>
    <div class="mid">
      <img class="img" src="../../../static/images/tanhao.jpg">
      <div class="timeOut">暂无物流信息</div>
      <div class="pay">您好暂时没有查询到</div>
      <div class="pay">相关物流信息</div>
    </div>
    <div class="top">
      <div class="topOne">
        <span>物流配送: </span>
        <span>YHHGHJJJGG</span>
      </div>
      <div class="topOne">
        <span>快递单号: </span>
        <span>624685869954</span>
      </div>
    </div>
    <ul class="ul">
      <li class="li">
        <div class="box"></div>
        <div class="liTop">2018-4-18 13:11:11</div>
        <div class="liBottom">[已经签收]</div>
      </li>
       <li class="li">
        <div class="box"></div>
        <div class="liTop">2018-4-18 13:11:11</div>
        <div class="liBottom">[已经签收]</div>
      </li>
       <li class="li">
        <div class="box"></div>
        <div class="liTop">2018-4-18 13:11:11</div>
        <div class="liBottom">[已经签收]</div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.top {
  background-color: #fff;
  background-image: url("../../../static/images/wuliu.png");
  background-repeat: no-repeat;
  background-position: 0.4rem 0.4rem;
  background-size: 0.7rem;
  padding: 0.25rem 0 0.25rem 0.4rem;
  .topOne {
    margin-left: 1rem;
    margin-bottom: 0.1rem;
    font-size: 0.4rem;
  }
}
.ul {
  background-color: #fff;
  .li {
    position: relative;
    padding: 0.5rem 0 0.3rem 1.5rem;
    .liTop {
      margin-bottom: 0.3rem;
    }
    .box {
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.5rem;
      background-color: #ccc;
      top: 0.7rem;
      left: 0.45rem;
    }
  }
}
.mid {
  width: 100%;
  height: 15rem;

  // line-height: 15rem;
  text-align: center;
  font-size: 0.7rem;
  .img {
    width: 3rem;
    margin-top: 2rem;
    margin-bottom: 0.4rem;
  }
  .timeOut {
    font-size: 0.5rem;
    margin-bottom: 0.4rem;
  }
  .pay {
    font-size: 0.4rem;
    color: #a0a0a0;
    margin-bottom: 0.3rem;
  }
}
</style>

