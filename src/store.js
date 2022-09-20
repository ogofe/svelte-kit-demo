import {writable} from 'svelte/store';
import img from './sample.jpg';


export const GlobalStore = writable({
	products: [
	    {
	      id: 1,
	      name: 'Christian Dior TShirt',
	      price: 200.99,
	      image: img
	    },
	    {
	      id: 2,
	      name: 'Jordans 96',
	      price: 620.25,
	      image: img
	    },
	    {
	      id: 3,
	      name: 'Alven Cruella Jeans',
	      price: 120.00,
	      image: img
	    },
	    {
	      id: 4,
	      name: 'Jordans 96',
	      price: 620.25,
	      image: img
	    },
	    {
	      id: 5,
	      name: 'Christian Dior TShirt',
	      price: 200.99,
	      image: img
	    }],
	cart: [],
	notification: {
		display: false,
		message: null
	}
})

export default GlobalStore;