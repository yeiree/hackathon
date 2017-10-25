import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Main }  from './views/home';
import { Draws } from './config/navigation/route'

export default class App extends React.Component {
    render() {
        return (
            <Draws />
        );
    }
}

var styles = StyleSheet.create({

});
