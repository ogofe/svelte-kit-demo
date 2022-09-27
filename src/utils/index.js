import GlobalStore from '../store';

export function notify(message){
	const state = useContext(GlobalStore)
	function showAlert(){
		GlobalStore.update((newValue) => {
			return {
				...state,
				notification:{
					message,
					display: true,
				}
			}
		})
	}

	function hideAlert(){
		GlobalStore.update((newValue) => {
			return {
				...state,
				notification:{
					message,
					display: false,
				}
			}
		})
	}

	showAlert();
	setTimeout(() => hideAlert(), 2500)
}

export function useContext(ctx){
	let data;
	ctx.subscribe(val => {data = val});
	return data;
}

export function setContext(ctx, key, value){
	// use as 
	// ctx = setContext(ctx, 'user', 'johndoe@gmail.com')
	ctx.update(() => {
		return {
			...ctx,
			key: value
		}
	})
}
