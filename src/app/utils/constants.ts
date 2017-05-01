export class Constantz {
	private minUsernameLenght: number;
	private maxUsernameLenght: number;
	private minPasswordLenght: number;
	private maxPasswordLenght: number;
	private avatarDefaultUrl: string;
	private collectionImageDefaultUrl: string;
	constructor() {
		this.minUsernameLenght = 3;
		this.maxUsernameLenght = 13;
		this.minPasswordLenght = 6;
		this.maxPasswordLenght = 36;
		this.avatarDefaultUrl = '../../assets/images/emptyProfile.jpg';
		this.collectionImageDefaultUrl = '../../assets/images/box-collection.jpg';
	}

	get MinUsernameLenght() {
		return this.minUsernameLenght;
	}

	get MaxUsernameLenght() {
		return this.maxUsernameLenght;
	}

	get MinPasswordLenght() {
		return this.minPasswordLenght;
	}

	get MaxPasswordLenght() {
		return this.maxPasswordLenght;
	}
	
	get AvatarDefaultUrl() {
		return this.avatarDefaultUrl;
	}

	get ImageDefaultUrl() {
		return this.collectionImageDefaultUrl;
	}
}
