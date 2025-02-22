import {Stack} from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name= 'index' options={{headerShown: false}}/>
            <Stack.Screen name= '(tabs)' options={{headerShown: false}}/>
            <Stack.Screen name='faceis' options={{ title:'Receitas Fáceis'}}/>
            <Stack.Screen name='salgadas' options={{ title:'Receitas Salgadas'}}/>
            <Stack.Screen name='doces' options={{ title:'Receitas Doces'}}/>
        </Stack>
    )
}