<template>
  <section>
    <div class="top">
      <div class="accumulate">
        <div class="accLabel">累计收益</div>
        <div class="accMoney">¥1500</div>
      </div>
      <div class="cash">
        <div class="cashLabel">可提现收益</div>
        <div class="cashMoney">¥200</div>
      </div>
    </div>
    <div class="main">
      <div class="label">收益记录</div>
      <ul class="ulTop1">
        <li class="liTop">被邀请人</li>
        <li class="liTop">够课记录</li>
        <li class="liTop1">收益金额</li>
      </ul>
      <ul class="ulTop">
        <li class="liTop">
          <div class="info">
            <div class="user">
              <div class="name">斑马</div>
              <div class="time">2018.06.23 12:13</div>
            </div>
            <div class="money">$39.9</div>
            <div class="money1">$10</div>
          </div>
        </li>
        <li class="liTop">
          <div class="info">
            <div class="user">
              <div class="name">斑马</div>
              <div class="time">2018.06.23 12:13</div>
            </div>
            <div class="money">$39.9</div>
            <div class="money1">$10</div>
          </div>
        </li>
        <li class="liTop">
          <div class="info">
            <div class="user">
              <div class="name">斑马</div>
              <div class="time">2018.06.23 12:13</div>
            </div>
            <div class="money">$39.9</div>
            <div class="money1">$10</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="botton">
      <mt-button type="danger" class="btn" >加载更多</mt-button>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  height: 3rem;
  background-color: #fff;
  padding: 0.6rem;
  border-bottom: 1px solid #e5e5e5;
  .accumulate {
    display: inline-block;
    width: 45%;
    height: 1.9rem;
    background-color: red;
    margin-right: 0.65rem;
    border-radius: 0.4rem;
    background-image: linear-gradient(-164deg, #ac98ff 0%, #ca98ff 100%);
    .accLabel {
      color: #fff;
      font-size: 0.4rem;
      margin: 0.4rem;
    }
    .accMoney {
      color: #fff;
      font-size: 0.4rem;
      margin: 0.4rem;
    }
  }
  .cash {
    display: inline-block;
    width: 45%;
    height: 1.9rem;
    background-color: red;
    border-radius: 0.4rem;
    background-image: linear-gradient(-164deg, #ff7d70 0%, #ffa77e 100%);
    .cashLabel {
      color: #fff;
      font-size: 0.4rem;
      margin: 0.4rem;
    }
    .cashMoney {
      color: #fff;
      font-size: 0.4rem;
      margin: 0.4rem;
    }
  }
}
.main {
  margin-top: 0.5rem;
  border-top: 1px solid #e5e5e5;
  .label {
    font-size: 0.6rem;
    padding: 0.5rem;
  }
  .ulTop1 {
    float: left;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 0.5rem;
    padding-bottom: 0.3rem;
    width: 100%;
    .liTop {
      float: left;
      font-size: 0.4rem;
      margin-right: 1.84rem;
      margin-top: 0.4rem;
    }
    .liTop1 {
      float: right;
      font-size: 0.4rem;
      margin-right: 1.5rem;
      margin-top: 0.4rem;
    }
  }
  .ulTop {
    float: left;
    margin-left: 0.5rem;
    padding-bottom: 0.3rem;
    width: 100%;
    .liTop {
      float: left;
      font-size: 0.4rem;
      margin-right: 1.84rem;
      margin-top: 0.4rem;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 0.3rem;
      .info {
        .user {
          float: left;
          margin-right: 0.5rem;
          .name {
          }
          .time {
            font-size: 0.3rem;
            margin-top: 0.1rem;
            color: #747474;
          }
        }
        .money {
          float: left;
          margin-left: 0.5rem;
          margin-top: 0.2rem;
        }
        .money1 {
          float: left;
          margin-left: 2.5rem;
          margin-top: 0.2rem;
          color: #ff586c;
        }
        .user {
          float: left;
        }
      }
    }
    .liTop1 {
      float: right;
      font-size: 0.4rem;
      margin-right: 1.5rem;
      margin-top: 0.4rem;
    }
  }
}
.botton {
  text-align: center;
  .btn {
    color: #666666;
    width: 2.5rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 1rem;
    margin-top: 0.4rem;
  }
}
</style>

