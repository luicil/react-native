import React from "react";
import {FlatList, Text, StyleSheet } from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = props =>{
    const {people, onPressItem} = props;

/*
    const items = people.map(person =>
        <PeopleListItem
            key={person.login.uuid} 
            people={person}
            navigateToPeopleDetail={onPressItem}
        />
    );
*/

    return (
        <FlatList 
            style={styles.container}
            data={people}
            renderItem={({ item }) =>(
                <PeopleListItem
                    //key={person.login.uuid} 
                    people={item}
                    navigateToPeopleDetail={onPressItem}
                />
            )}
            keyExtractor={item => item.login.uuid}
        />

/*
        <ScrollView style={styles.container}>
            {items}
        </ScrollView>
*/
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff",
    },
});

export default PeopleList;
