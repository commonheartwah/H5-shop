<template>
  <section>
    <div class="mid">
      <img class="img" src="../../../static/images/tanhao.jpg">
      <div class="timeOut">暂无订单</div>
      <div class="pay">您暂时没有订单</div>
      <div class="pay">请稍后查看</div>
    </div>
    <ul class="ul">
      <li class="li">
        <div class="top">
          <span class="orderId">订单状态</span>
          <span class="orderType">已支付</span>
        </div>
        <div class="midden">
          <div class="borderBot">
            <span class="goodName">商品名称</span>
            <span class="goodNameNew">231223455</span>
          </div>
          <div class="borderBot">
            <span class="goodName">订单金额</span>
            <span class="goodNameNew">¥33</span>
          </div>
          <div class="borderBot">
            <span class="goodName">订单号</span>
            <span class="goodNameNew">20182222</span>
          </div>
        </div>
        <div class="bottom">
          <mt-button type="primary" class="btn">查看物流</mt-button>
        </div>
      </li>
      <li class="li">
        <div class="top">
          <span class="orderId">订单状态</span>
          <span class="orderType">已支付</span>
        </div>
        <div class="midden">
          <div class="borderBot">
            <span class="goodName">商品名称</span>
            <span class="goodNameNew">231223455</span>
          </div>
          <div class="borderBot">
            <span class="goodName">订单金额</span>
            <span class="goodNameNew">¥33</span>
          </div>
          <div class="borderBot">
            <span class="goodName">订单号</span>
            <span class="goodNameNew">20182222</span>
          </div>
        </div>
        <div class="bottom">
          <mt-button type="primary" class="btn">查看物流</mt-button>
        </div>
      </li>
    </ul>
    
  </section>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
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
.ul {
  .li {
    float: left;
    width: 100%;
    line-height: 0.5rem;
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 0.4rem;
    .top {
      padding: 0.5rem;
      line-height: 0.1rem;
      .orderId {
        float: left;
        font-size: 0.5rem;
        font-weight: 700;
      }
      .orderType {
        float: right;
        color: red;
        font-size: 0.4rem;
      }
    }
    .midden {
      .borderBot {
        border-bottom: 1px solid #e5e5e5;
      }
      // border-top: 1px solid #ccc;
      padding: 0.5rem;
      .goodName {
        display: inline-block;
        font-size: 0.4rem;
        font-weight: 700;
        margin: 0.25rem 0;
      }
      .goodNameNew {
        margin-left: 0.2rem;
        font-size: 0.4rem;
        font-weight: 400;
        float: right;
        line-height: 1rem;
      }
    }
    .bottom {
      .btn {
        width: 2.5rem;
        height: 0.9rem;
        font-size: 14px;
        float: right;
        margin: 0.1rem 0.3rem 0.35rem 0;
        color: #666;
        background-color: #ffffff;
        border-radius: 1rem;
        border: 2px solid #f8f8f8;
      }
    }
  }
}
</style>

