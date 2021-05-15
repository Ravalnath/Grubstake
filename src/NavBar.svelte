<script>
  import Icon from "svelte-awesome";
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import {bullhorn, questionCircle, lifeSaver} from "svelte-awesome/icons";
  import Campaign from "./Campaign.svelte";
  import { auth, twitterProvider } from './firebase';
  import { authState } from 'rxfire/auth';
  import { toast } from 'bulma-toast';
  $: user = false;
  let mobile;
  const unsubscribe = authState(auth).subscribe(u => { user = u});

  function login() {
    auth.signInWithPopup(twitterProvider).then(null,() => {
      toast({
        message: 'Twitter login has failed. Please try again.',
        type: 'is-danger is-light',
        position: 'top-center',
        dismissible: true,
        duration: 5000,
        animate: { in: 'fadeIn', out: 'fadeOut' },
      });
    });
  }

  const toggleNav = () => {
    mobile = !mobile;
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
</svelte:head>

<Router>
  <header>
    <nav class="navbar is-fixed-top gs-navbar-shadow">
      <!--Logo-->
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <img src="/logo.svg" width="142" alt="Grubstake" height="28" />
        </Link>
        <a class="navbar-burger" class:is-active={mobile} id="burger" on:click={toggleNav}>
          <span />
          <span />
          <span />
        </a>
      </div>
      <!--Items-->
      <div class="navbar-menu" class:is-active={mobile} id="menu">
        <div class="navbar-end">
          <!--Item-->
          <Link class="navbar-item" to="Campaign">
            <Icon data={bullhorn} />&nbsp;Campaign
          </Link>
          <!--Item-->
          <Link class="navbar-item" to="/">
            <Icon data={questionCircle} />&nbsp;FAQ
          </Link>
          <!--Item-->
          <Link class="navbar-item" to="/">
            <Icon data={lifeSaver} />&nbsp;Help
          </Link>
          <!--Item-->
          {#if user}
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button class="button is-static gs-user-pic">
                  
                  <figure class="image is-24x24">
                    <img class="is-rounded" src={user.photoURL} alt="profile pic"/>
                  </figure>
                  &nbsp;{user.displayName}
                </button>
              </p>
              <p class="control">
                <button on:click={ () => auth.signOut() } class="button is-light">
                  Logout
                </button>
              </p>
            </div>
          </div>
          {:else}
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-link" on:click={login}>
                    Sign Up
                  </button>
                </p>
                <p class="control">
                  <button class="button is-light" on:click={login}>
                    Log In
                  </button>
                </p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </nav>
  </header>

  <main>
    <Route path="/" primary={false}>
      <Home Auth={user} on:login={login} />
    </Route>
    <Route path="campaign" primary={false}>
      <Campaign />
    </Route>
  </main>
</Router>

<style>
  .gs-navbar-shadow {
    box-shadow: 0 0 0.25rem 0 #ddd;
  }

  .gs-user-pic{
    background: transparent !important;
    border-color: transparent !important;
}

  .navbar-item {
    text-decoration: none;
    align-items: center;
    display: flex;
    color: rgba(0, 0, 0, 0.7);
  }
</style>
