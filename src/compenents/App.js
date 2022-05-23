import React from 'react'

import {View, Text, StyleSheet} from 'react-native';

import ajax from './Ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './Searchbar';

class App extends React.Component{

    state = {
        deals : [],
        currentDealId: null
    }

    async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    this.setState((prevState)=>{
        return {deals};
    })
    }

    setCurrentDeal = (dealId) =>{
        this.setState({
            currentDealId : dealId
        });
    }

    currentDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.currentDealId
        )
    }

    render(){
        if(this.state.currentDealId){
            return (
                <View style={styles.main}>
                <DealDetail initialDealData={this.currentDeal()}/>
                </View>
            )
        }
        if(this.state.deals.length > 0){
           return(
               <View style={styles.main}>
               <SearchBar/>
            <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>
            </View>)
        }
        return(
            <View style={styles.container}>
                {
                  <Text style={styles.header}>Bakesale</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize: 40
    },
    main:{
        marginTop:30
    }
})

export default App;