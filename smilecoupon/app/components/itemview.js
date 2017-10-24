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

export class ItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            iteminfo: props.iteminfo
        }
    };

    render() {
        let size = this.state.size;
        let iteminfo = this.state.iteminfo;

        return (

            <RkButton rkType='tile'
                      style={{height: size, width: size}}
                      key={iteminfo.no}
                      onPress={() => {
                      //todo:
                    }}>
                <Image
                    style={styles.image}
                    source={{uri: 'http://gdimg.gmarket.co.kr/586623345/still/160'}}
                />
                <RkText rkType='small'>{iteminfo.name}</RkText>
            </RkButton>


        )
    };
}

let styles = RkStyleSheet.create(theme => ({
    image: {
        width: 50,
        height:50,
        paddingLeft:20
    }
}));