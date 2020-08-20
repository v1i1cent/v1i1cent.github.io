<template>
	<view class="home-container">
		<view class="home-top"></view>
		<view class="home-body">
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/grade.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>学业成绩</text>
			</view>
		</view>
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/jw.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>教务系统</text>
			</view>
		</view>
			<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/teach.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>评教系统</text>
			</view>
		</view>
		
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/cao.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>早操出勤</text>
			</view>
		</view>
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/card.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>打卡记录</text>
			</view>
		</view>
		
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/car.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>校车安排</text>
			</view>
		</view>
		
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/shiyan.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>实验系统</text>
			</view>
		</view>
		<view class="home-mode">
			<view class="home-img">
				<image src="../../static/images/tiyu.png" mode="" class="mode-img"></image>
			</view>
			<view class="home-text">
				<text>体育成绩</text>
			</view>
		</view>
		
		<view class="home-class">
			<view class="home-time">
				<text class="home-week">星期六</text>
			</view>
			<view class="course">
				<view class="home-course">第一节：大型数据库仓库</view>
				<view class="home-course">第三节：离散数学</view>
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
		
	}
	.home-top{
		width: 100%;
		height: 400rpx;
		background: url(../../static/images/colorful.jpg);
	}
	.home-container{
		/* flex布局 */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content:space-between;
		font-size: 28rpx;
	}
	.home-body{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content:space-between;
	}
	.home-mode{
		margin-left: 35rpx;
		margin-top: 40rpx;
		width: 150rpx;
		height: 120rpx;
		text-align: center;
	}
	.home-text{
		width: 150rpx;
		height: 50rpx;
		margin-top: 15rpx;
	}
	.home-img{
		width: 70rpx;
		height: 70rpx;
		margin-left: 40rpx;
	}
	.mode-img{
		width: 80rpx;
		height: 80rpx;
	}
	.home-class{
		margin-top: 35rpx;
		display: flex;
		flex-wrap:wrap;
		justify-content: center;
	}
	.home-time{
		width: 88%;
	}
	.home-course{
		width: 650rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		border: 1px solid  #40B2E4;
		margin-top: 15rpx;
	}
</style>
