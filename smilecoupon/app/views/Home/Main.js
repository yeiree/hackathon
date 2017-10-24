import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
