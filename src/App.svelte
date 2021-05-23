<!-- App.svelte -->
<script>
	import "bulma/css/bulma.min.css";
	import NavBar from "./NavBar.svelte";
  	let now = new Date(), month, day, year;
	let currentYear = now.getFullYear();
</script>

<NavBar />

<footer class="footer">
	<div class="content has-text-centered">
	  <p>
		©{currentYear} <strong style="color:#3273dc;">Grubstake</strong> All Rights Reserved
	  </p>
	</div>
  </footer>
