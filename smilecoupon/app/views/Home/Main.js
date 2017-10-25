import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button

} from 'react-native';
import { HeaderView }  from '../../components';


export class Main extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <HeaderView />
                <Button onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        title="Open"
                />
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
