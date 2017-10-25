import React from 'react';
import {
    View, Text
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';


export class SmilePay extends React.Component {
    static navigationOptions = {
        title: 'SmilePay'.toUpperCase()
    };

    render(){


        return(
            <View>
                <Text>Smilepay 결제합니다.</Text>
            </View>
        );

    }
}
