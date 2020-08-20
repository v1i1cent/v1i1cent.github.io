<template>
	<view class="login-container">
	  <view class="top-container">
		<view class="icon">
			<image src="../../../static/images/star.jpg" mode="scaleToFill" class="star-container"></image>
		</view>
		<view class="title">
			<text>繁星课表</text>
		</view>
	  </view>
		<view class="form-container">
			<form class="form-list">
				<text class="school">江苏科技大学</text>
				<!-- 处理输入框登陆问题 -->
				<input type="text" focus="true" :value="user.account" @input="changeAccount" placeholder="输入账号" class="input-text" />
				<input type="text" focus="true" :value="user.pwd" @input="changePwd" placeholder="输入密码" password="true" class="input-pwd"/>
				<label class="radio">
					<radio checked="true"/><text class="secrit">繁星课表隐私协议</text>
				</label>
			</form>
			<form class="btn-list">
				<button size="mini"class="btn-login" @click="login">登陆</button>
				<button size="mini" class="btn-cancel" @click="cancel">取消</button>
			</form>
		</view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					account:"",
					pwd : ""
				}
			}
		},
		methods: {
			// 实现input框账号和密码的v-model的作用，input触发该函数
			changeAccount(e){
				this.user.account = e.detail.value;
			},
			changePwd(e){
				this.user.pwd = e.detail.value;
			},
			
			// 点击登陆按钮进行账号信息的校验
			login(){
				if(this.user.account==""){
					uni.showToast({
						"title":"学号",
						"content":"学号不能为空",
						"icon":"none",
					})
				}else{
				// 路由跳转
				uni.reLaunch({
					url:"../../class/index/index"
				})
				}
			},
			// 点击取消：清空填写的账号信息
			cancel(){
				this.user="";
			}
			
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
	}
	.login-container{
		width: 100%;
		height: 100%;
	}
	.top-container{
		text-align: center;
	}
	.icon{
		padding-top: 80rpx;
	}
	.star-container{
		width: 170rpx;
		height: 170rpx;
		border-radius: 170rpx;
	}
	.title{
		color: #40B4E5;
	}
	.form-container{
		padding-top: 80rpx;
		margin-left: 15%;
		font-size: 30rpx;
	}
	.input-text,.input-pwd{
		display: inline-block;
		height: 100rpx;
		width: 85%;
		border-bottom: 1px solid gray;
	}
	.school{
		margin: 0;
		padding: 0;
		color: black;
		font-size: 35rpx;
	}
	.radio{
		display: block;
	}
	.secrit{
		color: #40B2E4;
		font-size: 30rpx;
	}
	.btn-list{
		display: inline-block;
		margin-top: 49rpx;
	}
	.btn-login{
		display: inline-block;
		width: 150rpx;
		height: 70rpx;
		background-color: #40B4E5;
		color: white;
		margin-right: 170rpx;
	}
	.btn-cancel{
		display: inline-block;
		width: 150rpx;
		height: 70rpx;
		background-color: #CCCCFF;
		color: #FFFFFF;
	}
</style>
