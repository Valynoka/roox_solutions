import axios from 'axios';

import { usersTypes } from "./usersTypes";

const baseApiUrl = 'https://jsonplaceholder.typicode.com/users';

const service = {
	getUsersData(): Promise<usersTypes[]>{
		return axios.get(`${baseApiUrl}`).then((response) => response.data);
	}
};

export default service;
