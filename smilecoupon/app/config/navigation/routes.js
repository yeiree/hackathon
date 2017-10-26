import {FontIcons} from '../../assets/icons';
import * as Screens from '../../views/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'MainView',
        title: 'Smile Dabang',
        icon: FontIcons.smile,
        screen: Screens.MainView,
        children: []
    },
    {
        id: 'ItemView',
        title: 'Item List',
        icon: FontIcons.smile,
        screen:Screens.ItemListGrid,
        children: [
            {
                id: 'Settings',
                title: 'Settings',
                screen: Screens.Settings,
                children: []
            }
        ]
    }
];

let menuRoutes = _.cloneDeep(MainRoutes);
export const MenuRoutes = menuRoutes;