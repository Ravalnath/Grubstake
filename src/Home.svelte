<script>
    import Icon from 'svelte-awesome';
	import {twitter} from 'svelte-awesome/icons';
</script>

<style>
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

	.gs-primary-color{
		color: #3273dc;
	}

	.gs-secondary-color{
		color: #f14668;
	}

	.content{
		display: flex;
    	justify-content: center;
	}
</style>

<div class="columns gs-intro-container">
    <div class="column" style="margin:auto;">
        <div class="gs-intro-div">
              Earn <b class="gs-primary-color">money</b> while engaging with your favourite 
              <b class="gs-secondary-color">#trends</b>
        </div>
        <div class="content">
            <ul>
                <li>Earn at the <b class="gs-secondary-color">comfort of your home</b> or anywhere you like!</li>
                <li><b>Sign Up</b> and Be a part of <b class="gs-primary-color">Grubstake community</b></li>
            </ul>
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