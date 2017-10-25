import React from 'react';
import { Header } from 'react-native-elements';
import {
    SideMenu
} from '../views/navigation';

export class HeaderView extends React.Component {
    render(){
        return(
            <Header
                leftComponent={{ icon: 'menu', color: '#ff1a24'}}
                centerComponent={{ text: 'Smile Dabang', style: { color: '#ff5a42' } }}
            />);

    }

}