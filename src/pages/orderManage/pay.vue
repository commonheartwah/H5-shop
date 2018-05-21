<template>
  <section>
    <div class="countDown">
      <div class="time">剩余时间</div>
      <span class="countDown1">请在</span>
      <count-down  class="countDown1" v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="1481450106" :startTime="1481451905" :endTime="1481450115" :tipText="'1'" :tipTextEnd="'2'" :endText="'3'" :dayTxt="'天'" :hourTxt="'时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
      <span class="countDown1">内支付</span>
    </div>
    <ul class="ul">
      <li class="li">
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
            <span class="goodName">运费</span>
            <span class="goodNameNew">¥33</span>
          </div>
          <div class="borderBot">
            <span class="goodName">实付款</span>
            <span class="goodNameNew">¥33</span>
          </div>
        </div>
      </li>
    </ul>
    <mt-button type="danger" class="btn">确认支付</mt-button>
  </section>
</template>
<script>
import CountDown from "vue2-countdown";
export default {
  components: {
    CountDown
  },
  methods: {
    countDownS_cb() {},
    countDownE_cb() {
      console.log("111");
    },
    times() {
      var self = this;
      setInterval(function() {
        self.time = count;
        Vue.set([self.time], "time", count);
        count--;
        if (count <= 0) {
          count = 0;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.ul {
  .li {
    float: left;
    width: 100%;
    line-height: 0.5rem;
    background-color: #ffffff;
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
  background-image: url("../../../static/images/Group13.png");
  background-size: 100%;
  background-repeat: no-repeat;
  .time {
    vertical-align: middle;
    display: inline-block;
    width: 1.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    font-size: 12px;
    margin: 0.25rem 0.35rem 0.25rem 0rem;
    line-height: 0.6rem;
    padding: 0 0.05rem;
    border: 1px solid #fff;
    background-color: #b298ff;
    color: #fff;
    text-align: center;
  }
}
.countDown1 {
  display: inline-block;
  color: #fff;
  font-size: 0.45rem;
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
