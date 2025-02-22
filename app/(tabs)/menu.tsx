import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <View style={styles.block}></View>
        <Text style={styles.texto}>Usuário</Text>
      </View>

      <View style={styles.opcoes}>
        <View>
          <TouchableOpacity style={styles.botao}><Text style={styles.texto}>Alterar dados</Text></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.botao}><Text style={styles.texto}>Desenvolvedoras</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.botao}><Text style={styles.texto}>Ajuda</Text></TouchableOpacity>
        </View>
      </View>

    </View>

  )
};

const styles= StyleSheet.create(
    {
        container:{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
        },
        block: {
            backgroundColor: '#b1afaa',
            width : 150,
            height: 150,
            alignItems: 'center',
            borderRadius: 80,
        },
        class: {
          flex: 2,
          flexDirection:'row',
          gap: 60
        },
        child: {
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center'
        },
        botao: {
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          width: 250,
        },
        opcoes: {
          gap: 20,
        },
        texto: {
          fontSize: 16,
          fontWeight: 'bold',
        }
    }
)