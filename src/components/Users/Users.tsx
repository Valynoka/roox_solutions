import React from 'react';
import usersStore from "../../store/userStore/usersStore";
import { observer } from 'mobx-react-lite';
import SuccessfulDown from "../SuccessfulDown/SuccessfulDown";
import Loader from "../Loader";
import Error from "../Error";
import './Users.scss';
import {Link} from "react-router-dom";




const Users = () => {
	const { loading, error, sortedUsers} = usersStore;

	if(loading){
		return <Loader/>
	}

	if(error){
		return <Error/>
	}

	return(
		<div className={'users'}>
			<Link to={'/'}/>
			<h1 className={'users__title'}>Список пользователей</h1>
			<ul className={'users__list'}>
				{sortedUsers.map((item)=>(
					<div className={'users__item'}>
						<li  key={item.id}>
							<p className={'users__text'}><span className={'users__attribute'}>ФИО:</span>{item.name}</p>
							<p className={'users__text'}><span className={'users__attribute'}>город:</span>{item.address.city}</p>
							<p className={'users__text'}><span className={'users__attribute'}>компания:</span>{item.company.name}</p>
						</li>
						<Link className={'users__link'} to={'UserProfile'}>Подробнее</Link>
					</div>
				))}
			</ul>
			<SuccessfulDown/>
		</div>
	)
};

export default observer(Users);
