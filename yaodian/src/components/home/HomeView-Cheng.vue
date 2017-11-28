<template>
	
	<div>
		<mt-header title="购买成功">
		  		<router-link to="/HomeViewSao" slot="left">
		  		
		    		<mt-button icon="back">微信</mt-button>
		    
				</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<img src="../../assets/home/home-cheng.png" class="home-view-cheng"/>
		<p class="gou">购买成功</p>
		<a href="#" class="home-cheng-a">分享</a>
	</div>
	
</template>

<script>
</script>

<style scoped lang="less">
	.gou{
		font-size: 1.3rem;
		text-align: center;
		color: #646464;
	}
	.home-view-cheng{
		width: 100%;
	}
	.home-cheng-a{
		width: 90%;
		padding: 0.5rem 0;
		border-radius: 0.5rem;
		margin: 2rem auto;
		text-align: center;
		display: block;
		background: #f08c34;
		color: #fff;
	}
</style>