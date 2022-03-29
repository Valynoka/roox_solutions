import React, {useEffect, useState} from 'react';

const useValidation = (value: string | number, validations:any) =>{
	const [ isEmpty, setEmpty ] = useState(true);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;
			}
		}
	},[value])
	return{
		isEmpty
	}
};

export default useValidation;
