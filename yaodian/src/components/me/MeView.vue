<template>
	
	<div>
		<mt-header fixed title="账户设置">
			
			<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
			
		</mt-header>
		
		<ul class="mui-table-view me-youtu">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../../assets/me/me-tou.png">
		            <div class="mui-media-body">
		                13920484929
		                <img src="../../assets/me/me-ma.png" alt="" class="me-img-ma"/>
		                <p class="mui-ellipsis">三聚药业</p>
		            </div>
		        </a>
		    </li>
		</ul>
		<ul class="mui-table-view me-wutu">
		        <router-link to="MeViewGe" class="me-tui-a mui-table-view-cell" tag="li">
		        
		            <a class="mui-navigate-right">
		            	<img src="../../assets/me/me-list-1.png" alt="" />
		            	个人信息
		                 	
		            </a>
		      
		        </router-link>
		        <router-link to="MeViewMo" class="me-tui-a mui-table-view-cell" tag="li">
		        
		            <a class="mui-navigate-right">
		            	<img src="../../assets/me/me-list-2.png" alt="" />
		            	我的关注
		                 	
		            </a>
		      
		        </router-link>
		        <router-link to="MeViewTui" class="me-tui-a mui-table-view-cell" tag="li">
		        
		            <a class="mui-navigate-right">
		            	<img src="../../assets/me/me-list-3.png" alt="" />
		            	推荐药店
		                 	
		            </a>
		      
		        </router-link>
		</ul>
		<ul class="mui-table-view me-wutu">
		        <router-link to="MeViewJin" class="me-tui-a mui-table-view-cell" tag="li">
		        
		            <a class="mui-navigate-right">
		            	<img src="../../assets/me/me-list-4.png" alt="" />
		            	进药申请
		                 	
		            </a>
		      
		        </router-link>
		        <li class="mui-table-view-cell">
		            <a class="mui-navigate-right">
		            	<img src="../../assets/me/me-list-5.png" alt="" />
		                 	设置
		            </a>
		        </li>
		        
		</ul>
	</div>
	
</template>

<script>
</script>

<style scoped lang="less">
	.mui-table-view.me-youtu{
		margin-top:55px;
	}
	.me-img-ma{
		float: right;
		width: 50px;
	}
	.me-wutu{
		margin-top: 0.5rem;
		li{
			a{
				font-size: 0.85rem;
				img{
					width: 20px;
					margin-right: 0.5rem;
					float: left;
				}
			}
		}
	}
	.me-tui-a{
		color: #000;
	}
</style>