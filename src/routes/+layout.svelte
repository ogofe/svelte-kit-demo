<svelte:head>
	<link rel="stylesheet" type="text/css" href="/index.css">
</svelte:head>

<script type="text/javascript">
	import Navbar from '../components/Navbar.svelte';
	import Store from './store/+page.svelte';
	import GlobalStore from '../store';
	let store;
	GlobalStore.subscribe(val => {store = val});
</script>

<Navbar />

<div class="page">
	{#if store.notification.display}
		<div class="alert mb-2">
			<span> {store.notification.message} </span>
		</div>
	{/if}

	<slot> </slot>

</div>

<style type="text/css">
	.page{
		padding: 1.25rem;
	}

	.alert{
		background-color: teal;
		color:  #fff;
		font-size: 16px;
		padding: 15px;
		border-radius: 2px;
		position: fixed;
		top: 50px;
		z-index: 20;
		right: 10px;
		animation: fadeIn .5s forwards;
	}

	@keyframes fadeIn{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
</style>
