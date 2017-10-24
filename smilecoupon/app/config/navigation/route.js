import {FontIcons} from '../../assets/icons';
import * as Screens from '../../views/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'LoginMenu',
        title: 'Auth',
        icon: FontIcons.login,
        screen: Screens.LoginMenu,
        children: [
            {
                id: 'Login1',
                title: 'Login V1',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Login2',
                title: 'Login V2',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'password',
                title: 'Password Recovery',
                screen: Screens.Main,
                children: []
            },
        ]
    },
    {
        id: 'SocialMenu',
        title: 'Social',
        icon: FontIcons.profile,
        screen: Screens.Main,
        children: [
            {
                id: 'ProfileV1',
                title: 'User Profile V1',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'ProfileV2',
                title: 'User Profile V2',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'ProfileV3',
                title: 'User Profile V3',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'ProfileSettings',
                title: 'Profile Settings',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Notifications',
                title: 'Notifications',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Contacts',
                title: 'Contacts',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Feed',
                title: 'Feed',
                screen: Screens.Main,
                children: []
            },
        ]
    },
    {
        id: 'ArticlesMenu',
        title: 'Articles',
        icon: FontIcons.article,
        screen: Screens.Main,
        children: [
            {
                id: 'Articles1',
                title: 'Article List V1',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Articles2',
                title: 'Article List V2',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Articles3',
                title: 'Article List V3',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Articles4',
                title: 'Article List V4',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Blogposts',
                title: 'Blogposts',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Article',
                title: 'Article View',
                screen: Screens.Main,
                children: []
            }
        ]
    },
    {
        id: 'MessagingMenu',
        title: 'Messaging',
        icon: FontIcons.mail,
        screen: Screens.Main,
        children: [
            {
                id: 'Chat',
                title: 'Chat',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'ChatList',
                title: 'Chat List',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Comments',
                title: 'Comments',
                screen: Screens.Main,
                children: []
            },
        ]
    },
    {
        id: 'DashboardsMenu',
        title: 'Dashboards',
        icon: FontIcons.dashboard,
        screen: Screens.Main,
        children: [{
            id: 'Dashboard',
            title: 'Dashboard',
            screen: Screens.Main,
            children: []
        },]
    },
    {
        id: 'WalkthroughMenu',
        title: 'Walkthroughs',
        icon: FontIcons.mobile,
        screen: Screens.Main,
        children: [{
            id: 'Walkthrough',
            title: 'Walkthrough',
            screen: Screens.Main,
            children: []
        }]
    },
    {
        id: 'EcommerceMenu',
        title: 'Ecommerce',
        icon: FontIcons.card,
        screen: Screens.Main,
        children: [
            {
                id: 'Cards',
                title: 'Cards',
                icon: FontIcons.card,
                screen: Screens.Main,
                children: []
            },
            {
                id: 'AddToCardForm',
                title: 'Add To Card Form',
                icon: FontIcons.addToCardForm,
                screen: Screens.Main,
                children: []
            },

        ]
    },
    {
        id: 'NavigationMenu',
        icon: FontIcons.navigation,
        title: 'Navigation',
        screen: Screens.Main,
        children: [
            {
                id: 'GridV1',
                title: 'Grid Menu V1',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'GridV2',
                title: 'Grid Menu V2',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'List',
                title: 'List Menu',
                screen: Screens.Main,
                children: []
            },
            {
                id: 'Side',
                title: 'Side Menu',
                action: 'DrawerOpen',
                screen: Screens.Main,
                children: []
            }
        ]
    },
    {
        id: 'OtherMenu',
        title: 'Other',
        icon: FontIcons.other,
        screen: Screens.Main,
        children: [
            {
                id: 'Settings',
                title: 'Settings',
                screen: Screens.Main,
                children: []
            }
        ]
    },
    {
        id: 'Themes',
        title: 'Themes',
        icon: FontIcons.theme,
        screen: Screens.Main,
        children: []
    },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
    id: 'Main',
    title: 'Start',
    screen: Screens.Main,
    children: []
},);

export const MenuRoutes = menuRoutes;