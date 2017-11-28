<template>
	<div>
		<mt-header title="我的关注">
		  <router-link to="/MeView" slot="left">
		    <mt-button icon="back">微信</mt-button>
		    
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/wo-ji-1.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
				<span>2015.5.12</span>
			</div>
		</div>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/wo-ji-2.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
				<span>2015.5.12</span>
			</div>
		</div>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/wo-ji-3.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
				<span>2015.5.12</span>
			</div>
		</div>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/wo-ji-4.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
				<span>2015.5.12</span>
			</div>
		</div>
	</div>
	
</template>

<script>
</script>

<style scoped lang="less">
	.me-jin{
		width:100%;
		background: #fff;
		margin-top: 0.3rem;
		border-bottom: 1px solid #e1e1e1;
		border-top: 1px solid #e1e1e1;
		.me-jin-m{
			width:90%;
			margin:0.5rem auto;
			h5{
				display: inline-block;
				color: #000;
				margin-top:0.5rem;
			}
			p{
				font-size: 0.75rem;
				
			}
			img{
				width: 30%;
				float: left;
				display: inline-block;
				padding: 0.3rem 0.5rem;
				
			}
			span{
				color: #999999;
				font-size: 0.75rem;
				float: right;
				margin-top: -1.9rem;
			}
		}	
	}	
</style>