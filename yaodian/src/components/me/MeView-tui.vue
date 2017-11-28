<template>
	<div>
		<mt-header title="账户设置">
		  <router-link to="/MeView" slot="left">
		    <mt-button icon="back">微信</mt-button>
		    
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="me-tui-ma">
			<img src="../../assets/me/me-tui-ma.png" alt=""/>
			<p >邀请码：<span>2345</span></p>
		</div>
		<div class="me-tui-fei">
			<div class="me-tui-fei-m">
				<p><span class="mui-icon mui-icon-paperplane"></span>推荐地址</p>
				<div class="me-tui-fei-m-dizhi">
					<a href="#">http://123.56.102.141/hlc/webapp/index</a>
				</div>
			</div>
		</div>
		<a href="#" class="me-tui-footer">推荐</a>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.me-tui-ma{
		img{
			width: 80%;
			margin: 2.5rem auto;
			display: block;
		}
		p{
			text-align: center;
			font-size: 1rem;
		}
	}
	.me-tui-fei{
		.me-tui-fei-m{
			width: 90%;
			margin: 0 auto;
			.me-tui-fei-m-dizhi{
				border: 1px solid #dcdcdc;
				background: #eeeeee;
				padding: 0.5rem;
				border-radius: 0.5rem;
				a{
					font-size: 0.8rem;
					text-decoration:underline;
					display: block;
					text-align: left;
					margin-left: 0.5rem;
					letter-spacing:1px;
				}
			}
		}
	}
	.me-tui-footer{
		width: 90%;
		padding: 0.8rem 0;
		background: #f08c34;
		border-radius: 0.5rem;
		display: block;
		text-align: center;
		margin: 0.9rem auto;
		color: #fff;
	}
</style>