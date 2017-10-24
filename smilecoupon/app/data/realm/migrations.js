import {User, Version, Itemdata} from './schemas';
import notifications from '../raw/notifications';

export default [
    {
        schema: [User, Version, Itemdata],
        schemaVersion: 1,
        migration(oldRealm, newRealm) {
            const newObjects = newRealm.objects('Notification');

            for (let i = 0; i < newObjects.length; i++) {
                newObjects[i].type = notifications[i].type;
            }
        }
    }
];