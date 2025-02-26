import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useUser } from '../contexts/UserContext'; // Importando o contexto
import { Ionicons } from '@expo/vector-icons';


type ReceitaDetalhada = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory: string;
  strArea: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
};

export default function Receita() {
  const { id } = useLocalSearchParams();
  const [receita, setReceita] = useState<ReceitaDetalhada | null>(null);
  const { salvarReceita } = useUser(); // Acessando a função salvarReceita do contexto

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setReceita(data.meals[0]))
      .catch(error => console.error('Erro ao buscar detalhes da receita:', error));
  }, [id]);

  if (!receita) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{receita.strMeal}</Text>
      <Text style={styles.category}>{receita.strCategory} - {receita.strArea}</Text>

      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <Text style={styles.text}>
        {receita.strIngredient1 && `• ${receita.strIngredient1}\n`}
        {receita.strIngredient2 && `• ${receita.strIngredient2}\n`}
        {receita.strIngredient3 && `• ${receita.strIngredient3}\n`}
        {receita.strIngredient4 && `• ${receita.strIngredient4}\n`}
        {receita.strIngredient5 && `• ${receita.strIngredient5}\n`}
      </Text>

      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>{receita.strInstructions}</Text>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => salvarReceita(receita)} // Salva a receita no contexto
      >
        <Text style={styles.saveButtonText}>Salvar Receita</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
