import React from 'react';
import {
    Image,
    View,
    StyleSheet,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    RkText,
    RkCard,
    RkStyleSheet
} from 'react-native-ui-kitten';

import {orderdata} from '../../data';

export class OrderListGrid extends React.Component {
    static navigationOptions = {
        title: 'OrderListGrid'.toUpperCase()
    };

    constructor(props) {
        super(props);
        //console.log(JSON.stringify(props));
        this.data = orderdata;
        this.renderItem = this._renderItem.bind(this);
    };

    _keyExtractor(post, index) {
        return post.id;
    }

    _renderItem(info) {
        return (
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                >
                <RkCard style={styles.card}>
                    <View rkCardHeader>
                        <View>
                            <RkText rkType='header4'>{info.item.itemName}</RkText>
                            <RkText rkType='secondary2 hintColor'>{('유효기간 ' + info.item.expireDate)}</RkText>
                        </View>
                    </View>
                    <Image rkCardImg source={{uri: `http://gdimg.gmarket.co.kr/${info.item.itemNo}/still/160`}}/>
                    <View style={styles.footer} rkCardFooter>

                    </View >
                </RkCard>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}/>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.scroll,
        paddingHorizontal: 14,
        paddingVertical: 8
    },
    card: {
        marginVertical: 8
    },
    footer: {
        paddingTop: 16
    },
    time: {
        marginTop: 5
    }
}));


