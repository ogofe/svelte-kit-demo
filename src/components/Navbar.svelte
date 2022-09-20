<script type="text/javascript"></script>

<div>
	<nav class="navbar">
		<h4 class="brand"> Svelte - Com</h4>

		<ul class="nav">
			<li> <a class="nav-link" href="/"> Store </a> </li>
			<li> <a class="nav-link" href="/cart"> Cart </a> </li>
		</ul>
	</nav>
</div>

<style type="text/css">
	.brand{
		margin: 0px 10px;
		color: #fff;
	}
	.navbar{
		top: 0;
		padding: 5px;
		display: flex;
		position: sticky;
		align-items: center;
		background-color: #252e2e;
		justify-content: space-between;
	}

	.nav{
		list-style: none;
		display: flex;
		flex-grow: 1;
		padding: 0px;
		max-width: max-content;
	}

	.nav li{
		margin: 0px 5px;
	}

	.nav .nav-link{
		text-decoration: none;
		color: #fff;
		transition: .3s;
		font-weight: 600;
		padding: 10px 25px;
		border-radius: 3px;
	}
	.nav-link:hover{
		background-color: #80808054;
	}	
</style>
