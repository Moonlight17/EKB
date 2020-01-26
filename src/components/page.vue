<template>
	<div class="page">
		<div id="nav">
			<div id="nav_block">
				<div id="logotip" class="nav">
					<img id="logo" src="./img/logo.png">
				</div>
				<div id="brand" class="nav">
					<span>Надежное серце <br> вашего агрегата</span>
				</div>
				<div id="call" class="nav">
					<a class="call">Заказать звонок</a>
				</div>
			</div>
		</div>
		<div id="content_main">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
						<div class="col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div>
								<img src="./img/heart.png" alt="" srcset="">
							</div>
						</div>
						<div class="col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div>
								<h1>ЭЛДВИГ СПб - Надежное сердце твоего агрегата</h1>
							</div>
						</div>
						<div class="col-4 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div>
								<img src="./img/heart.png" alt="" srcset="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'page',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
	width: 90%;
	background-color: white;
	margin: 0 auto;
	padding-top: 10px;
}
#nav{
	position: fixed;
	top: 10px;
	width: 90%;
}
#nav #nav_block{
	position: relative;
}
.nav{
	display: table-cell;
	vertical-align: middle;
}
img#logo{
	margin: 0 auto;
    width: 67%;
}
#logotip{

}
#brand{
	width: 60%;
	/* height: 100%; */
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	color: darkgray;
}
#call{
	margin: 0 auto;
	position: absolute;
	top: 25%;
	right: 30px;
}
a.call{
	padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
	border: 1px solid blue;
	border-radius: 7px;
	float: right;
	transition-duration: .4s;
}
a.call:hover{
	background-color: #0095ff;
	border: 1px solid #0095ff;
	color: white;
}
div#content_main{
	margin-top: 283px;

}
#content_main div{
	margin: 0 auto;
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
