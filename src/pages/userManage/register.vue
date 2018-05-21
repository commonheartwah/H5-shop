<template lang="html">
    <div class="outer">
        <div class="backLogin" @click="backLogin">
            <!-- <img src="../../../static/images/userHandle/back.png" alt="" >{{ judgeFunc ? '返回登录' : '我有账号去登录' }} -->
        </div>
		<div class="logo">
			<!-- <img src="../../../static/images/userHandle/logo.png" alt=""> -->
		</div>
		<div class="warn" >
			<div v-show="showCodeWarn">
				<!-- <img src="../../../static/images/register/warn.png" alt=""> -->
	            <p>对不起，您输入的手机号格式有误。</p>
			</div>
			<div v-show="showCodeSuccess">
	            <p>验证码已发送，请查看手机。</p>
			</div>
        </div>
        <div class="inputTel">
			<input type="tel" placeholder="请输入手机号码" v-model="mobile" @focus="onInputFocus" @blur="onInputBlur">
			<p>
				<input type="text" placeholder="验证码" v-model="code" @focus="onInputFocus" @blur="onInputBlur">
				<i @click="acquireCode" :style=" reset ? 'color: #222222' : 'color: #11cce4' ">获取验证码<span v-show="reset">({{ resetTime }})</span></i>
			</p>
              <input type="password" placeholder="6-20位密码" v-model="password" @focus="onInputFocus" @blur="onInputBlur">
        </div>
        <div class="next" @click="registerAndLogin" v-if="!judgeFunc">注册并登录</div>
        <div class="next" @click="registerAndLogin" v-else>提交</div>
        <div class="notice" v-if="!judgeFunc">注册即表示您同意<span @click="userProPage">《宝玩用户协议》</span><span @click="privatePage">《隐私协议》</span></div>
        <div class="notice" v-else></div>
    </div>
</template>
<script>
// 获取验证码
import {
	// 注册
	registerCode,
	userRegister,
	// 忘记密码
	resetCode,
	userResetPass,
	// 登录
	userLogin
} from '../../api/api'
import {
	Toast
} from 'mint-ui';
export default {
	props: [
		'judge'
	],
	data() {
		return {
			mobile: '',
			code: '',
			password: '',
			resetTime: 0,
			reset: false,
			showCodeWarn: false,
			showCodeSuccess: false
		}
	},
	computed: {
		judgeFunc() {
			if (this.judge) {
				return this.judge
			} else {
				if (this.$route.query.judge) {
					return this.$route.query.judge
				} else {
					return false
				}
			}
		}
	},
	methods: {
        errorFunc(error) {
			Indicator.close();
			if (error.response) {
				if (error.response.status == 404) {
					Toast({
						message: '请检查网络是否连接',
						position: 'middle',
						duration: 2000
					})
				}
				if (error.response.status == 401) {
					if (this.$cookie.get('ba_a_uid')) {
						userLoginout()
							.then((res) => {
								if (res.data.success) {
									Toast({
										message: '账号有误，请重新登录',
										position: 'middle',
										duration: 2000
									})
									let self = this;
									setTimeout(function() {
										self.showHandle = true;
									}, 1000)
								} else {
									Toast({
										message: res.data.msg,
										position: 'middle',
										duration: 1000
									})
								}
							})
							.catch((error) => {
								console.log(error);
							})
					}
				};
				if (error.response.status == 400) {
					Toast({
						message: '网络忙，请稍后再试',
						position: 'middle',
						duration: 2000
					})
				}
				if (error.response.status == 409) {
					userLoginout()
						.then(res => {})
						.catch(error => {})
					Toast({
						message: '当前状态超出设备限制',
						position: 'middle',
						duration: 2000
					})
				}
			} else {
				Toast({
					message: '抱歉出错了' + error,
					position: 'top',
					duration: 1500
				})
			}
		},
		backLogin() {
			if (window.location.href.indexOf("register") > -1) {
				let route = {
					name: 'userLogin',
					query: {}
				}
				for (var prop in this.$route.query) {
					if (prop !== 'judge') {
						route.query[prop] = this.$route.query[prop]
					}
				}
				this.$router.push(route)
			} else {
				this.$emit('backToLoginPage')
			}
		},
		acquireCode() {
			if (this.resetTime <= 0) {
				let reg = /^1[0-9]{10}$/
				let flag = reg.test(this.mobile)
				if (flag) {
					let i = 0;
					this.reset = true
					this.showCodeSuccess = true
					this.resetTime = 60
					let countDown = setInterval(() => {
						this.resetTime--
							i++
							if (i >= 5) {
								this.showCodeSuccess = false
							}
						if (this.resetTime <= 0) {
							clearInterval(countDown)
							this.reset = false
						}
					}, 1000)
					let params = {
						mobile: this.mobile
					}
					if (!this.judgeFunc) {
						registerCode(params)
							.then((res) => {
								if (res.data.success) {

								} else {
									Toast({
										message: res.data.msg,
										position: 'middle',
										duration: 1500
									})
								}
							})
							.catch((error) => {
								this.errorFunc(error);
							})
					} else {
						resetCode(params)
							.then((res) => {
								if (res.data.success) {

								} else {
									Toast({
										message: res.data.msg,
										position: 'middle',
										duration: 1500
									})
								}
							})
							.catch((error) => {
								this.errorFunc(error);
							})
					}
				} else {
					let i = 0
					this.showCodeWarn = true
					let countDown = setInterval(() => {
						this.resetTime--
							i++
							if (i >= 5) {
								this.showCodeWarn = false
								clearInterval(countDown)
							}
					}, 1000)
				}
			}
		},
		registerAndLogin() {
			let regMobile = /^1[0-9]{10}$/
			let regCode = /^[0-9]{6}$/
			let regPwd = /^(\S){6,20}$/;
			let mobileFlag = regMobile.test(this.mobile)
			let codeFlag = regCode.test(this.code)
			let pwdFlag = regPwd.test(this.password)
			if (pwdFlag && codeFlag && mobileFlag) {
				let params = {
					mobile: this.mobile,
					password: this.password,
					sms_code: this.code
				}
				if (!this.judgeFunc) {
					userRegister(params)
						.then((res) => {
							let self = this;
							if (res.data.success) {
								setTimeout(function() {
									if (window.location.href.indexOf("register") > -1) {
										let _route = {
											name: self.$route.query.from,
											query: {}
										}
										for (var prop in self.$route.query) {
											if (prop !== 'from') {
												_route.query[prop] = self.$route.query[prop]
											}
										}
										self.$router.push(_route)
									} else {
										self.$emit('loginSuccess')
									}
								}, 1000)

							} else {
								Toast({
									message: res.data.msg,
									position: 'middle',
									duration: 2000
								})
							}
						})
						.catch((error) => {
							this.errorFunc(error);
						})
				} else {
					userResetPass(params)
						.then((res) => {
							if (res.data.success) {
								let params = {
									account_type: 0,
									mobile: this.mobile,
									password: this.password,
								}
								userLogin(params)
									.then((res) => {
										if (res.data.success) {
											Toast({
												message: '登录成功',
												position: 'middle',
												duration: 2000
											})
											let self = this;
											setTimeout(function() {
												if (window.location.href.indexOf("register") > -1) {
													let _route = {
														name: self.$route.query.from,
														query: {}
													}
													for (var prop in self.$route.query) {
														if (prop !== 'from') {
															_route.query[prop] = self.$route.query[prop]
														}
													}
													self.$router.push(_route)
												} else {
													self.$emit('loginSuccess')
												}
											}, 1000)
										} else {
											Toast({
												message: res.data.msg,
												position: 'middle',
												duration: 2000
											})
										}
									})
									.catch((error) => {
										this.errorFunc(error);
									})
							} else {
								Toast({
									message: res.data.msg,
									position: 'middle',
									duration: 2000
								})
							}
						})
						.catch((error) => {
							this.errorFunc(error);
						})
				}
			} else {
				Toast({
					message: '验证码或密码填写错误',
					position: 'middle',
					duration: 2000
				})
			}
		},
		// 用户协议
		userProPage() {
			window.location.href = 'http://www.babyfs.cn/service.html';
		},
		// 隐私协议
		privatePage() {
			window.location.href = 'http://www.babyfs.cn/privacy.html';
		},
		onInputFocus() {
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if (isAndroid) {
				this.$emit('inputFocus')
			}
		},
		onInputBlur() {
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if (isAndroid) {
				this.$emit('inputBlur')
			}
		}
	}
}
</script>
<style lang="less" scoped>
.outer {
    padding: 0.1px 0.93rem;
    .backLogin {
        color: #11cce4;
        text-align: left;
        margin: 0.64rem 0 0.27rem;
        img {
            width: 0.32rem;
            height: 0.21rem;
            margin-right: 0.16rem;
        }
    }
    .logo {
        img {
            width: 2.93rem;
            height: 3.33rem;
        }
        margin-bottom: 1.09rem;
        text-align: center;
    }
}
.warn {
    height: 0.37rem;
    line-height: 0.37rem;
    margin-bottom: 0.27rem;
    div {
        font-size: 0.36rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 0.35rem;
            margin-right: 0.13rem;
        }
        &:nth-child(1) {
            color: #FA6D6D;
        }
        &:nth-child(2) {
            color: #11cce4;
        }
    }
}
.inputTel {
    text-align: left;
    margin-bottom: 0.27rem;
    input {
        height: 1.2rem;
        background-color: #f5f5f5;
        border: none;
        outline: none;
        border-radius: 0.13rem;
        margin-bottom: 0.27rem;
        font-size: 0.37rem;
        text-indent: 0.37rem;
        &::-webkit-input-placeholder {
            color: #cccccc;
        }
    }
    > input {
        width: 100%;
    }
    p {
        input {
            width: 3.87rem;
        }
        i {
            margin-left: 0.17rem;
            font-size: 0.37rem;
            color: #11cce4;
            font-style: normal;
            cursor: pointer;
        }
    }

}
.next {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.4rem;
    height: 1.23rem;
    width: 3.89rem;
    border-radius: 1.33rem;
    background-image:  linear-gradient(-164deg, #2AF7DB 0%, #0FC8E5 100%);
    box-shadow: 0 .11rem .53rem 0 rgba(11,190,216,0.50);
}
.notice {
    text-align: center;
    color: #999;
    font-size: 0.32rem;
    line-height: .6rem;
    height: 1.6rem;
    margin-top: .53rem;
    span {
        color: #11cce4;
        cursor: pointer;
    }
}
</style>
