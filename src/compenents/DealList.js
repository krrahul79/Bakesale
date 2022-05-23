import React from 'react';

import PropTypes from 'PropTypes';

import {View, Text, StyleSheet,FlatList, PropTypes} from 'react-native';

class DealList extends React.Component {

    static PropTypes = {
        deals : PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired
    }

    render(){
        <View style={styles.list}>
          <FlatList
        data={this.props.deals}
        renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress}/>}
      />
            </View>
    }
}

const styles = StyleSheet.create({
    deal: {
      marginHorizontal: 12,
      marginTop: 12,
    },
    image: {
      width: '100%',
      height: 150,
    },
    info: {
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#bbb',
      borderWidth: 1,
      borderTopWidth: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    footer: {
      flexDirection: 'row',
    },
    cause: {
      flex: 2,
    },
    price: {
      flex: 1,
      textAlign: 'right',
    },
  });

export default DealList;

