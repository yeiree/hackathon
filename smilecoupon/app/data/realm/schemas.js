import Realm from 'realm';

export class User extends Realm.Object { }
User.schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: {type: 'int'},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        phone: {type: 'string'},
        country: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'},
        newPassword: {type: 'string'},
        confirmPassword: {type: 'string'}
    }
};

export class Version extends Realm.Object { }
Version.schema = {
    name: 'Version',
    properties: {
        id: 'int'
    }
};