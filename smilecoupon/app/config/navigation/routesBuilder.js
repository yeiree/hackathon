import React from 'react';
import _ from 'lodash';
import {StackNavigator, DrawerNavigator} from 'react-navigation'
import {withRkTheme} from 'react-native-ui-kitten'
import {NavBar} from '../../components/index';
import transition from './transitions';
import * as Screens from '../../views/index';
import {
  MenuRoutes,
  MainRoutes
} from './routes';


let main = {};
let flatRoutes = {};

(MainRoutes).map(function (route, index) {

    /*
    let wrapToRoute = (route) => {
        return {
            screen: withRkTheme(route.screen),
            title: route.title
        }
    };
    */

    let wrapToRoute = (route) => {
        return {
            screen: route.screen,
            title: route.title
        }
    };

    flatRoutes[route.id] = wrapToRoute(route);
    main[route.id] = wrapToRoute(route);
    for (let child of route.children) {
        flatRoutes[child.id] = wrapToRoute(child);
    }
});

/*
//let ThemedNavigationBar = withRkTheme(NavBar);
const DrawerRoutes1 = {
    MainViewStack: {
        name: 'MainViewStack',
        screen: StackNavigator(Stack, {
                initialRouteName: 'MainView'
                , headerMode: 'screen'
                , cardStyle: {backgroundColor: 'transparent'}
                , transitionConfig: transition
                , navigationOptions: ({navigation, screenProps}) => ({
                    gesturesEnabled: false
                    , header: (headerProps) => {
                        return <NavBar navigation={navigation} headerProps={headerProps}/>
                    }
                })
            }
        )
    },
    ItemListGridStack: {
        name: 'ItemListGridStack',
        screen: StackNavigator(Stack, {
                initialRouteName: 'MainView'
                , headerMode: 'screen'
                , cardStyle: {backgroundColor: 'transparent'}
                , transitionConfig: transition
                , navigationOptions: ({navigation, screenProps}) => ({
                    gesturesEnabled: false
                    , header: (headerProps) => {
                        return <NavBar navigation={navigation} headerProps={headerProps}/>
                    }
                })
            }
        )
    }
};
*/
const DrawerRoutes =
    StackNavigator({
            First: {
                screen: Screens.SplashScreen
            },
            MainView: {
                screen: Screens.MainView
            },
            ItemView: {
                screen: Screens.ItemListGrid
            }
        },
        {
            headerMode: 'none'
        });


export const AppRoutes = DrawerRoutes;
