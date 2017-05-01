import { Profile } from './profile.model';

export class User {
	userName: string;
	passWord: string;
	profile: Profile;
	creationDate: Date;
	isLogged: boolean;
}
