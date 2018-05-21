<template lang="html">
    <section>
        <mt-navbar v-model="selected" class="top">
            <mt-tab-item id="1">0-2岁</mt-tab-item>
            <mt-tab-item id="2">2-4岁</mt-tab-item>
            <mt-tab-item id="3">4-6岁</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
            </mt-tab-container-item>
        </mt-tab-container>

        <div class="bottom">
            <div class="text">
                <div class="topT">现价59元</div>
                <div class="topB">课程原价538元</div>
            </div>
            <mt-button type="danger" class="botbtn" @click.native='jumpGoodsList'>邀请好友</mt-button>
        </div>
    </section>
</template>

<script>
import { Navbar, TabItem, Button } from "mint-ui";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    jumpGoodsList() {
      console.log(11);
      this.$router.push({
        path: "/register"
      });
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #26a2ff;
    color: #fff;
    margin-bottom: -3px;
    border: 1px solid #fff;
    background-color: #f8526a;
    border-radius: 0.8rem;
    color: #fff;
    margin: 0.2rem;
}
.mint-navbar .mint-tab-item {
    border-bottom: 3px solid #26a2ff;
    color: rgb(105, 97, 97);
    margin-bottom: -3px;
    border: 1px solid #fff;
    // background-color: #26a2ff;
    background-image: linear-gradient(-164deg, #2AF7DB 0%, #0FC8E5 100%);
    border-radius: 0.8rem;
    margin: 0.2rem;
}
.top {
  margin: 0.5rem;
}
.btn {
  width: 100%;
  position: absolute;
  bottom: 0rem;
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 2rem;
  background-color: #fff;
  padding-top: 0.4rem;
  .botbtn {
    width: 50%;
    height: 1.5rem;
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.2rem;
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
      text-decoration:line-through;
    }
  }
}
</style>
