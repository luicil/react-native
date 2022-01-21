import React from "react";
import{View, Text, Image, StyleSheet} from "react-native";

export default class PeopleDetailPage extends React.Component{
    render(){
        const {people} = this.props.navigation.state.params;
        
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.avatar} 
                    source={{uri: people.picture.large}} />
                <Text>Detalhes ok</Text>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
});