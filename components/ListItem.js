//Czégel Vanessza

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ListItem(props){
    return(

        <TouchableOpacity onPress={() => props.torol(props.sor.id)}>
        <View style={styles.listitem}>
            <Text>{props.sor.tetel}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listitem: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: "auto",
        padding:10,
        backgroundColor: "#ccc"
    }
})