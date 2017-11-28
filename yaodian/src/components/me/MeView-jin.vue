<template>
	
	<div>
		<mt-header title="账户设置">
		  <router-link to="/MeView" slot="left">
		    <mt-button icon="back">微信</mt-button>
		    
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/me-jin-yao.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>购买时间  2015-12-15&nbsp;&nbsp;&nbsp;&nbsp;两个疗程</p>
				<span>药品疗程：<img src="../../assets/me/me-jin-jia.png" alt="" /></span>
			</div>
			<div class="me-jin-zong">
				<p>总价：<span>￥800.45</span></p>
				<a href="#">确认</a>
			</div>
		</div>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/me-jin-yao.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>购买时间  2015-12-15&nbsp;&nbsp;&nbsp;&nbsp;两个疗程</p>
				<span>药品疗程：<img src="../../assets/me/me-jin-jia.png" alt="" /></span>
			</div>
			<div class="me-jin-zong">
				<p>总价：<span>￥800.45</span></p>
				<a href="#">确认</a>
			</div>
		</div>
		<div class="me-jin">
			<div class='me-jin-m'>
				<img src="../../assets/me/me-jin-yao.png" alt="" />
				<h5>白云山伤风感冒胶囊</h5>
				<p>购买时间  2015-12-15&nbsp;&nbsp;&nbsp;&nbsp;两个疗程</p>
				<span>药品疗程：<img src="../../assets/me/me-jin-jia.png" alt="" /></span>
			</div>
			<div class="me-jin-zong">
				<p>总价：<span>￥800.45</span></p>
				<a href="#">确认</a>
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
			border-bottom:1px solid #e1e1e1;
			padding-bottom: 0.5rem;
			h5{
				display: inline-block;
				
				color: #000;
				margin-top:0.5rem;
			}
			p{
				font-size: 0.8rem;
				overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			}
			img{
				width: 40%;
				float: left;
				display: inline-block;
				padding: 0.3rem;
				
			}
			span{
				color: #999999;
				font-size: 0.85rem;
				img{
					width:5rem;
					float: right;
					margin-right:1.5rem;
					margin-top: -0.3rem;
				}
			}
		}
		.me-jin-zong{
			width: 90%;
			margin:0 auto;
			p{
				font-size: 1rem;
				color: #000;
				display: inline-block;
				margin-top: 0.3rem;
				span{
					color: #ff6b3d;
				}
			}
			a{
				padding: 0.3rem 0.5rem ;
				display: inline-block;
				background: #f08c34;
				color: #fff;
				border-radius: 0.75rem;
				float:right;
			}
		}	
	}
</style>