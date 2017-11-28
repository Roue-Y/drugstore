<template>
	<div class="box">
		<mt-header title="扫码购药">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="Con-user">
			<div class="user">
				<img src="../../assets/home/home-tou.png" alt="" />
				<div class="user-right">
					<p><span>范佳盈</span> 副主任医师</p>
					<p>中国人民解放军第四--医院</p>
				</div>
			</div>
		</div>
		<div class="kong"></div>
		<div class="Man">
			<div class="man">
				<div class="left">
					<p>姓名：<span>陸遠飛</span></p>
					<p>年齡：<span>35岁</span></p>
					<h6>住院时间：2015-01-06 15:22:02</h6>
					<h6>检查服务号：4389012</h6>
				</div>
				<div class="right">
					<p>性别：<span>男</span></p>
					<p>主治医生：<span>黄柳</span></p>
				</div>
			</div>
		</div>
		<div class="kong"></div>
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/home/banner.png"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/home/banner.png"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/home/banner.png"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="kong"></div>
		<div class="keli">
			<h4>风热感冒颗粒</h4>
			<p><span>￥28.50</span>￥25.00</p>
		</div>
		<div class="kong"></div>
		<div class="XQ">
			<div class="xq">
				<h5>药品详情</h5>
				<div>
					<p><span>药品名称</span>：风热感冒颗粒</p>
					<p><span>批准文号</span>：国药准字H20044623</p>
					<p><span>生产企业</span>：桓诚帮药集团有限公司</p>
					<p><span>规格</span>：10g*8袋</p>
					<p><span>性状</span>：风热感冒颗粒，疏风清热，利咽解毒。用于风热
						感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
						风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
						发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰</p>
				</div>
			</div>
		</div>
		<div class="kong"></div>
		<div class="goumai">
			<p><img src="../../assets/home/home-din.png" alt="" />去附近药店购买</p>
			<p><img src="../../assets/home/home-dian.png" alt="" />咨询厂家药剂师购买</p>
		</div>
		<div class="kong"></div>
		<div class="Lc">
			<h5>
				<span>药品疗程</span>
				<img src="../../assets/me/me-jin-jia.png" alt="" />
			</h5>
			<p>总价:<i>￥800.45</i> 折扣价:<span>￥600.45</span>
				<router-link to="/HomeViewCheng" tag="a" class="btn">确认购买</router-link>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang='less'>
.box{
	overflow: hidden;
}
.kong{
	background: #f5f5f5 !important;
	width: 100%;
	height: 15px;
}
.Con-user{
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #e1e1e1;
	.user{
		width: 90%;
		margin: 0 auto;
		overflow:hidden;
		padding:15px 0;
		img{
			float: left;
			width: 20%;
		}
		.user-right{
			float: right;
			width: 75%;
			margin-top: 20px;
			line-height: 25px;
			p{
				color: #626368;
				font-size: 14px;
				span{
					color: #000;
					font-size: 18px;
					font-weight: bold;
				}
			}
		}
	}
}
.Man{
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #e1e1e1;
	border-top: 1px solid #e1e1e1;
	line-height:25px;
	.man{
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		padding:20px 0;
		/*line-height:25px;*/
		/*padding: 15px 0;*/
		p{
			color: #333333;
			font-size: 14px;
			span{
				color: #f08c34;
			}
		}

		.left{
			float: left;
			width: 62%;
			h6{
				font-size: 14px ;
				color: #424242;
				line-height:25px;
			}
		}
		.right{
			float: right;
			width: 35%;
		}
	}
}
.banner{
		width: 100%;
		height:11rem;
		img{
			width: 100%;
			height: 11rem;
		}
}
.keli{
	width:100%;
	background: #fff;
	padding: 12px 10px;
	overflow: hidden;
	/*margin-bottom: 15px;*/
	h4{
		float: left;
		color: #333333;
		font-weight: 600;
		font-size: 18px;
	}
	p{
		float: right;
		margin-top: 8px;
		color: #ff6b3d;
		font-size: 18px;
		span{
			color: #c1c1c1;
			font-size: 16px;
			text-decoration: line-through;
		}
	}
}
.XQ{
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #e1e1e1;
	border-top: 1px solid #e1e1e1;
	.xq{
		width: 90%;
		margin: 0 auto;
		h5{
			border-bottom: 1px solid #e1e1e1;
			color: #333333;
			font-size: 18px;
			padding: 10px 0;
		}
		div{
			padding: 16px 0;
			p{
				line-height: 23px;
				color: #626368;
				font-size: 16px;
				span{
					color:#333333 ;
				}
			}
		}
	}
}
.goumai{
	width: 100%;
	background: #fff;
	border-top: 1px solid #e1e1e1;
	p{
		padding: 10px;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 0;
		color: #333333;
		font-size: 16px;
		img{
			width: 20px;
			margin-right: 8px;
		}
	}
}
.Lc{
	width: 100%;
	background: #fff;
	margin-bottom: 15px;
	border-top: 1px solid #e1e1e1;
	padding: 0 10px;
	h5{
		border-bottom: 1px solid #e1e1e1;
		overflow: hidden;
		padding: 10px 0;
		span{
			float: left;
			font-size: 18px;
			color: #333333;
		}
		img{
			float: right;
			width: 25%;
		}
	}
	p{
		font-size: 12px;
		color: #333333;
		padding: 12px 0;
		i{
			font-size: 14px;
			color: #ff6b3d;
			text-decoration: line-through;
			margin-right: 15px;
		}
		span{
			font-size: 14px;
			color: #ff6b3d;
		}
		.btn{
			color: #fff;
			font-size: 14px;
			padding: 5px 18px;
			background: #f08c34;
			border-radius: 20px;;
			float: right;
			margin-top: -0.3rem;
		}
	}
}
</style>