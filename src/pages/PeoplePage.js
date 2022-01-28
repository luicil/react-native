import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import PeopleList from '../components/PeopleList';
import axios from "axios";
export default class PeoplePage extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      people:[]
    };

  };

  componentDidMount(){
    axios.get("https://randomuser.me/api?nat=br&results=150").then(
      response =>{
        const { results } = response.data;
        this.setState({
          people: results
        });
      }
    ).catch(
      response =>{
        people: ["Falha no retorno da API."]
      }
    );
  };

  render(){

    // this.props.navigation.navigate("PeopleDetail");

    return (  
      <View>
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
