<template lang='html'>
  <section>
    <div class="top">收货信息</div>
    <div class="message">
      <mt-field label="收货人" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="选择地区" type="address" v-model="address" @click.native='show' placeholder="请选择省份"></mt-field>
      <mt-field label="详细地址" placeholder="请输入详细地址"  v-model="addressDetail"></mt-field>
      <mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="phone"></mt-field>
    </div>
    <mt-popup
      v-model="addressVisible"
      position="bottom"
      >
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange" :show-toolbar="false" valueKey="label" :visible-item-count="3" ></mt-picker>
    </mt-popup>
    <mt-button type="danger" class="btn" @click.native='jumpGoodsList'>下一步</mt-button>
    
  </section>
</template>
<script>
import { Field, Picker, Popup } from "mint-ui";
import myaddress from "../../components/pca.json";
export default {
  data() {
    return {
      addressVisible:false,
      username: "",
      address: '',
      addressDetail: "",
      phone: "",
      selected: "1",
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  methods: {
    closeAddress(){
      this.addressVisible = false
    },
    show(){
      this.addressVisible = true
    },
    jumpGoodsList() {
      this.$router.push({
        path: "/address"
      });
    },
    onMyAddressChange(picker, values) {

      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
        // if(this.myAddresscounty){
        //   this.addressVisible = false
        // }
        this.address=this.myAddressProvince+this.myAddressCity+this.myAddresscounty
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
    });
  }
};
</script>
<style lang="less" scoped>
.top {
  height: 1rem;
  line-height: 1rem;
  font-family: 700;
  font-size: 0.6rem;
  margin: 0.2rem;
}
.btn {
  width: 80%;
  margin-left: 10%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: #ccc;
}
</style>


