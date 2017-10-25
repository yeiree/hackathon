import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { Header } from 'react-native-elements';

export class HeaderView extends React.Component {
    render(){
        return(
            <Header
            leftComponent={{ icon: 'menu', color: '#ff1a24' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#ff5a42' } }}
            rightComponent={{ icon: 'home', color: '#ff3f39' }}
        />);

    }
}
