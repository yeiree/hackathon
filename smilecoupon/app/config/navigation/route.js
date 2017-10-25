import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import * as Screens from '../../views/index';

export const Draws = DrawerNavigator(
    {
        Main: {
            Path: '/',
            screen: Screens.Main,
            navigationOptions:{
                tabBarLabel: 'Main'

            },
        },
        ItemListGrid: {
            Path: '/sent',
            screen: Screens.ItemListGrid,
            navigationOptions:{
                tabBarLabel: 'Item'

            },
        }
    },
    {
       initialRouteName: 'Main',
       drawerPosition:'left'
    });