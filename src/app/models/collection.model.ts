import { CollectionMember } from './collection-member.model';

export class Collection {
	_id: string;
	owner: string;
	name: string;
	description: string;
	imageUrl: string;
	isProtected: boolean;
	isPrivate: boolean;
	creationDate: Date;
	members: CollectionMember[];
}
