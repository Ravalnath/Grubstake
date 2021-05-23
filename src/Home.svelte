<script>
import Icon from "svelte-awesome";
import { twitter } from "svelte-awesome/icons";
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
export let Auth;

function triggerLogin() {
	dispatch('login', {
		text: 'Triggered'
	});
}
</script>

<div class="columns gs-intro-container">
	<div class="column" style="margin:auto;">
		<div class="gs-intro-div">
			Earn <b class="gs-primary-color">money</b> while engaging with your
			favourite <b class="gs-secondary-color">#trends</b>
		</div>
		<div class="content">
			<ul>
				<li>
					Earn at the <b class="gs-secondary-color"
						>comfort of your home</b
					> or anywhere you like!
				</li>
				<li>
					<b>Sign Up</b> and Be a part of
					<b class="gs-primary-color">Grubstake community</b>
				</li>
			</ul>
		</div>
		{#if !Auth}
		<div class="gs-button-div">
			<button class="button is-link is-medium" on:click={triggerLogin}>
				<Icon data={twitter} scale="1.5" />&nbsp;Login with Twitter
			</button>
		</div>
		{/if}
	</div>
	<div class="column" style="margin:auto;">
		<div class="gs-intro-img-div">
			<img class="gs-intro-img" src="/Trend.svg" alt="Grubstake" />
		</div>
	</div>
</div>
