<template>

	<div id="box">
		<mt-header fixed title="销售记录"><mt-button slot="right"><span class="mui-icon mui-icon mui-icon-plusempty home-icon"  @click="home()"></span></mt-button></mt-header>
		<ul class="home-yin" v-show="bool">
			<li><router-link to="/HomeViewSao" tag="a"><img src="../../assets/home/home-sao.png" alt="" />扫码家药店</router-link></li>
			<li><a href="#"><img src="../../assets/home/home-ren.png" alt="" />输入医生邀请码</a></li>
		</ul>
		<mt-swipe :auto="4000" class="home-swipe">
		  <mt-swipe-item><img src="../../assets/home/banner.png" alt="" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/home/banner.png" alt="" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/home/banner.png" alt="" /></mt-swipe-item>
		</mt-swipe>
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">内容</mt-tab-item>
		  <mt-tab-item id="2">历史</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <ul class="mui-table-view">
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/huangjiao.png">
		                <div class="mui-media-body">
		                    周四&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis huang"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周三&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周二&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		         <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周一&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <ul class="mui-table-view">
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周日&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周六&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		        <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周五&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		         <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周四&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		         <li class="mui-table-view-cell mui-media">
		            <a href="javascript:;">
		                <img class="mui-media-object mui-pull-left" src="../../assets/home/jiaonang.png">
		                <div class="mui-media-body">
		                    周三&nbsp;&nbsp;&nbsp;2015.6.23
		                    <p class="mui-ellipsis"></p>
		                    <a class="mui-navigate-right"></a>
		                </div>
		            </a>
		        </li>
		    </ul>
		  </mt-tab-container-item>
		  
		</mt-tab-container>
		
		<mt-tabbar v-model="Selected" fixed>
		  <mt-tab-item id="tab1">
		    
		    <router-link to="/HomeView" class="home-wode">
		    	<span class="mui-icon mui-icon-home"></span><br>
		   	 首页</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="tab2">
		  	<router-link to="/JiangView" class="home-footer">
		    	<span class="mui-icon iconfont icon-book"></span><br>
		            讲堂</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="tab3">
		  	<router-link to="/MeView">
		    	<span class="mui-icon mui-icon-person"></span><br>
		   	 我的</router-link>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
	
</template>

<script>
	export default{
		
		data(){
			return{
				selected:'1',
				Selected:"tab1",
				bool:false
			}
		},
		methods:{
			home:function(){
				if(this.bool==false){
					this.bool=true
				}else{
					this.bool=false
				}
				console.log(this.bool);
			}
		}
		
	}
</script>

<style scoped lang="less">
	.home-swipe{
		width: 100%;
		height:230px;
		margin-top: 40px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.home-yin{
		position: absolute;
		right: 0.5rem;
		top: 30px;
		z-index: 99;
		background: #fff;
		list-style: none;
		padding:0.3rem;
		border-radius: 0.3rem;

		li{
			color: #333333;
			font-size: 0.85rem;
			padding: 0.2rem;
			margin-right: 0.5rem;
			padding-top:0.3rem;
			box-sizing: border-box;
			a{
				color:#333333;
				img{
					width: 35px;
					height: 15px;
				}
			}
		}
	}
	.mui-table-view-cell p{
		width:80%;
		padding: 0.2rem 0;
		background: #cdcdcd;
		border-radius: 0.5rem;
		margin-top: 0.3rem;
	}	
	.mui-navigate-right:after, .mui-push-right:after{
		margin-top: 0.3rem;
	}
	.mui-navigate-right:after, .mui-push-right:before{
		content: "30盒   >";
		font-size: 0.75rem;
	}
	
	.mint-tab-container{
		margin-bottom: 50px;
		margin-top: 0.5rem;
	}
	.mui-ellipsis.huang{
		background: #ff6b3d;
		width: 30%;
	}
	.mint-tab-item-label{
		a{
			color:#999999;
			span{
				color: #999999;
				margin-bottom: 0.4rem;
			}
		}
	}
	.mint-tab-item-label{
		.home-wode{
			color: #007AFF;
			span{
				color: #007AFF;
				margin-bottom: 0.4rem;
			}
		}
	}
	
</style>