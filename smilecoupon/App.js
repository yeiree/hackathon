import React from 'react';
import * as Screens from './app/views';
import {withRkTheme, RkTheme} from 'react-native-ui-kitten';
import {
    KittenTheme
} from './app/config/theme';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
//import {AppRoutes} from './app/config/navigation/routesBuilder';
import {bootstrap} from './app/config/bootstrap';
import { AppLoading, Asset, Font } from 'expo';
import track from './app/config/analytics';
import {MainView} from "./app/views/mainview";

bootstrap();
RkTheme.setTheme(KittenTheme);

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


export default class App extends React.Component {

    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        await Promise.all([
            Font.loadAsync({'Righteous-Regular': require('./app/assets/fonts/Righteous-Regular.ttf'),}),
            Font.loadAsync({'fontawesome': require('./app/assets/fonts/fontawesome.ttf'),}),
            Font.loadAsync({'icomoon': require('./app/assets/fonts/icomoon.ttf'),}),
            Font.loadAsync({'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf'),}),
            Font.loadAsync({'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),}),
            Font.loadAsync({'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),}),
            Font.loadAsync({'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),})
        ]);

    }
    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            <MainView />
                /*
            <SmileEcoupon
                onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = getCurrentRouteName(currentState);
              const prevScreen = getCurrentRouteName(prevState);

                if (prevScreen !== currentScreen) {

                }
                }}
            />
*/
        );
    }
}


