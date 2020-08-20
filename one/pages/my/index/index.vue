<template>
	<view class="my-container">
		<view class="my-one">
			<view class="qq-attar">点击获取</view>
			<view class="qq-name">单人🐟🐟担任大人</view>
		</view>
		<view class="mode">
		<!--  1 意见反馈模块 -->
		<view class="my">
			<view class="fun">
				<image src="../../../static/images/idea.png" class="allicon"></image>
			</view>
			<view class="text-show">意见反馈</view>
			<view class="my-right">
				<image class="right" src="../../../static/images/gright.png"></image>
			</view>
		</view>
		<view class="my">
			<view class="fun">
				<image src="../../../static/images/share.png" class="allicon"></image>
			</view>
			<view class="text-show">分享繁星</view>
			<view class="my-right">
				<image class="right" src="../../../static/images/gright.png"></image>
			</view>
		</view>
		<view class="my">
			<view class="fun">
				<image src="../../../static/images/about.png" class="allicon"></image>
			</view>
			<view class="text-show">关于繁星</view>
			<view class="my-right">
				<image class="right" src="../../../static/images/gright.png"></image>
			</view>
		</view>
		
		<view class="my">
			<view class="fun">
				<image src="../../../static/images/contact.png" class="allicon"></image>
			</view>
			<view class="text-show">联系客服</view>
			<view class="my-right">
				<image class="right" src="../../../static/images/gright.png"></image>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background:url(../../../static/air.jpg);
	}
	.my-container{
		font-size: 30rpx;
		text-align: center;
	}
	.my-one{
		display: flex;
		width: 100%;
		height: 250rpx;
		flex-wrap:nowrap;
		flex-direction:row;
		margin-top: 50rpx;
		
	}
	.qq-attar{
		text-align: center;
		width: 180rpx;
		height: 180rpx;
		line-height: 180rpx;
		border-radius: 180rpx;
		background-color: red;
		margin-left: 100rpx;
	}
	.qq-name{
		width: 500rpx;
		height: 180rpx;
		line-height: 180rpx;
		text-align: start;
		text-indent: 30rpx;
	}
	
	.my{
		width: 80%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		border: 1px solid #CCCCCC;
		margin-left: 10%;
		margin-top: 5%;
	}
	.text-show{
		width: 300rpx;
	}
	.fun{
		width: 50rpx;
		height: 50rpx;
		float: left;
	}
	.allicon{
		width: 50rpx;
		height: 50rpx;
		padding: 15rpx;
	}
	.my-right{
		width: 80rpx;
		height: 80rpx;
		float: right;
		margin-top: -80rpx;
		padding: 0;
	}
	.right{
		width: 50rpx;
		height: 50rpx;
		padding: 15rpx;
	}
	
</style>
