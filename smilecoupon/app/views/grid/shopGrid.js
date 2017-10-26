import React from 'react';
import {
    ScrollView,
    Dimensions,
} from 'react-native';
import {
    RkButton, RkStyleSheet,
    RkText
} from 'react-native-ui-kitten';
const paddingValue = 8;

export class ShopGrid extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Shop Menu'.toUpperCase(),
    });

    constructor(props) {
        super(props);
    }


    _calculateItemSize() {
        let {height, width} = Dimensions.get('window');
        return (width - paddingValue * 6) / 2;
    }

    render() {
        let size = this._calculateItemSize();
        let navigate = this.props.navigation.navigate;


        return (
            <ScrollView style={styles.root}
                        contentContainerStyle={styles.rootContainer}>
                <RkButton
                rkType='square shadow'
                style={{width: size, height: size}}
                key='starbucks'
                onPress={() => {
                         navigate('ItemView')
                        }}>

                <Image
                    style={styles.image}
                    source={{uri: `http://gdimg.gmarket.co.kr/${iteminfo.no}/still/160`}}
                />
                <Image style={[styles.image, {width}]} source={require('../../assets/images/starbucks-icon.jpg')}/>
                <RkText>StarBucks</RkText>

            </RkButton>
                <RkButton
                    rkType='square shadow'
                    style={{width: size, height: size}}
                    key='coffebean'
                    onPress={() => {
                         navigate('ItemView')
                        }}>

                    <Image
                        style={styles.image}
                        source={{uri: `http://gdimg.gmarket.co.kr/${iteminfo.no}/still/160`}}
                    />
                    <Image style={[styles.image, {width}]} source={require('../../assets/images/coffeebean-icon.jpg')}/>
                    <RkText>CoffeBean</RkText>

                </RkButton>
                <RkButton
                    rkType='square shadow'
                    style={{width: size, height: size}}
                    key='dunkin'
                    onPress={() => {
                         navigate('ItemView')
                        }}>

                    <Image
                        style={styles.image}
                        source={{uri: `http://gdimg.gmarket.co.kr/${iteminfo.no}/still/160`}}
                    />
                    <Image style={[styles.image, {width}]} source={require('../../assets/images/dunkin-icon.jpg')}/>
                    <RkText>Dunkin Dounut</RkText>

                </RkButton>
            </ScrollView>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.scroll,
        padding: paddingValue,
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    icon: {
        marginBottom: 16
    },
    image: {
        width: 80,
        height:80,
        paddingLeft:20,
        marginBottom:16
    }
}));