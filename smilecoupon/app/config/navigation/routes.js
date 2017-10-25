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
        title: 'ItemListGrid',
        icon: FontIcons.smile,
        screen:Screens.ItemListGrid,
        children: []
    },
    {
        id: 'ItemListGrid2',
        title: 'ItemListGrid',
        icon: FontIcons.smile,
        screen: Screens.ItemListGrid,
        children: []
    },
    {
        id: 'ItemListGrid3',
        title: 'ItemListGrid',
        icon: FontIcons.smile,
        screen: Screens.ItemListGrid,
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