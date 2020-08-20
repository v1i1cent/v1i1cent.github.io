<script>
	// import { Decrypt } from "public.js"
	// 在app.vue这个组件中不能编写视图元素
	// 作用：调用生命周期函数，配置全局样式；配置全局存储globalData;
	// 应用的生命周期函数仅可以在这个vue文件中监听
export default {
	// 当 uni-app 初始化完成时触发（全局只触发一次）
	onLaunch: function() {
		// var jiemi = this.Decrypt("jiami");
		// console.log("test AES解密" + jiemi);
	},
	// 当 uni-app 启动，或从后台进入前台显示
	onShow: function() {
		
	},
	// 当 uni-app 从前台进入后台
	onHide: function() {
		
	},
	// globalData是指的是一种简单的全局变量机制
	globalData:{
		message : "hahah",
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
page{
	/* background: url(static/images/bggg.jpg); */
}
</style>
