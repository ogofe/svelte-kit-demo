<script type="text/javascript">
	export let item;
</script>

<div class="list-item">
	<div class="card-header">
		<a href="/store/{item.id}" class="w-100">
			<img src={item.image} alt="{item.name}">
		</a>
	</div>
	<div class="card-body">
		<a href="/store/{item.id}">
			<h3 class="m-1">{item.name}</h3>
		</a>
		<p class="m-1">$ {item.price}</p>
	</div>
</div>

<style type="text/css">
	.card-header{
		height: 170px;
		width: 100%;
	}

	a{
		text-decoration: none;
		color: inherit;
	}

	.card-header img{
		width: 100%;
		height: 100%;
		border-radius: 5px 5px 0 0;
	}

	.list-item{
		box-shadow: 10px 10px #80808030;
		width: 100%;
		max-width: 300px;
		margin: 10px 10px;
		border-radius: 3px;
		background-color: #fbfbfbf5;
	}

	.card-body{
		padding: 10px;
	}
</style>