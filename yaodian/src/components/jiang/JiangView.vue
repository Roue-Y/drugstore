<template>
	
	<div>
		<mt-header title="医生详情">
		  <router-link to="/HomeView" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">最新咨询</mt-tab-item>
		  <mt-tab-item id="2">健康专题</mt-tab-item>
		  <mt-tab-item id="3">个人收藏</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <div class="me-jin">
		    	<router-link to="JiangViewContent" tag="div" class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span>专题</span>
				</router-link>
			</div>
			<div class="me-jin">
				<div class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span class="jiang-green">推荐</span>
				</div>
			</div>
			<div class="me-jin">
		    	<router-link to="JiangViewContent" tag="div" class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span>专题</span>
				</router-link>
			</div>
			<div class="me-jin">
		    	<router-link to="JiangViewContent" tag="div" class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span>专题</span>
				</router-link>
			</div>
			
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		   <div class="me-jin">
				<div class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span class="jiang-ri">2015.1.15</span>
				</div>
			</div>
			<div class="me-jin">
				<div class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span class="jiang-ri">2015.1.15</span>
				</div>
			</div>
			<div class="me-jin">
				<div class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span class="jiang-ri">2015.1.15</span>
				</div>
			</div>
			<div class="me-jin">
				<div class='me-jin-m'>
					<img src="../../assets/jiang/jiang-yi.png" alt="" />
					<h5>乙肝的共识和误区(上)</h5>
					<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
					<span class="jiang-ri">2015.1.15</span>
				</div>
			</div>
			
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <img src="../../assets/jiang/jiang-mei.png" alt=""  class="jiang-tu"/>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				selected:"1"
			}
		}
	}
</script>

<style scoped lang="less">
	.me-jin{
		width:100%;
		margin-top: 0.3rem;
		
		
		.me-jin-m{
			width:90%;
			margin:0.5rem auto;
			border-bottom: 1px solid #d4dadc;
			padding-bottom: 0.5rem;
			h5{
				display:inline-block;
				color: #000;
				margin-bottom: 0.5rem;
				margin-left: -5rem;
				margin-top: -0.5rem;
				
			}
			p{
				font-size: 0.75rem;
				color: #626368;
			}
			img{
				width: 30%;
				float: left;
				display: inline-block;
				padding: 0.3rem 0.5rem;
				margin-top:1.5rem;
				
			}
			span{
				color: #fff;
				background: #f08c34;
				font-size: 0.75rem;
				float: right;
				text-align: center;
				margin-top: -1.5rem;
				border-radius: 0.3rem;
				padding: 0 0.5rem;
			}
			.jiang-green{
				background: #2AC845;
			}
			.jiang-ri{
				color: #8c8c8c;
				background: none;
				margin-top: -1rem;
			}
			
		}	
	}	
	.jiang-tu{
		width: 100%;
	}
</style>