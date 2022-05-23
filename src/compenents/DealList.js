import React from 'react';

import PropTypes from 'PropTypes';

import {View, Text, StyleSheet, PropTypes} from 'react-native';

class DealList extends React.Component {

    static PropTypes = {
        deals : PropTypes.array.isRequired
    }

    render(){
        <View style={styles.list}>Deals...</View>
    }
}

const styles = StyleSheet.create({
    list : {
        backgroundColor : '#eee',
        flex:1,
        width:'100%',
        paddingTop:50,
    }
})

export default DealList;

