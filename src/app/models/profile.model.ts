import { Collection } from './collection.model';

export class Profile {
	firstName: string;
	lastName: string;
	imageUrl: string;
	bgImageUrl: string;
	location: string;
	eMail: string;
	collectionsCount: number;
	collections: Collection[];
}
