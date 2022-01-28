import React from "react";
import{View, Text, StyleSheet} from "react-native";

const Line = ({label, content}) =>{
    return(
        <View style={styles.line}>
            <Text style={styles.cellLabel}>{ label }</Text>
            <Text style={styles.cellContent}>{ content }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        flexDirection: "row",
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: "#C5C5C5",
    },
    cellLabel: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: "bold",
    },
    cellContent: {
        fontSize: 18,
        paddingLeft: 5,
    },
});

export default Line;
