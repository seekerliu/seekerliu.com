<template>
	<div class="road">
		<h1>封神之路</h1>
		
		<el-row type="flex" class="row-bg steps" justify="center">
		  <el-col :span="6">
		  	<el-steps :active="1" :space="120" direction="vertical">
			  <el-step title="蛰伏" :description="now"></el-step>
			  <el-step title="蜕变" :description="reborn"></el-step>
			  <el-step title="未来" :description="future"></el-step>
			</el-steps>
		  </el-col>
		</el-row>

		<ul class="links">
	      <li><router-link to="/">Home</router-link></li>
	    </ul>

	</div>
</template>

<script>
export default {
  data () {
    return {
      now: '2013.08.05 PHPer',
      reborn: '2018.01.01 全栈工程师',
      future: '2020.01.01 架构师'
    }
  }
}
</script>

<style>
.road {
	text-align: left;
}
.road h1 {
	text-align: center;
	margin-bottom: 50px;
}
.road .steps {
	margin-bottom:100px;
}

.road .steps .el-step__title {
	font-size: 18px;
}
.road .steps .el-step__description {
	font-size: 14px;
}
</style>