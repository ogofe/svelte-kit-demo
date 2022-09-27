<script>
	import {useContext} from '../../utils';
	import GlobalStore from '../../store';
	import ProductCard from '../../components/ProductCard.svelte';
	
	let products = useContext(GlobalStore).products;
</script>

<div>
	<h2 class="page-title"> {"Storefront"} </h2>

	<div class="slider"></div>

	<div class="item-list">
		{#each products as item}
			<ProductCard {item} />
		{/each}
	</div>	
</div>

<style type="text/css">
	.slider{
		height: 250px;
		width: 100%;
		border-radius: 10px;
		background-color: lavender;
	}

	.item-list{
		margin: 10px 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}
</style>
