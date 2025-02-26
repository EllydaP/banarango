import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useUser } from './contexts/UserContext'; // Importando o contexto

export default function App() {
  const router = useRouter();
  const { setNome } = useUser(); // Acessando a função que define o nome do usuário
  const [nome, setNomeInput] = useState('');

  // Função chamada quando o usuário clica em "Entrar"
  const handlePress = () => {
    setNome(nome); // Atualiza o nome no contexto
    router.push('/(tabs)'); // Navega para o menu
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image 1.png')} />
      <Text style={styles.title}>Banarango</Text>
      <TextInput
        style={styles.campo}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNomeInput}
      />
      <TouchableOpacity style={styles.butao} onPress={handlePress}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6d6b7',
    gap: 20,
  },
  butao: {
    backgroundColor: '#FBF8F3',
    borderWidth: 1,
    width: 200,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'black',
  },
  texto: {
    color: '#28241B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  campo: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 30,
    width: 250,
    padding: 10,
  },
});
