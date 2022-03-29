type UsersCompany = {
	"name": string,
	"catchPhrase": string,
	"bs": string,
};

type UsersGeo = {
	"lat": string,
	"lng": string,
};

type UsersAddress = {
	"street": string,
	"suite": string,
	"city": string,
	"zipcode": string,
	"geo": UsersGeo,
};

export type usersTypes = {
	"id": number,
	"name": string,
	"username": string,
	"email": string,
	"address": UsersAddress,
	"phone": string,
	"website": string,
	"company": UsersCompany,
};
