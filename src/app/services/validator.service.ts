import { Injectable } from '@angular/core';
import { Constantz } from '../utils/constants';

@Injectable()
export class ValidatorService {

	constructor(private constantz: Constantz) { }

	stringLenghtNotInRange(value: string, min: number, max: number): boolean {
		if (value.length < min || value.length > max) {
			return true;
		}
		return false;
	}

	stringNotContainIllicitChars(value: string): boolean {
		for (let ch of value) {
			if (ch === '@' ||
				ch === '#' ||
				ch === '!' ||
				ch === '?') {
				return false;
			}
		}
		return true;
	}

	stringsNotSame(p: string, pC: string): boolean {
		if (p !== pC) {
			return true;
		}
		return false;
	}

	stringExistsInCollection(collection: string[], value: string) {
		if (collection.indexOf(value) !== -1) {
			return true;
		}
		return false;
	}

	// ====================================================================
	usernameNotInRange(username: string) {
		return this.stringLenghtNotInRange(
			username,
			this.constantz.MinUsernameLenght,
			this.constantz.MaxUsernameLenght);
	}
	
	passwordNotInRange(password: string) {
		return this.stringLenghtNotInRange(
			password,
			this.constantz.MinPasswordLenght,
			this.constantz.MaxPasswordLenght);
	}

	passwordsNotSame(password: string, passwordConfirm: string): boolean {
		return this.stringsNotSame(password, passwordConfirm);
	}
}
