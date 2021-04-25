<!-- App.svelte -->
<script>
	import Icon from 'svelte-awesome';
	import {bullhorn, questionCircleO, twitter, envelopeO} from 'svelte-awesome/icons';
	import 'bulma/css/bulma.min.css';
	let mobile;
	const toggleNav = () =>{
		mobile = !mobile
	};
</script>

<style>
	.gs-navbar-shadow{
		box-shadow: 0 0 0.25rem 0 #ddd;
	}

	.gs-logo-div{
		padding: 0 1rem;
	}

	.navbar-item{
		text-decoration: none;
		align-items: center;
    	display: flex;
		color: rgba(0, 0, 0, 0.7);
	}

	.gs-intro-container{
		background: #F7F7FD;
		min-height: 30rem;
	}

	.gs-intro-div{
		font-size: 2rem;
    	text-align: center;
		margin-top: 2rem;
	}

	.gs-button-div{
		text-align: center;
    	margin-top: 2rem;
	}

	.gs-intro-img-div{
		padding: 2rem;
		text-align: center;
	}

	.gs-intro-img{
		max-height: 24rem;
	}
</style>

  <nav class="navbar is-fixed-top gs-navbar-shadow">
	<!--Logo-->
	<div class="navbar-brand">
		<a class="navbar-item gs-logo-div" href="/">
			<img src="/logo.svg" width="142" alt="Grubstake" height="28">
		</a>
		<a class="navbar-burger" class:is-active={mobile} id="burger" on:click={toggleNav}>
			<span></span>
			<span></span>
			<span></span>
		</a>
	</div>
	<!--Items-->
	<div class="navbar-menu" class:is-active={mobile} id="menu">
		<div class="navbar-end">
			<!--Item-->
			<a class="navbar-item" href="/" >
				<Icon data={bullhorn}/>&nbsp;Campaign
			</a>
			<!--Item-->
			<a class="navbar-item" href="/" >
				<Icon data={questionCircleO}/>&nbsp;FAQ
			</a>
			<!--Item-->
			<a class="navbar-item" href="/" >
				<Icon data={envelopeO}/>&nbsp;Contact Us
			</a>
			<!--Item-->
			<div class="navbar-item">
				<div class="field is-grouped">
					<p class="control">
						<button class="button is-link">
							Sign Up
						  </button>
					</p>
					<p class="control">
						<button class="button is-light">
							Log In
						  </button>						
					</p>
				</div>
			  </div>
		</div>  
	</div>
  </nav>

  <div class="columns gs-intro-container">
	  <div class="column" style="margin:auto;">
		  <div class="gs-intro-div">
				Earn <b style="color: #3273dc;">money</b> while engaging with your favourite 
				<b style="color: #f14668;">#trends</b>
		  </div>
		  <div class="gs-button-div">
			  <button class="button is-link is-medium"><Icon data={twitter} scale="1.5"/>&nbsp;Login with Twitter</button>
		  </div>
	  </div>
	  <div class="column" style="margin:auto;">
		  <div class="gs-intro-img-div">
			<img class="gs-intro-img" src="/Trend.svg" alt="Grubstake">
		  </div>
	  </div>
  	</div>