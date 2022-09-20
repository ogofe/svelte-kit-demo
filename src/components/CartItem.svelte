<script type="text/javascript">
	export let item, onRemove;
</script>

<div class="item">
	<div class="wrapper">
		<div class="image">
			<img alt="product" src={item.item.image} />
		</div>

		<button class="cta-remove" on:click={onRemove(item.id)}> Remove </button>
	</div>

	<div>
		<p> <span>(x{item.quantity})</span> {item.item.name}  </p>
		<p>Sub Total: ${item.item.price * item.quantity}  </p>
	</div>	
</div>

<style type="text/css">
	.item{
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-top: 1px solid black;
		padding:  10px;
	}

	.item p{
		margin-bottom: 0px;
	}

	.item:last-child{
		border-bottom: 1px solid black;
	}

	.wrapper{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.image{
		width: 70px;
		height: 70px;
		border: 1px solid black;
	}

	.image img{
		width: 100%;
		height: 100%;
	}

	.cta-remove{
		padding: 10px;
		background-color: #263238;
		color: #fff;
		border-radius: 5px;
		border: none;
	}

	button:hover{
		opacity: .79;
	}
</style>
