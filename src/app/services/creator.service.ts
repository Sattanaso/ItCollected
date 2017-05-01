import { Injectable } from '@angular/core';

import { User } from './../models/user.model';
import { Profile } from './../models/profile.model';
import { Collection } from './../models/collection.model';
import { CollectionMember } from './../models/collection-member.model';

import { Constantz } from '../utils/constants';

@Injectable()
export class CreatorService {
  constructor(private constz: Constantz) { }

  createUser(username: string, image: string, hashedPassword: string, email: string) {
    const profile = new Profile();

    profile.eMail = email;
    profile.collections = [];
    profile.imageUrl = image || this.constz.AvatarDefaultUrl;

    const user = new User();

    user.creationDate = new Date();
    user.userName = username;
    user.passWord = hashedPassword;
    user.profile = profile;
    return user;
  }

  createCollection(username: string) {
    const collection = new Collection();

    collection.imageUrl = this.constz.ImageDefaultUrl;
    collection.owner = username;
    collection.creationDate = new Date();
    collection.isProtected = true;
    collection.isPrivate = false;
    collection.members = [];

    return collection;
  }

  createCollectionMember(collection: string) {
    const collectionMember = new CollectionMember();

    collectionMember.collectionName = collection;
    collectionMember.isVisible = true;
    collectionMember.tag = 'new';
    collectionMember.creationDate = new Date();

    return collectionMember;
  }
}
