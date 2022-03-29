import React, {useState} from 'react';
import usersStore from "../../store/userStore/usersStore";
import './UserProfile.scss';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import Loader from "../Loader";


const UserProfile = () => {
	//надо подумать, как не обрезать входящий массив, а сделать так, чтобы при переходе,
	//передавался тот массив, который был частично подгружен в карточку из которой перешли
	const { user } = usersStore;
	//хуки для управления input
	const [ name, setName ] = useState<string>();
	const [ userName, setUserName ] = useState<string>();
	const [ email, setEmail ] = useState<string | number>();
	const [ street, setStreet ] = useState<string>();
	const [ city, setCity ] = useState<string>();
	const [ zipcode, setZipcode ] = useState<string>();
	const [ phone, setPhone ] = useState<number>();
	const [ website, setWebsite ] = useState<string | number>();
	const [ comment, setComment ] = useState<string | number>();
	//хук для кнопки редактирования
	const [ edit, setEdit ] = useState(true);
	//хук для изменения цвета кнопки Отправить
	const [ colorButton, setColorButton ] = useState('');
	//хук для изменения цвета текста полей input
	const [ colorInput, setColorInput ] = useState('');
	//хуки для управления required
	const [ requiredName, setRequiredName ] = useState(false);
	const [ requiredUserName, setRequiredUserName ] = useState(false);
	const [ requiredEmail, setRequiredEmail ] = useState(false);
	const [ requiredStreet, setRequiredStreet ] = useState(false);
	const [ requiredCity, setRequiredCity ] = useState(false);
	const [ requiredZipcode, setRequiredZipcode ] = useState(false);
	const [ requiredPhone, setRequiredPhone ] = useState(false);
	const [ requiredWebsite, setRequiredWebsite ] = useState(false);

	const SubmitForm=(e:React.FormEvent<HTMLFormElement>)=> {
		e.preventDefault ()
		const data = {name, userName, email, street, city, zipcode, phone, website, comment};
		const allData = JSON.stringify (data);
		console.log (allData);

		if (!data.name) {
			setRequiredName (true)
		} else {
			setRequiredName (false)
		}

		if (!data.userName) {
			setRequiredUserName (true);
		} else {
			setRequiredUserName (false)
		}

		if (!data.email) {
			setRequiredEmail (true);
		} else {
			setRequiredEmail (false)
		}

		if (!data.street) {
			setRequiredStreet (true);
		} else {
			setRequiredStreet (false)
		}

		if (!data.city) {
			setRequiredCity (true);
		} else {
			setRequiredCity (false)
		}

		if (!data.zipcode) {
			setRequiredZipcode (true);
		} else {
			setRequiredZipcode (false)
		}

		if (!data.phone) {
			setRequiredPhone (true);
		} else {
			setRequiredPhone (false)
		}

		if (!data.website) {
			setRequiredWebsite (true);
		} else {
			setRequiredWebsite (false)
		}
	}

	if (!user) {
		return <Loader/>;
	}

	return(
		<div className={'userProfile__wrapper'}>
			<div className={'userProfile__top'}>
				{/*обернул в div, чтобы удобно было расположить элементы*/}
				<h3 className={'userProfile__title'}>Профиль пользователя</h3>
				<button className={'userProfile__button'}
						onClick={() => {setEdit(false ); setColorButton('#52CF4F'); setColorInput('black')} }
				>Редактировать
				</button>
			</div>
			{user.map((item) => (
				<form className={'userProfile__form'} onSubmit={SubmitForm} key={item.id}>
					{/*тоже сделал обертку, чтобы сделать так как на макете*/}
					<div className={'userProfile__form_wrapper'}>
						<label className={'userProfile__label'}>Name
							<input
								required={requiredName}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								// placeholder={item.name}
								defaultValue={ name || item.name}
								// value = {name === item.name}
								onChange={(e) =>setName(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>User Name
							<input
								required={requiredUserName}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.username || userName}
								onChange={(e) =>setUserName(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>Email
							<input
								required={requiredEmail}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.email || email}
								onChange={(e) =>setEmail(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>Street
							<input
								required={requiredStreet}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.address.street || street}
								onChange={(e) =>setStreet(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>City
							<input
								required={requiredCity}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.address.city || city}
								onChange={(e) =>setCity(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>Zip code
							<input
								required={requiredZipcode}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.address.zipcode || zipcode}
								onChange={(e) =>setZipcode(e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>Phone
							<input
								required={requiredPhone}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.phone || phone}
								onChange={(e) =>setPhone(parseInt(e.target.value))}
							/>
						</label>
						<label className={'userProfile__label'}>Website
							<input
								required={requiredWebsite}
								style={{color:colorInput}}
								className={'userProfile__input'}
								readOnly={edit}
								defaultValue={item.website || website}
								onChange={(e) => setWebsite (e.target.value)}
							/>
						</label>
						<label className={'userProfile__label'}>Comment
							<textarea
								className={'userProfile__textarea'}
								readOnly={edit}
								value={comment}
								onChange={(e) =>setComment(e.target.value)}
							/>
						</label>
					</div>
					<div className={'userProfile__send_wrapper'}>
						<input
							style={{background:colorButton}}
							className={'userProfile__send_button'}
							readOnly={edit}
							type="submit"
							value="Отправить"/>
					</div>
				</form>
			))}
			<Link to={'UserProfile'}/>
		</div>
)};
export default observer(UserProfile);
