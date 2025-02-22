import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Pag1() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Receitas Salgadas</Text>
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
        alignItems: 'center',
      },
      butao: {
        backgroundColor: '#b1afaa',
        width : 120,
        height: 120,
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'black',
      },
      class: {
        flex: 1,
        flexDirection:'row',
        gap: 30,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
    }
)