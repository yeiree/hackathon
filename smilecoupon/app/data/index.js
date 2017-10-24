import realm from './realm/realm'
import populate from './dataGenerator'

class DataProvider {

    getUser(id = 1) {
        return realm.objects('User').filtered(`id=${id}`)[0];
    }

    getUsers() {
        return realm.objects('User');
    }

    getItemData() {
        return realm.objects('Itemdata');
    }

    populateRealm() {
        populate();
    }
}

export let data = new DataProvider();