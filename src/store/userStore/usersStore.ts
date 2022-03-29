import {action, computed, makeAutoObservable} from 'mobx';
import service from './usersStore.service';
import {usersTypes} from './usersTypes';


class UsersStore {
	users: usersTypes[] = [];
	user: usersTypes[] = []
	sortedUsers: usersTypes[] = [];
	usersLength = this.users.length;
	error: boolean;
	loading: boolean;

	constructor () {
		makeAutoObservable (this, {
			setSortCity: action.bound,
			setSortName: action.bound,
		})
		this.loading = true;
		this.error = false;
		service
			.getUsersData ()
			.then ((response) => {
				this.users = response;
				this.user = this.users.slice(0,1);
				this.sortedUsers = this.users;
				this.usersLength = this.users.length;
				this.loading = false
			})
			.catch (() => {
				this.error = true;
			})
	}
	//Sort
	setSortCity () {
		this.sortedUsers = this.users.sort((a, b) => (a.address.city > b.address.city) ? 1 : -1)
	}
	setSortName () {
		this.sortedUsers = this.users.sort((a, b) => (a.name > b.name) ? 1 : -1)
	}



}

export default new UsersStore ();


// if (x.address.city < y.address.city) {
// 	return - 1;
// }
// if (x.address.city > y.address.city) {
// 	return 1;
// }
// return 0;
