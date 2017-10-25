import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import {
    RkText,
    RkButton,
    RkStyleSheet
} from 'react-native-ui-kitten';
import {NavigationActions} from 'react-navigation';
import {
    SmilePay
} from './index';

export class ItemView extends React.Component {
    constructor(props) {
        super(props);
        this._navigateAction = this._navigate.bind(this);
        this.state = {
            size: props.size,
            iteminfo: props.iteminfo
        }
    };

    _navigate(route) {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: route})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        let size = this.state.size;
        let iteminfo = this.state.iteminfo;
        return (

            <RkButton rkType='tile'
                      style={{height: size, width: size}}
                      key={iteminfo.no}
                      onPress={() => {
                          this._navigate('SmilePay')
                    }}>

                <Image
                    style={styles.image}
                    source={{uri: `http://gdimg.gmarket.co.kr/${iteminfo.no}/still/160`}}
                />

                <RkText rkType='primary5'>{iteminfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</RkText>
                <RkText rkType='primary4'>{iteminfo.name}</RkText>
            </RkButton>

        )
    };
}

let styles = RkStyleSheet.create(theme => ({
    image: {
        width: 80,
        height:80,
        paddingLeft:20,
        marginBottom:16
    }
}));