<script>
    import Icon from "svelte-awesome";
    import { arrowRight } from "svelte-awesome/icons";
    import { encodeTweet } from './twitter-utils';

    export let buttonText, hashtags, name, rules, status, text, type, url, username, subType;
</script>


<div class="column" style="margin:auto;">
    <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <span class="tag is-info">{type}</span>
            {name}
          </p>
        <div class="card-header-icon" aria-label="more options">
            <div class="circle pulse" style="background:red;"></div>
            <div class="gs-campaign-status-text">{status}</div>
        </div>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
                {#each rules as rule}
                <li>{rule}</li>
                {/each}
            </ul>
          </div>
        </div>
        <footer class="card-footer">
            {#if type == 'Twitter' && subType =='create'}
                <button class="card-footer-item button is-info" on:click="{window.open(encodeTweet(text, url, hashtags, username), "_blank")}">
                    {buttonText}&nbsp;
                    <Icon data={arrowRight}/>
                </button>
            {:else}
                <button class="card-footer-item button is-info" on:click="{window.open(url, "_blank")}">
                    {buttonText}&nbsp;
                    <Icon data={arrowRight}/>
                </button>
            {/if}
        </footer>
      </div>
</div>
<style>
    .card-header {
        box-shadow: none;
    }

    .button.is-info {
        border-radius: 0rem;
    }

    .tag.is-info {
        margin: 0rem 0.2rem;
    }

    .card-content {
        padding-top: 0rem;
        min-height: 8rem;
    }

    .card-header-title {
        font-weight: 600;
        padding: 0.5rem;
    }

    .card-header-icon{
        padding: 0.5rem;
    }

    .content {
        justify-content: start;
    }

    .gs-campaign-status-text{
        font-size: 0.75rem;
        padding-left: 0.2rem;
    }
  </style>