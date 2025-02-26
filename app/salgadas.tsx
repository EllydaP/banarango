import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type Receita = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function Salgadas() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') // Exemplo com carne bovina
      .then(response => response.json())
      .then(data => setReceitas(data.meals || [])) // Evita undefined
      .catch(error => console.error('Erro ao buscar receitas:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas Salgadas</Text>

      {/* FlatList para melhor desempenho e renderização */}
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/receita/${item.idMeal}`)} style={styles.card}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.nome}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20, // Para evitar corte no final da lista
  },
  card: {
    flexDirection: 'row', // Para organizar imagem e nome lado a lado
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, // Para expandir e preencher o espaço disponível
  },
});
