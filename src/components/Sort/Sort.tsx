import React from 'react';
import './Sort.scss';
import usersStore from "../../store/userStore/usersStore";
import {observer} from "mobx-react-lite";



const Sort = () => {
	const { setSortCity, setSortName} = usersStore;

	return(
		<div className={'sort'}>
			<h2 className={'sort__title'}>Сортировка</h2>
			<button className={'sort__button'} onClick={setSortCity}>по городу</button>
			<button className={'sort__button'} onClick={setSortName}>по компании</button>
		</div>
	)
};

export default observer(Sort);
