import React from 'react';
import {
    View, Text
} from 'react-native';
import {
    RkText,
    RkButton,
    RkStyleSheet
} from 'react-native-ui-kitten';
import { Icon } from 'react-native-elements';

export class MyInfo extends React.Component {
    render(){
        return(
            <View>
                <Icon name="accessibility" size={50}/>
                <Text>My Info</Text>
            </View>
        );

    }
}