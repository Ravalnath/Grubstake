<script>
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import CampaignItem from './CampaignItem.svelte';
    import { startWith } from 'rxjs/operators';

    const query = db.collection('campaign').where('status', '==', 'Active');
    const campaigns = collectionData(query).pipe(startWith([]));
    export let Auth;
</script>

{#if !Auth}
<div class="columns gs-intro-container">
	<div class="column" style="margin:auto;">
        <div class="gs-intro-div">
			We are excited to have <b class="gs-primary-color">you</b> onboard!
			<br/><b class="gs-secondary-color">Sign In</b> to get started
		</div>
		<div class="content">
			<ul>
				<li>
					Discover <b class="gs-secondary-color">campaigns</b> that inspire you & align with your interests
				</li>
				<li>
                    Make the best use of your <b>time</b> on <b class="gs-primary-color">social media</b> platforms
				</li>
			</ul>
		</div>
	</div>
	<div class="column" style="margin:auto;">
		<div class="gs-intro-img-div">
			<img class="gs-intro-img" src="/Auth.svg" alt="Grubstake" />
		</div>
	</div>
</div>
{:else}
<div class="gs-intro-container">
    {#each $campaigns as campaign,  i}
        <div class="columns">
            <CampaignItem {...campaign}/>
        </div>
	{/each}
</div>
{/if}