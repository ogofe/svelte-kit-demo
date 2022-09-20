<script type="text/javascript">
	import CartItem from '/src/components/CartItem.svelte';
	import {useContext, notify} from '../../utils';
	import GlobalStore from '../../store';
	
	const ctx = useContext(GlobalStore);
	let 
	idx, 
	count, 
	cart = ctx.cart.reverse(),
	cartTotal = get_cart_total();

	function onRemove(id){
		idx = cart.findIndex(elem => elem.id === id)
		cart.splice(idx, 1)
		cart = cart.reverse()
		GlobalStore.update((val) => {
			return {
				...ctx,
				cart
			}
		})
		notify("Item was removed from your cart")
		cartTotal = get_cart_total()
	}

	function get_cart_total() {
		count = 0;
		// if (cart.length > 0){
		// 	cart.forEach(item => (count += item.quantity))
		// }
	}
</script>

<div class="container">
	
	<h2 class="w-100">Your Cart 
		{#if count < 1}
			is empty
		{:else}
			<span class="badge"> {count} </span>
		{/if}
	</h2>

	{#if cart.length > 0}
		{#each cart as item}
			<CartItem {item} {onRemove} />
		{/each}
	{/if}
</div>

<style type="text/css">

	.container{
		max-width: 900px;
		margin: auto;
	}
</style>
