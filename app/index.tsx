import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image 1.png')}/>
      <Text style={styles.title}>Banarango</Text>
      <TouchableOpacity style={styles.butao} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles= StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6d6b7',
      gap: 20,
    },
    butao: {
      backgroundColor: '#FBF8F3',
      width: 200,
      height: 40,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },
    title: {
      fontSize: 20,
      fontWeight: 'black',
    },
    texto: {
      color: '#28241B',
      fontSize: 24,
      fontWeight: 'bold'
    }
  }
)