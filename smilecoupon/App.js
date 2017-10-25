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
    FlatList,
    AppState,
    Platform,
    Picker
} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
//import {AppRoutes} from './app/config/navigation/routesBuilder';
import {bootstrap} from './app/config/bootstrap';
import { AppLoading, Asset, Font } from 'expo';
import track from './app/config/analytics';
import {PushController} from './app/pushController'
import PushNotification from 'react-native-push-notification';
import transition from './app/config/navigation/transitions'

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
let ItemListGrid = withRkTheme(Screens.ItemListGrid);

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


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 5,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            if (Platform.OS === 'ios') {
                date = date.toISOString();
            }

            PushNotification.localNotificationSchedule({
                message: "My Notification Message",
                date,
            });
        }
    }

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
            <View>
                <RootNavigator />
                <PushController />
            </View>
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


