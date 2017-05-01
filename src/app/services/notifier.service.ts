import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toastr';

@Injectable()
export class NotifierService {
	constructor(private notifier: ToasterService) { }

	wellcome(username: string) {
		return this.notifier.success(`Wellcome, ${username}!`, '', false, 2000);
	}

	itemAdded() {
		return this.notifier.success('Item added!', '', false, 2000);
	}

	itemEdited() {
		return this.notifier.success('Item edited!', '', false, 2000);
	}

	itemDeleted() {
		return this.notifier.warning('Item deleted!', '', false, 2000);
	}

	pleaseSignIn() {
		return this.notifier.warning('Sign in, please!', '', false, 2000);
	}

	collectionAdded() {
		return this.notifier.success('Success', 'Collection created!', false, 2000);
	}

	collectionAlreadyExists() {
		return this.notifier.error('Error', 'This collection already exists!', false, 2000);
	}

	passwordsNotSame() {
		return this.notifier.error('Error', 'Passwords are not the same!', false, 2000);
	}

	wrongUsernameOrPassword() {
		return this.notifier.error('Error', 'Wrong username or password!', false, 2000);
	}

	usernameNotInRange() {
		return this.notifier.error('Error', 'Username must be between 3 and 13 characters long!!', false, 2000);
	}

	passwordNotInRange() {
		return this.notifier.error('Error', 'Password must be between 6 and 36 characters long!!', false, 2000);
	}
}
