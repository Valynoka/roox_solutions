import React from 'react';

const Button = (props:any) => {
	//хотел сделать переиспользуемую кнопку, но что - то не могу догадаться, как
	//заставить ее работать с функцией onClick + есть проблема с any - не пойму,
	//как заставить передаваться именно строку
	return(
		<div>
			<button className={'button'}>{props.name}</button>
		</div>
	)
};

export default Button;
