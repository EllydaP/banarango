import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}
// Criar o contexto para o nome do usuário
const UserContext = createContext<{ nome: string; setNome: (nome: string) => void ; receitasSalvas: ReceitaDetalhada[]; salvarReceita: (receita: ReceitaDetalhada) => void;} | undefined>(undefined);

// Provider do contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [nome, setNome] = useState<string>('');
  const [receitasSalvas, setReceitasSalvas] = useState<ReceitaDetalhada[]>([])

  const salvarReceita = (receita: ReceitaDetalhada) => {
    setReceitasSalvas((prevReceitas) => [...prevReceitas, receita]);
  };

  return (
    <UserContext.Provider value={{ nome, setNome, receitasSalvas, salvarReceita }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};

