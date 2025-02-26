import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';

type Receita = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function Index() {
  const [receitasSalgadas, setReceitasSalgadas] = useState<Receita[]>([]);
  const [receitasDoces, setReceitasDoces] = useState<Receita[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Buscar 5 receitas salgadas aleatórias
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood') // Exemplo: "Seafood" pode ser alterado
      .then(response => response.json())
      .then(data => setReceitasSalgadas(data.meals.slice(0, 5))) // Pegamos apenas 5
      .catch(error => console.error('Erro ao buscar receitas salgadas:', error));

    // Buscar 5 receitas doces aleatórias
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      .then(response => response.json())
      .then(data => setReceitasDoces(data.meals.slice(0, 5))) // Pegamos apenas 5
      .catch(error => console.error('Erro ao buscar receitas doces:', error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* RECEITAS SALGADAS */}
        <View style={styles.listas}>
          <View style={styles.links}>
            <Text  style={styles.titulo}>Receitas Salgadas</Text>
            <Link href={'/salgadas'}>
              <Text>Ver mais</Text>
            </Link>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.row}>
            {receitasSalgadas.map((item) => (
              <TouchableOpacity key={item.idMeal} onPress={() => router.push(`/receita/${item.idMeal}`)}>
                <View style={styles.card}>
                  <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                  <Text style={styles.nome}>{item.strMeal}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* RECEITAS DOCES */}
        <View style={styles.listas}>
        <View style={styles.links}>
            <Text  style={styles.titulo}>Receitas Doces</Text>
            <Link href={'/doces'}>
              <Text>Ver mais</Text>
            </Link>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.row}>
            {receitasDoces.map((item) => (
              <TouchableOpacity key={item.idMeal} onPress={() => router.push(`/receita/${item.idMeal}`)}>
                <View style={styles.card}>
                  <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                  <Text style={styles.nome}>{item.strMeal}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listas: {
    gap: 20,
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }
});
