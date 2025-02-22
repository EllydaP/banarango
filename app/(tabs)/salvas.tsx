import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Receitas Salvas</Text>
        <View style={styles.class}>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
};

const styles= StyleSheet.create(
    {
        container:{
            flex: 1,
            padding: 30,
            gap: 40,
            justifyContent: 'center',
            alignItems: 'center'
        },
        butao: {
            backgroundColor: '#b1afaa',
            width : 120,
            height: 120,
            alignItems: 'center'
        },
        class: {
          flex: 1,
          flexDirection:'row',
          gap: 40,
          flexWrap: 'wrap',
          justifyContent: 'center'
        },
        titulo: {
          fontSize: 24
        },
    }
)