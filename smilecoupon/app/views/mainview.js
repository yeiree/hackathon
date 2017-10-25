import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';

import {
    RkText,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

import {FontAwesome} from '../assets/icons';

import {
    ProgressChart
} from '../components/';


export class MainView extends React.Component {

    static navigationOptions = {
        title: 'MainView'.toUpperCase()
    };

    constructor(props) {
        super(props);
    }

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
        let chartBlockStyles = [styles.chartBlock, {backgroundColor: 'white'}];
        return (
            <View style={chartBlockStyles}>
                <ProgressChart/>
            </View>
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
}));


