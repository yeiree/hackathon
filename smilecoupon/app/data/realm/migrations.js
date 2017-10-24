import {User, Version} from './schemas';
import notifications from '../raw/notifications';

export default [
    {
        schema: [User, Version],
        schemaVersion: 1,
        migration(oldRealm, newRealm) {
            const newObjects = newRealm.objects('Notification');

            for (let i = 0; i < newObjects.length; i++) {
                newObjects[i].type = notifications[i].type;
            }
        }
    }
];