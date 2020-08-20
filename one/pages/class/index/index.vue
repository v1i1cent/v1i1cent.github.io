<template>
    <view class="content">
		<!-- 显示当前周 -->
		<view class="top-header">
			<view class="detail-weeks" @click="showMask">
				第{{time}}周<image :src="down" class="up-down"></image>
			</view>
			<view class="term">
				{{term}}
			</view>
			<!-- 遮挡层 -->
			<view class="mask-container" v-if="show">
			</view>
			<!-- 底端选择周数 -->
			<view class="mask" v-if="show">
				<picker-view indicator-style="height: 50px;" :value="value" @change="bindChange">
					<picker-view-column class="pick-view">
						<!-- 渲染周数 -->
						<view class="list" v-for="(item,index) in list" :key="index">
							{{item}}
						</view>
					</picker-view-column>
				</picker-view>
			</view>
			
			<!-- 课表主界面 -->
			<view class="table-container">
				<!-- 第一行周几的显示 -->
				<view class="weekday">
					<view class="weeks month">8月</view>
					<view class="weeks days current">周一</view>
					<view class="weeks days">周二</view>
					<view class="weeks days">周三</view>
					<view class="weeks days">周四</view>
					<view class="weeks days">周五</view>
					<view class="weeks days">周六</view>
					<view class="weeks days">周天</view>
				</view>
			</view>
			</view>
			
			<view class="everyday-class">
			  <view class="total">
				<view class="detail">1</view>
				<view class="jie-times">08:00</view>
				<view class="jie-times">09:30</view>
			  </view>
			  <view class="total">
				<view class="detail">2</view>
				<view class="jie-times">09:50</view>
				<view class="jie-times">11:25</view>
			  </view>
			  <view class="total">
				<view class="detail">3</view>
				<view class="jie-times">14:30</view>
				<view class="jie-times">16:05</view>
			  </view>
			  <view class="total">
				<view class="detail">4</view>
				<view class="jie-times">16:20</view>
				<view class="jie-times">17:55</view>
			  </view>
			  <view class="total">
				<view class="detail">5</view>
				<view class="jie-times">19:00</view>
				<view class="jie-times">20:30</view>
			  </view>
			  <view class="total">
			  	<view class="detail">6</view>
			  	<view class="jie-times">20:15</view>
			  	<view class="jie-times">21:35</view>
			  </view>
			</view>
		</view>
       
    </view>
</template>

<script>
	export default {
		data(){
			return{
				time:"一",
				show:false,
				down :"../../../static/images/down.png",
				value :[
					0
				],
				list:[
					"第一周","第二周","第三周","第四周","第五周","第六周","第七周"
				],
				term:"大四 第1学期",
			}
		},
		methods:{
			showMask(){
				this.show = !this.show;
				if(this.show==true){
					this.down = "../../../static/images/up.png";
				}else{
					this.down = "../../../static/images/down.png";
				}
			},
			bindChange(){
				console.log("改变了");
			}
		}
	}
</script>

<style>
	page{
		background: url(../../../static/images/class.jpg);
	}
	.content{
		height: 100%;
		width: 100%;
	}
	.top-header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 215rpx;
		overflow: hidden;
		z-index: 1000;
		background-color: #CEE3F6;
	}
	.detail-weeks{
		text-align: center;
		width: 100%;
		/* margin-left: 38%; */
		height: 60rpx;
		line-height: 60rpx;
		font-size: 40rpx;
	}
	.term{
		margin-left: 38%;
		font-size: 28rpx;
		width: 24%;
	}
	.up-down{
		width: 40rpx;
		height: 40rpx;
		line-height: 50rpx;
	}
	.mask-container{
		width: 100%;
		height: 240rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.mask{
		width: 100%;
		height: 240rpx;
		z-index: 100;
		position: fixed;
		bottom: 0;
	}
	.pick-view{
		text-align: center;
		width: 100%;
        height: 240rpx;
		line-height: 80rpx;
		 text-overflow: hidden;
		font-size: 40rpx;
	}
	.weekday{
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
		text-align: center;
		font-size: 32rpx;
	}
	.days{
		margin-top: 20rpx;
		/* text-align: center; */
		width: 86rpx;
		height: 90rpx;
		line-height: 90rpx;
		background-color: #FFFFFF;
		margin-left: 8rpx;
		border-radius: 10rpx;
	}
	.month{
		display: inline-block;
		width: 80rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		font-size: 28rpx;
		margin-top: 20rpx;
	}
	.current{
		background-color: #CCCCFF;
	}
	.everyday-class{
		width: 40rpx;
		padding-left: 10rpx;
		margin-top: 220rpx;
	}
	
	.total{
		width: 80rpx;
		line-height: 80rpx;
		vertical-align: middle;
		height: 200rpx;
		background-color: #4CD964;
		}
	.detail{
		text-align: center;
		width: 80rpx;
		/* height: 40rpx; */
		margin-top: 15rpx;
		font-size: 32rpx;
	}
	.jie-times{
		text-align: center;
		width: 80rpx;
		height: 40rpx;
		font-size: 28rpx;
	}
</style>