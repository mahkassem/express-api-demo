export type User = {
	id: number;
	name: string;
};

let users: User[] = [
	{
		id: 1,
		name: "John Doe",
	},
	{
		id: 2,
		name: "Jane Doe",
	},
	{
		id: 3,
		name: "John Smith",
	},
];

export class UsersModel {
	static findAll(): Promise<User[]> {
		return Promise.resolve(users);
	}

	static find(id: number): Promise<User | undefined> {
		return Promise.resolve(users.find((user) => user.id === id));
	}

	static create(user: User): Promise<User> {
		users.push(user);
		return Promise.resolve(user);
	}
}
