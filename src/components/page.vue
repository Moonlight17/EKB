<template>
  <div class="page">
	<div id="nav">
	  <div id="nav_block">
		<div id="logotip" class="nav">
		  <img id="logo" src="./img/logo.png" />
		</div>
		<div id="brand" class="nav">
		  <span>
			Надежное серце
			<br />вашего агрегата
		  </span>
		</div>
		<div id="call" class="nav">
		  <a class="call">Заказать звонок</a>
		</div>
	  </div>
	</div>
	<div id="content_main">
	  <img id="main" src="./img/main.png" alt srcset />
	</div>
	<div id="item" class="row">
	  <div class="series">
		<h1>Серия АВРМ</h1>
	  <!-- </div>
	  <div > -->
		<ul class="slides">
			<li class="col-md-3 col-sm-4 col-xs-6" style="float: left; display: block;">
			<div class="item" id="bx_3218110189_155" style="opacity: 1; height: 403px;">
				<div class="inner-wrap">
				<div class="image shine">
					<img src="./img/item.png" alt="АВРМ-132" title="АВРМ-132" />
				</div>
				<div class="text">
					<div class="cont" style="height: 52px;">
					<div class="title" style="height: 22px;">
						<span id="name">АВРМ-132</span>
					</div>
					</div>
				</div>
				</div>
			</div>
			</li>
			<li class="col-md-3 col-sm-4 col-xs-6" style="float: left; display: block;">
			<div class="item" id="bx_3218110189_155" style="opacity: 1; height: 403px;">
				<div class="inner-wrap">
				<div class="image shine">
					<img src="./img/item.png" alt="АВРМ-160" title="АВРМ-160" />
				</div>
				<div class="text">
					<div class="cont" style="height: 52px;">
					<div class="title" style="height: 22px;">
						<span id="name">АВРМ-160</span>
					</div>
					</div>
				</div>
				</div>
			</div>
			</li>
			<li class="col-md-3 col-sm-4 col-xs-6" style="float: left; display: block;">
			<div class="item" id="bx_3218110189_155" style="opacity: 1; height: 403px;">
				<div class="inner-wrap">
				<div class="image shine">
					<img src="./img/item.png" alt="АВРМ-200" title="АВРМ-200" />
				</div>
				<div class="text">
					<div class="cont" style="height: 52px;">
					<div class="title" style="height: 22px;">
						<span id="name">АВРМ-200</span>
					</div>
					</div>
				</div>
				</div>
			</div>
			</li>
			<li class="col-md-3 col-sm-4 col-xs-6" style="float: left; display: block;">
			<div class="item" id="bx_3218110189_155" style="opacity: 1; height: 403px;">
				<div class="inner-wrap">
				<div class="image shine">
					<img src="./img/item.png" alt="АВРМ-280" title="АВРМ-280" />
				</div>
				<div class="text">
					<div class="cont" style="height: 52px;">
					<div class="title" style="height: 22px;">
						<span id="name">АВРМ-280</span>
					</div>
					</div>
				</div>
				</div>
			</div>
			</li>
		</ul>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  name: "page",
  props: {
	msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  width: 90%;
  background-color: white;
  margin: 0 auto;
  padding-top: 10px;
}
#nav {
  position: fixed;
  top: 0;
  padding-top: 10px;
  width: 90%;
  background-color: white;
}
#nav #nav_block {
  position: relative;
}
.nav {
  display: table-cell;
  vertical-align: middle;
}
img#logo {
  margin: 0 auto;
  width: 67%;
}
#logotip {
}
#brand {
  width: 60%;
  /* height: 100%; */
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: darkgray;
}
#call {
  margin: 0 auto;
  position: absolute;
  top: 25%;
  right: 30px;
}
a.call {
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid blue;
  border-radius: 7px;
  float: right;
  transition-duration: 0.4s;
}
a.call:hover {
  background-color: #0095ff;
  border: 1px solid #0095ff;
  color: white;
}
div#content_main {
  margin-top: 283px;
  text-align: center;
}
div#content_main img#main {
  width: 80%;
}
#item .series{
  margin: 0 auto;
  margin-top: 20%;
}
#item .series h1, #item .series .text{
  text-align: center;
}
#item .series .text{
	
	font-weight: bold;
}
/* 
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
*/
</style>
