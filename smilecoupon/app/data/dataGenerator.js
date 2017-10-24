import realm from './realm/realm'
import users from './raw/users'
import itemdata from './raw/itemdata'
import notifications from './raw/notifications'


function truncate() {
    realm.write(() => {
        realm.delete(realm.objects('User'));
        realm.delete(realm.objects('Version'));
        realm.delete(realm.objects('Itemdata'));
    });
}

function populateUsers() {
}



function populateVersion() {
    realm.write(() => {
        realm.create('Version', {id: 0})
    })
}

let populate = () => {
    let version = realm.objects('Version');
    if (version && version.length > 0)
        return;

    //truncate();
    populateVersion();
    populateUsers();
};

export default populate
