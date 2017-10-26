import React from 'react';
import * as Screens from './views';
import {withRkTheme, RkTheme} from 'react-native-ui-kitten';
import {
    KittenTheme
} from './config/theme';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    FlatList,
    AppState,
    Platform,
    Picker
} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
import {AppRoutes} from './config/navigation/routesBuilder';
import {bootstrap} from './config/bootstrap';
import { AppLoading, Asset, Font } from 'expo';
import {NavBar} from './components'
import track from './config/analytics';
import {PushController} from "./library"
//import PushNotification from 'react-native-push-notification';
import transition from './config/navigation/transitions'
//import {GeoController} from './library/geo/geoController'
//import * as BackgroundGeolocation from 'react-native-background-geolocation'

bootstrap();
RkTheme.setTheme(KittenTheme);

/**
 * route name 가져오기
 * @param navigationState
 * @returns {*}
 */
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
//let ItemListGrid = withRkTheme(Screens.ItemListGrid);

const SmileCoupon = AppRoutes;

const Stack = {
    Start: {
        screen: Screens.SplashScreen
    },
    MainView: {
        screen: Screens.MainView
    },
    ItemListGrid: {
        screen: Screens.ItemListGrid
    }
};

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

const RootNavigator =
    StackNavigator({

            Drawer: {
                name: 'Drawer',
                screen: DrawerNavigator({
                        ...DrawerRoutes1
                    },
                    {
                        contentComponent: (props) => <SideMenu {...props}/>
                    }
                ),
            },
            ...Stack
        },
        {
            headerMode: 'none'
        }
    );


export class App2 extends React.Component {

    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        await Promise.all([
            Font.loadAsync({'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),}),
            Font.loadAsync({'fontawesome': require('./assets/fonts/fontawesome.ttf'),}),
            Font.loadAsync({'icomoon': require('./assets/fonts/icomoon.ttf'),}),
            Font.loadAsync({'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),}),
            Font.loadAsync({'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),}),
            Font.loadAsync({'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),}),
            Font.loadAsync({'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),})
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

            <SmileCoupon />

        );
    }
}

