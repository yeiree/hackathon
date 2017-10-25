import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text
} from 'react-native';
import {
    RkText,
    RkButton,
    RkStyleSheet
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/navigation/routes';
import {itemdata} from '../../data/raw'
import {ItemView} from '../../components'

export class ItemListGrid extends React.Component {
    static navigationOptions = {
        title: 'ItemListGrid'.toUpperCase()
    };

    constructor(props) {
        super(props);
        this.state = {
            dimensions: props.dimensions
        }
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

    render() {

        let items = <View/>;

        if (this.state.dimensions) {
            let size = this.state.dimensions.width / 2;
            let emptyCount = this._getEmptyCount(size);

            let filterdItemData = itemdata.filter(function(item) {
                item.brandname === 'starbucks'
            });

            items = filterdItemData.map(function (iteminfo, index) {
                return (
                   <ItemView key={index} size={size} iteminfo={iteminfo} />
                )
            });

            for (let i = 0; i < emptyCount; i++) {
                items.push(<View key={'empty' + i} style={[{height: size, width: size}, styles.empty]}/>)
            }
        }
        return (
            <ScrollView style={styles.root}
                contentContainerStyle={styles.rootContainer}>
                {items}
            </ScrollView>
        );
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base
    },
    rootContainer: {
        paddingVertical: 20
    },
    empty: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base
    },
    icon: {
        marginBottom: 16
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
}));