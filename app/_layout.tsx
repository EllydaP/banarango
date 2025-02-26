import {Stack} from 'expo-router'
import { UserProvider } from './contexts/UserContext';

export default function Layout(){
    return(
        <UserProvider>
            <Stack>
                <Stack.Screen name= 'index' options={{headerShown: false}}/>
                <Stack.Screen name= '(tabs)' options={{headerShown: false}}/>
                <Stack.Screen name='faceis' options={{ title:'Receitas Fáceis'}}/>
                <Stack.Screen name='salgadas' options={{ title:'Receitas Salgadas'}}/>
                <Stack.Screen name='doces' options={{ title:'Receitas Doces'}}/>
                <Stack.Screen name='receita' options={{ title:'Salvas'}}/>
                <Stack.Screen name='perfil' options={{ title:'Dados'}}/>
                <Stack.Screen name='creditos' options={{ title:'Desenvolvedores'}}/>
                <Stack.Screen name='receita/[id]' options={{ title: 'Receita' }}/>
            </Stack>
        </UserProvider>
    )
}