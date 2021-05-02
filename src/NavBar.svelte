<script>
  import Icon from "svelte-awesome";
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import {
    bullhorn,
    questionCircleO,
    envelopeO,
    heart,
  } from "svelte-awesome/icons";
  import Campaign from "./Campaign.svelte";
  import { auth, twitterProvider } from './firebase';
  import { authState } from 'rxfire/auth';

  $: user = false;
  
  const unsubscribe = authState(auth).subscribe(u => {
    user = u;
    console.log(user);
  });
  function login() {
    auth.signInWithPopup(twitterProvider);
  }

  let mobile;
  let now = new Date(),
    month,
    day,
    year;
  let currentYear = now.getFullYear();

  const toggleNav = () => {
    mobile = !mobile;
  };
</script>

<Router>
  <header>
    <nav class="navbar is-fixed-top gs-navbar-shadow">
      <!--Logo-->
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <img src="/logo.svg" width="142" alt="Grubstake" height="28" />
        </Link>
        <a
          class="navbar-burger"
          class:is-active={mobile}
          id="burger"
          on:click={toggleNav}
        >
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
            <Icon data={questionCircleO} />&nbsp;FAQ
          </Link>
          <!--Item-->
          <Link class="navbar-item" to="/">
            <Icon data={envelopeO} />&nbsp;Contact Us
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
      <Home />
    </Route>
    <Route path="campaign" primary={false}>
      <Campaign />
    </Route>
  </main>
</Router>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      ©{currentYear} <strong style="color:#3273dc;">Grubstake</strong> All Rights
      Reserved
    </p>
  </div>
</footer>

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
