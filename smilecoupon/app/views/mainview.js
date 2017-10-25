import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

import {KittenTheme} from '../config/theme'
import {FontAwesome} from '../assets/icons';

import {
    ProgressChart,
    MyInfo,
    OrderInfo
} from '../components/';


export class MainView extends React.Component {

    static navigationOptions = {
        title: 'MainView'.toUpperCase()
    };

    constructor(props) {
        super(props);
    }

    component
    renderStatItem(item) {
        return (
            <View style={[styles.statItemContainer, {backgroundColor: item.background}]} key={item.name}>
                <View>
                    <RkText rkType='header6' style={styles.statItemValue}>{item.value}</RkText>
                    <RkText rkType='secondary7' style={styles.statItemName}>{item.name}</RkText>
                </View>
                <RkText rkType='awesome hero' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
            </View>
        )
    }

    render() {
        let chartBlockStyles = [styles.chartBlock, {backgroundColor: RkTheme.current.colors.control.background}];
        let leftBlockStyles = [styles.leftBlock, {backgroundColor: RkTheme.current.colors.control.background}];
        return (
            <ScrollView style={styles.screen}>
                <View>
                    <View style={chartBlockStyles}>
                        <ProgressChart/>
                    </View>
                    <View style={leftBlockStyles}>
                        <MyInfo/>
                    </View>
                    <View style={leftBlockStyles}>
                        <OrderInfo/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: theme.colors.screen.scroll,
        paddingHorizontal: 15,
    },
    statItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    statItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    statItemIcon: {
        alignSelf: 'center',
        marginLeft: 10,
        color: 'white',
    },
    statItemValue: {
        color: 'white',
    },
    statItemName: {
        color: 'white',
    },
    chartBlock: {
        padding: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    leftBlock: {
        //width: 230,
        padding: 70,
        marginBottom: 15
    },
    rightBlock: {
        padding: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
}));


