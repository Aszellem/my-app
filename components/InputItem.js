//Czégel Vanessza

import { StyleSheet, Button, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function InputItem(props){
    const [szoveg, setSzoveg] = useState("");

    function beallit(beirt){
        setSzoveg(beirt);
    }

    function kesz(){
        props.hozzaad(szoveg);
        setSzoveg("");
    }
    return(
        <View style={styles.input}>
            <TextInput
                placeholder='Tétel'
                style={styles.textstyle}
                onChangeText={beallit}
                value={szoveg}
                autoFocus={true}
            />
            <Button
                title='Add'
                onPress={kesz}
            />
        </View>
        
    )
}
const styles = StyleSheet.create({
    input: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        alignItems: "center"
    },
    textstyle: {
        padding: 10,
        margin: 5,
        flex: 1,
    }
})
