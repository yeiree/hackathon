import {FontIcons} from '../../assets/icons';
import * as Screens from '../../views/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'MainView',
        title: 'MainView',
        icon: FontIcons.smile,
        screen: Screens.MainView,
        children: [
            {
                id: 'Login1',
                title: 'Login V1',
                screen: Screens.LoginV1,
                children: []
            },
            {
                id: 'Login2',
                title: 'Login V2',
                screen: Screens.LoginV2,
                children: []
            },
            {
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.SignUp,
                children: []
            },
            {
                id: 'password',
                title: 'Password Recovery',
                screen: Screens.PasswordRecovery,
                children: []
            },
        ]
    },
    {
        id: 'ItemListGrid',
        title: 'ItemListGrid',
        icon: FontIcons.smile,
        screen: Screens.ItemListGrid,
        children: [
            {
                id: 'Login1',
                title: 'Login V1',
                screen: Screens.LoginV1,
                children: []
            },
            {
                id: 'Login2',
                title: 'Login V2',
                screen: Screens.LoginV2,
                children: []
            },
            {
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.SignUp,
                children: []
            },
            {
                id: 'password',
                title: 'Password Recovery',
                screen: Screens.PasswordRecovery,
                children: []
            },
        ]
    }

];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
    id: 'ItemListGrid',
    title: 'Start',
    screen: Screens.ItemListGrid,
    children: []
},);

export const MenuRoutes = menuRoutes;