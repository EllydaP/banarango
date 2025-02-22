import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.listas}>
        <Link href={'/faceis'}><Text style={styles.titulo}>Receitas Fáceis</Text></Link>
          <ScrollView horizontal contentContainerStyle={{ gap: 40, flexDirection: "row" }}>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
          </ScrollView>
        </View>


        <View style={styles.listas}>
          <Link href={'/salgadas'}><Text style={styles.titulo}>Receitas: Salgadas</Text></Link>
          <ScrollView horizontal contentContainerStyle={{ gap: 40, flexDirection: "row" }}>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
          </ScrollView>
        </View>


        <View style={styles.listas}>
          <Link href={'/doces'}><Text style={styles.titulo}>Receitas: Doces</Text></Link>
          <ScrollView horizontal contentContainerStyle={{ gap: 40, flexDirection: "row" }}>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.butao}><Text>Entrar</Text></TouchableOpacity>
          </ScrollView>
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

        },
        butao: {
            backgroundColor: '#b1afaa',
            width : 120,
            height: 120,
            alignItems: 'center'
        },
        scrollRow: {
          width: 100,
          backgroundColor: 'red',
          gap: 40,
        },
        titulo: {
          fontSize: 24
        },
        listas: {
          gap: 20
        }
    }
)