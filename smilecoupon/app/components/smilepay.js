import React from 'react';
import {
    View, Text
} from 'react-native';
import {
    RkButton,
    RkTextInput,
    RkText,
    RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../assets/icons';


export class SmilePay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden: true}
    }


    render(){
        let button = (
            <RkButton style={styles.button} rkType='clear'
                      onPress={() => {
                          this.setState({hidden: !this.state.hidden})
                      }}>
                <RkText style={styles.icon} rkType='awesome secondaryColor'>{FontAwesome.slashEye}</RkText>
            </RkButton>
        );

        let {
            ...inputProps
        } = this.props;

        return(
            <View>
                <Text>SmilePay 결제합니다.</Text>
                <RkTextInput
                    autoCapitalize='none'
                    rkType='bordered rounded iconRight'
                    autoCorrect={false}
                    label={button}
                    secureTextEntry={this.state.hidden}
                    {...inputProps}
                />
            </View>
        )

    }
}

let styles = RkStyleSheet.create(theme => ({
    icon: {
        fontSize: 24
    },
    button: {
        right: 30
    }
}));
