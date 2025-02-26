import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../contexts/UserContext'; // Importando o contexto

export default function Index() {
  const { receitasSalvas } = useUser(); // Acessando as receitas salvas do contexto
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Receitas Salvas</Text>
        <View style={styles.class}>
          {receitasSalvas.map((item) => (
            <TouchableOpacity key={item.idMeal} onPress={() => router.push(`/receita/${item.idMeal}`)}>
              <View style={styles.card}>
                <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                <Text style={styles.nome}>{item.strMeal}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    gap: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butao: {
    backgroundColor: '#b1afaa',
    width: 120,
    height: 120,
    alignItems: 'center',
  },
  class: {
    flex: 1,
    flexDirection: 'row',
    gap: 40,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  nome: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 100,
  },
});
