<template>
	<div>
		<mt-header title="医生档案">
		  <router-link to="/MeView" slot="left">
		    <mt-button icon="back">微信</mt-button>
		    
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<ul class="mui-table-view ge-header">
		    <li class="mui-table-view-cell ge-tou">
		        <a class="mui-navigate-right">头像<img src="../../assets/me/me-tou.png" alt="" class="ge-yitou"/></a>
		        
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">姓名<span>张大大</span></a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">昵称<span>二狗子</span></a>
		    </li>
		</ul>
		<ul class="mui-table-view ge-footer">
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">性别<span>男</span></a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right">出生年月<span>1989.12.12</span></a>
		    </li>
		</ul>
		<a href="#" class="footer">保存</a>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.ge-yitou{
		width: 3rem;
		float: right;
		margin-right: 1.5rem;
	}
	.mui-ios .mui-table-view-cell.ge-tou{
		
		a{
			line-height: 3rem;
			
		}
	}
	.mui-ios .mui-table-view-cell{
		a{
			span{
				float:right;
				color: #777777;	
				font-size: 0.85rem;
				margin-right: 1.5rem;
			}	
		}
	}
	.mui-table-view.ge-footer{
		margin-top: 0.7rem;
	}
	.mui-table-view.ge-header{
		margin-top: 0.7rem;
	}
	.footer{
		width: 90%;
		padding: 0.5rem 0;
		color: #fff;
		font-size: 0.85rem;
		border-radius: 0.5rem;
		text-align: center;
		display: block;
		background: #f08c34;
		margin: 0.5rem auto;
	}
</style>