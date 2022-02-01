import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PeopleList from '../components/PeopleList';
import axios from "axios";
export default class PeoplePage extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      people:[],
      loading: false,
    };

  };

  componentDidMount(){
    this.setState({loading: true});
    axios.get("https://randomuserERRO.me/api?nat=br&results=15").then(
      response =>{
        const { results } = response.data;
        this.setState({
          people: results,
          loading: false,
          error: false,
        });
      }
    ).catch(error =>{
      this.setState({error: true, loading: false});
    });
  };

  renderPage(){
    if(this.state.loading){
      return(<ActivityIndicator size="large" color="#6ca2f7"/>)  
    } 
    if(this.state.error){
      return(<Text style={styles.error}>Ops... Algo deu errado ! =(</Text>)
    }
    return(
      <PeopleList
        people={this.state.people}
        onPressItem={pageParams =>{
        this.props.navigation.navigate("PeopleDetail", pageParams);
      }} />
    );
  };

  render(){
    return (  
      <View style={styles.container}>
        {this.renderPage()}
      </View>
    );  
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    color: "red",
    alignSelf: "center",
    fontSize: 18,
  }
});