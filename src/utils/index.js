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
	setTimeout(() => hideAlert(), 2000)
}

export function useContext(ctx){
	let data;
	ctx.subscribe(val => {data = val});
	return data;
}

function _changeState(oldValue, newState){
	oldValue = newState
	return oldValue
}

export function useState(initalState) {
	/*
		
	*/
	let value = initalState;
	function setter(newState){
		value = _changeState(value, newState)
		return [value, setter]
	}
	return [value, setter]
}

export function setContext(ctx, key, value){
	ctx.update(() => {
		return {
			...ctx,
			key: value
		}
	})
}
