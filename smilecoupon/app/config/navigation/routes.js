import {FontIcons} from '../../assets/icons';
import * as Screens from '../../views/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'MainView',
        title: 'MainView',
        icon: FontIcons.smile,
        screen: Screens.MainView,
        children: []
    },
    {
        id: 'ItemListGrid',
        title: 'ItemList',
        icon: FontIcons.smile,
        screen:Screens.ItemListGrid,
        children: []
    },
    {
        id: 'OrderListGrid',
        title: 'My Order',
        icon: FontIcons.smile,
        screen: Screens.OrderListGrid,
        children: []
    },
    {
        id: 'UserInfoGrid',
        title: 'My Info',
        icon: FontIcons.smile,
        screen: Screens.OrderListGrid,
        children: []
    }

];
let menuRoutes = _.cloneDeep(MainRoutes);
/*
menuRoutes.unshift({
    id: 'ItemListGrid4',
    title: 'Start',
    screen: Screens.ItemListGrid,
    children: []
},);
*/

export const MenuRoutes = menuRoutes;