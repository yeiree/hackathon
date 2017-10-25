import React from 'react';
import {
    Image,
    View,
    StyleSheet,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Button
} from 'react-native';
import {
    RkText,
    RkCard,
    RkStyleSheet,
    RkButton
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {orderdata} from '../../data';
import Modal from 'react-native-modal'

export class OrderListGrid extends React.Component {
    static navigationOptions = {
        title: 'OrderListGrid'.toUpperCase()
    };

    constructor(props) {
        super(props);
        //console.log(JSON.stringify(props));
        this.data = orderdata;
        this.renderItem = this._renderItem.bind(this);
        this.state = { isModalVisible: false };
    };

    _keyExtractor(post, index) {
        return post.id;
    }
    _showModal = () => this.setState({ isModalVisible: true });
    _hideModal = () => this.setState({ isModalVisible: false });
    _renderItem(info) {
        return (
            <View>
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={this._showModal}>
                <RkCard style={styles.card}>
                    <View rkCardHeader>
                        <View>
                            <RkText rkType='header4'>{info.item.itemName}</RkText>
                            <RkText rkType='secondary2 hintColor'>{('유효기간 ' + info.item.expireDate)}</RkText>
                        </View>
                    </View>
                    <Image rkCardImg source={{uri: `http://gdimg.gmarket.co.kr/${info.item.itemNo}/still/160`}}/>
                    <View style={styles.footer} rkCardFooter>
                        <RkButton rkType='clear' >
                            <RkText rkType='awesome hintColor' >{'Coupon Check'}</RkText>
                        </RkButton>
                    </View >
                </RkCard>
            </TouchableOpacity>

            </View>

        )
    }

    render() {
        return (
            <View>
            <Modal isVisible={this.state.isModalVisible}
                   >
                <View style={styles.modalContent}>
                    <Image style={styles.image} source={{uri: `http://barcode.ebaykorea.com/barcode/360/108/999273076215`}}/>
                    <RkButton rkType='clear' onPress={this._hideModal}>
                        <RkText rkType='awesome hintColor' >{'Close'}</RkText>
                    </RkButton>
                </View>

            </Modal>
            <FlatList
                data={this.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}/>
            </View>
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
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        //borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: 150,
        height:150,

    }
}));


