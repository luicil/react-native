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

    setTimeout(() => {
      this.setState({loading: true});
      axios.get("https://randomuser.me/api?nat=br&results=15").then(
        response =>{
          const { results } = response.data;
          this.setState({
            people: results,
            loading: false,
          });
        }
      ).catch(
        response =>{
          people: ["Falha no retorno da API."]
        }
      );
        
    }, 1500);

  };

  render(){
    return (  
      <View>
        <ActivityIndicator size="large" color="#6ca2f7"/>
        <PeopleList
          people={this.state.people}
          onPressItem={pageParams =>{
            this.props.navigation.navigate("PeopleDetail", pageParams);
          }}
        />
      </View>
      
    );  
  };
};
