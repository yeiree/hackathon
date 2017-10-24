import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
//import {AppRoutes} from './config/navigation/routesBuilder';
import * as Screens from './views';

import { Main }  from './views/Home';

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

//let SideMenu = withRkTheme(Screens.SideMenu);
const SmileApp = StackNavigator({
    First: {
        screen: Screens.Main
    },
    Home: {
        screen:  Screens.Main
    }
}, {
    headerMode: 'none',
});


export default class App extends React.Component {
    render() {
        return (
            <SmileApp
                onNavigationStateChange={(prevState, currentState) => {
                    const currentScreen = getCurrentRouteName(currentState);
                    const prevScreen = getCurrentRouteName(prevState);

                    if (prevScreen !== currentScreen) {
                        //track(currentScreen);
                    }
                }}
            />
        );
    }
}

var styles = StyleSheet.create({

});
