import React from 'react';

import PropTypes from 'PropTypes';

import {View, Text, Image, PropTypes, TouchableOpacity} from 'react-native';

import {priceDisplay} from '../util'

class DealItem extends React.Component {

    static PropTypes = {
        deal : PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
    }

    handlePress = () =>{
     this.props.onPress(this.props.deal.key);
    }

    render(){

        const {deal} = this.props;
        return (
            <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
              <Image source={{ uri: deal.media[0] }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{deal.title}</Text>
                <View style={styles.footer}>
                  <Text style={styles.cause}>{deal.cause.name}</Text>
                  <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                </View>
              </View>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    image : {
        width:'100%',
        height:150
    }
})

export default DealItem;

