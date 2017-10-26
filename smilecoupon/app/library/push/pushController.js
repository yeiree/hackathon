import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import PushNotification from 'react-native-push-notification';

export class PushController extends React.Component {
    componentDidMount() {
        PushNotification.configure({
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true,
            senderID: "1111",
            onRegister: function(token) {

            },
            onNotification: function(notification) {

            }});

    };

    render() {
        return <View />;
    };


}
