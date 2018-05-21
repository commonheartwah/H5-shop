<template lang="html">
  <section>
    <!-- 开始上课 -->
    <!-- <div class="countDown">
      <span class="countDown1">如何上课</span>
    </div>
    <div class="top">
      <div class="con">
        点击<div class='comon2'>【开始上课】</div>进群上课
      </div>
      <mt-button type="danger" class="btn" @click.native='jumpGoodsList'>开始上课</mt-button>
      <div class='comon1'>请务必及时添加，避免错过开课时间</div>
    </div> -->
    <!-- 开始上课 -->

    <!-- 推广人无需报名 -->
    <!-- <div class="countDown">
      <span class="countDown1">您是宝玩推广人，无需报名上课</span>
    </div> -->
    <!-- 推广人无需报名 -->

    <!-- 扫描二维码 -->
    <div class="countDown">
      <span class="countDown1">如何上课</span>
    </div>
    <div class="top">
      <div class='btnlong'>长按识别下方二维码</div>
      <div class='comon3'>添加小秘书微信好友，进入上课群</div>
      <img src="../../../static/images/erweima.jpg"  alt="" class="erweima"/>
      <div class='comon1'>请务必及时添加，避免错过开课时间</div>
    </div>
    <!-- 扫描二维码 -->

    <ul class="ul">
      <li class="li">
        <div class="top">
          <span class="orderId">订单信息</span>
        </div>
        <div class="midden">
          <div class="borderBot">
            <span class="goodName">商品名称</span>
            <span class="goodNameNew">231223455</span>
          </div>
          <div class="borderBot">
            <span class="goodName">支付金额</span>
            <span class="goodNameNew">¥33</span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="ul">
      <li class="li mb">
        <div class="top">
          <span class="orderId">收货信息</span>
        </div>
        <div class="midden">
          <div class="">
            <span class="goodName1">姓名</span>
            <span class="goodNameNew1">电话</span>
          </div>
          <div class="">
            <div class="address">收货地址</div>
            <span class="goodNameNew1">收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址</span>
          </div>
        </div>
        <img src="../../../static/images/Group3.png" alt="" class="img">
      </li>
    </ul>
    <div class="bottom">
      <div class="text">
        <div class="topT">返现10元</div>
        <div class="topB">每邀请一位好友</div>
      </div>
      <mt-button type="danger" class="botbtn" @click.native='jumpGoodsList'>邀请好友</mt-button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.countDown {
  display: inline-block;
  width: 100%;
  height: 2rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0 auto;
  font-size: 0.5rem;
  color: red;
  // border: 1px solid #ccc;
  // padding: 1.5rem 0.9rem;
  background-image: url("../../../static/images/Group12.png");
  background-size: 100%;
  background-repeat: no-repeat;
  .countDown1 {
    display: inline-block;
    color: #fff;
    font-size: 0.45rem;
  }
}
.topNew {
  text-align: center;
  width: 100%;
  height: 8rem;
  line-height: 8rem;
  font-size: 0.5rem;
}
.orderInfo {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.refound {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1.5rem;
}
.commonLH {
  margin: 0.2rem;
}
.fr {
  float: right;
}
.top {
  margin-top: 0.25rem;
  text-align: center;
  padding: 0.25rem;
  .con{
    display: inline;
    font-size: 0.5rem;
  }
  .btnlong {
    border: 1px solid #ccc;
    width: 50%;
    height: 1rem;
    border-radius: 0.5rem;
    line-height: 1rem;
    margin: 0 auto;
    font-size: 0.4rem;
    background-color: #ccc;
    color: #ffffff;
  }
  .btn {
    width: 7rem;
    height: 1.5rem;
    border-radius: 1rem;
    margin: 0.3rem;
    background-color: #f8526a;
  }
  .comon {
    margin: 0.3rem;
    font-size: 0.5rem;
    color: #f8526a;
    margin: 0.5rem;
    display: inline-block;
  }
  .comon1 {
    margin: 0.3rem;
    font-size: 14px;
    color: #ccc;
    margin: 0.5rem;
  }
  .comon2 {
    font-size: 0.5rem;
    color: #f8526a;
    display: inline-block;
  }
  .comon3 {
    margin: 0.5rem;
    font-size: 0.4rem;
    color: #f8526a;
    display: inline-block;
  }
  .erweima {
    width: 70%;
  }
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 2rem;
  background-color: #fff;
  .botbtn {
    width: 50%;
    height: 1.5rem;
    float: right;
    margin-right: 0.2rem;
    margin-bottom: 0.5rem;
    font-size: 0.5rem;
    border-radius: 2rem;
  }
  .text{
    margin-bottom: -1.5rem;
    margin-left: 0.5rem;
    .topT{
      color: #f8526a;
      font-size: 0.6rem;
    }
    .topB{
      margin-top: 0.2rem;
      color: #666;
    }
  }
}
.ul {
  .mb{
    margin-bottom: 3rem;
    }
  .li {
    float: left;
    width: 100%;
    line-height: 0.5rem;
    background-color: #ffffff;
    
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
    .img {
      width: 100%;
    }
    .midden {
      .borderBot {
        border-bottom: 1px solid #e5e5e5;
      }
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
      .goodName1 {
        display: inline-block;
        font-size: 0.4rem;
        font-weight: 700;
        margin: 0.25rem 1rem 0.25rem 0rem;
      }
      .address {
        display: inline-block;
        width: 1.6rem;
        height: 0.5rem;
        border-radius: 0.2rem;
        font-size: 12px;
        margin: 0.25rem 0.35rem 0.25rem 0rem;
        line-height: 0.5rem;
        padding: 0 0.05rem;
        background-color: #f8526a;
        color: #fff;
        text-align: center;
      }
      .goodNameNew1 {
        // margin-left: 0.2rem;
        font-size: 0.4rem;
        font-weight: 400;
        // float: right;
        width: 1rem;
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
