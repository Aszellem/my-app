//Czégel Vanessza

import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import InputItem from './components/InputItem';
import ListItem from './components/ListItem';  //tétel azononosító?!

export default function App() {
  const [lista, setLista] = useState([]);

  function hozzaad(szoveg){
    if(szoveg.length ===0)
      return;
    setLista(uj => [...lista,{id: lista.length +1, tetel: szoveg}]);
  }
  
  function torol(id){
    setLista(lista => lista.filter((tetel) => tetel.id !== id))
  }

  return (
    <View style={styles.screen}>
      <Text style="{styles.title}">Bevásárlólista</Text>
      <InputItem
        hozzaad={hozzaad}
      />
      <ScrollView>
      {lista.map((sor) =>
      <ListItem
        key={sor.id}
        sor={sor}
        torol={torol}
      />
      )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    marginTop: 60,
    padding: 30
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
  }
})