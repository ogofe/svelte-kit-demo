import GlobalStore from '../../../store';
import {useContext} from '../../../utils';


export function load({params}){
	const itemId = Number(params.itemId);
	const item = useContext(GlobalStore)
				.products
				.find(it => it.id === itemId)
	return {
		item
	}
}