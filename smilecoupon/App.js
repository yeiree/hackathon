import React from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import {App2} from './app/app'


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 5,
        };
    }

    render() {
        return (
            <App2 />
        );
    }
}
