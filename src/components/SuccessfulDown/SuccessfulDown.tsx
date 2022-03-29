import React from 'react';
import {observer} from "mobx-react-lite";
import usersStore from "../../store/userStore/usersStore";
import './SuccessfulDown.scss';

const SuccessfulDown = () => {
	const { usersLength } = usersStore;
	return(
		<div className={'successfulDown'}>
			<p className={'successfulDown__mark'}>Найдено { usersLength } пользователей</p>
		</div>
	)
}

export default observer(SuccessfulDown);
