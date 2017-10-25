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
        let renderIcon = () => {
            if (RkTheme.current.name === 'light')
                return <Image style={styles.image} source={require('../../assets/images/smilepay.png')}/>;
            return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
        };

        return(
            <View>
                <Text>Smilepay 결제합니다.</Text>
            </View>
        );

    }
}
let styles = RkStyleSheet.create(theme => ({
    screen: {
        padding: scaleVertical(16),
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.screen.base
    },
    image: {
        height: scaleVertical(77),
        resizeMode: 'contain'
    },
    header: {
        paddingBottom: scaleVertical(10),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    content: {
        justifyContent: 'space-between'
    },
    save: {
        marginVertical: 20
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
        marginHorizontal: 24,
        justifyContent: 'space-around',
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        borderColor: theme.colors.border.solid
    },
    footer: {}
}));