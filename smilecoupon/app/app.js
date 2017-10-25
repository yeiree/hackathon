import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text
} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
//import {AppRoutes} from './config/navigation/routesBuilder';
import {withRkTheme} from 'react-native-ui-kitten';
import * as Screens from './views';

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

let SideMenu = withRkTheme(Screens.SideMenu);
const SmileCouponApp = StackNavigator({
    Home: {
        screen: DrawerNavigator({
                ...AppRoutes,
            },
            {
                contentComponent: (props) => <SideMenu {...props}/>
            })
    }
}, {
    headerMode: 'none',
});

export default () => (
    <SmileCouponApp
        onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

      if (prevScreen !== currentScreen) {

      }
    }}
    />
);
