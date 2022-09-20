<script>
	import GlobalStore from '../../../store';
	import {notify, useContext, setContext} from '../../../utils';
	export let data; // data loading from '+page.js'
	
	// app state
	let 
	quantity = 1,
	loading=false,
	ctx = useContext(GlobalStore),
	cart = ctx.cart,
	item = data.item;

	function addToCart(){
		freezBuy()
		let cartItem = {
			id: cart.length + 1,
			item,
			quantity,
		}
		cart = [...cart, cartItem]
		GlobalStore.update((newValue) => {
			return {
				...ctx,
				cart
			}
		})
		notify("Item has been added to your cart")
	}

	// click rate limiting
	function freezBuy() {
		loading = true;
		setTimeout(() => loading = false, 1500)
	}

	function increase(){
		quantity += 1
	}

	function reduce(){
		if (quantity > 1) quantity -= 1
	}
</script>

<div>
	<h2 class="page-title"> {"Item Detail"} </h2>

	<div class="wrapper">
		<div class="image">
			<img alt={item.name} src={item.image} class="w-100">
		</div>

		<div class="details">
			<h2 class=""> {item.name} </h2>
			<h3 class=""> $ {item.price} </h3>
			<h3 class="">
			 {
			 		data.item.about || 
					` There is currently no description for this item. However, this is a
					 placeholder value that can be replaced at any time. Beware!
					`
			} </h3>

			<div>
				<div class="control mb-2">
					<button class="quantity-control" on:click={reduce}> &minus; </button>
					<input disabled type="number" class="input" name="quantity" bind:value={quantity}>
					<button class="quantity-control" on:click={increase}> &plus; </button>
				</div>

				<button on:click={addToCart} disabled={loading} class="cta"> {
					loading ? "Please Wait..." : "Add to cart"
				} </button>
			</div>
		</div>
	</div>
</div>

<style type="text/css">
	.control{
		display: flex;
	}

	.wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.input{
		padding: 12px;
		width: 100%;
		max-width: 100px;
	}

	.quantity-control{
		padding: 12px 16px;
		font-weight: 900;
	}

	.wrapper .image{
		width: 100%;
		max-width: 350px;
		height: 300px;
	}

	.wrapper .image img{
		width: 100%;
		height: 100%;
	}

	.wrapper .details{
		padding: 1.5rem;
		flex-grow: 1;
		width: 50%;
		max-width: 100%;
	}

	.cta{
		padding: 15px 20px;
		width: 100%;
		max-width: 250px;
		background-color: #05081fba;
		font-size: 17px;
		font-weight: 600;
		color: #fff;
		border: none;
		transition: .3s;
		border-radius: 3px;
	}

	.cta:disabled{
		background-color: #9e9e9e;
	}

	.btn:hover{
		opacity: .8;
	}
</style>