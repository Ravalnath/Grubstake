<script>
    import Icon from 'svelte-awesome';
	import { Router, Route, Link } from 'svelte-navigator';
	import Home from './Home.svelte';
	import {bullhorn, questionCircleO, envelopeO} from 'svelte-awesome/icons';
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
</style>


<Router>
	<header>
      <nav class="navbar is-fixed-top gs-navbar-shadow">
        <!--Logo-->
        <div class="navbar-brand">
            <Link class="navbar-item gs-logo-div" to="/">
                <img src="/logo.svg" width="142" alt="Grubstake" height="28">
            </Link>
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
                <Link class="navbar-item" to="/">
                    <Icon data={bullhorn}/>&nbsp;Campaign
                </Link>
                <!--Item-->
                <Link class="navbar-item" to="/">
                    <Icon data={questionCircleO}/>&nbsp;FAQ
                </Link>
                <!--Item-->
                <Link class="navbar-item" to="/">
                    <Icon data={envelopeO}/>&nbsp;Contact Us
                </Link>
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
	</header>
  
	<main>
	  <Route path="/">
		<Home />
	  </Route>
	</main>
  </Router>
