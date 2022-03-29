import React, {useState} from 'react';
import useValidation from "../UseValidation";

const useInput = (initialValue:string | number, validations:any) =>{
	//Сделал кастомный хук, но пока не использовал его
	const [ value, setValue ] = useState(initialValue);
	const [ isDirty, setDirty ] = useState(false);
	const valid = useValidation(value, validations)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDirty(true)
	}
	return{
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	}
};

export default useInput;
