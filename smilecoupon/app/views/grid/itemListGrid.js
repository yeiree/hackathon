import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import {
    RkText,
    RkButton,
    RkStyleSheet
} from 'react-native-ui-kitten';
import Modal from 'react-native-modal'

import {ItemView, SmilePay} from '../../components'
import {itemdata} from '../../data'
const { width, height } = Dimensions.get('window');

export class ItemListGrid extends React.Component {
    static navigationOptions = {
        title: 'ItemListGrid'.toUpperCase()
    };

    constructor(props) {
        super(props);
        //console.log(JSON.stringify(props));
        this.state = {
            dimensions: {width:width, height:height},
            isModalVisible: false
        }
        this.handleToUpdate  = this._showModal.bind(this);
    };

    _onLayout = event => {
        if (this.state.dimensions.height)
            return;
        let dimensions = event.nativeEvent.layout;
        this.setState({dimensions})
    };

    _getEmptyCount(size) {
        let rowCount = Math.ceil((this.state.dimensions.height - 20) / size);
        return rowCount * 2 - itemdata.length;
    };

    _showModal = () => this.setState({ isModalVisible: true });
    _hideModal = () => {
        this.setState({isModalVisible: false});
        //alert('결제되었습니다.');
    }

    render() {
        var handleToUpdate  =   this.handleToUpdate;
        console.log(JSON.stringify(this.handleToUpdate));
        let items = <View/>;
        if (this.state.dimensions) {
            let size = this.state.dimensions.width / 2;
            let modal = this.state.isModalVisible;
            let filterdItemData = itemdata.filter(function(item) {
                return item.brandname === 'starbucks'
            })[0].item;

            let itemCount = filterdItemData.length;
            let emptyCount = this._getEmptyCount(size, itemCount);

            items = filterdItemData.map(function (iteminfo, index) {
                return (
                   <ItemView key={index} size={size} iteminfo={iteminfo} handleToUpdate = {handleToUpdate}/>
                )
            });

            for (let i = 0; i < emptyCount; i++) {
                items.push(<View key={'empty' + i} style={[{height: size, width: size}, styles.empty]}/>)
            }
        }
        return (
            <View>
            <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalContent}>
                    <SmilePay />
                    <RkButton rkType='clear' onPress={this._hideModal}>
                        <RkText rkType='awesome hintColor' >{'Check out'}</RkText>
                    </RkButton>
                </View>

            </Modal>
            <ScrollView
                style={styles.root}
                onLayout={this._onLayout}
                contentContainerStyle={styles.rootContainer}>
                {items}
            </ScrollView>
            </View>
        );
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    empty: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base
    },
    icon: {
        marginBottom: 16
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 4,
        //borderColor: 'rgba(0, 0, 0, 0.1)',
    }
}));