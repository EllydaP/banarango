import {Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#28241B',  // Cor quando a aba está ativa
            tabBarInactiveTintColor: '#28241B', // Cor quando a aba está inativa
            tabBarStyle: { backgroundColor: '#E6D4B6' }, // Cor do fundo da TabBar
          }}>
            <Tabs.Screen name= 'salvas' options={{title: 'Salvas', tabBarIcon: ({color, size, focused}) => (<Ionicons name={focused ? "bookmark" : "bookmark-outline"} size={size} color={color}/>)}}/>
            <Tabs.Screen name= 'index' options={{title: 'Receitas', tabBarIcon: ({color, size, focused}) => (<Ionicons name={focused ? "home" : "home-outline"} size={size} color={color}/>)}}/>
            <Tabs.Screen name= 'menu' options={{title: 'Menu', tabBarIcon: ({color, size, focused}) => (<Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={color}/>)}}/>
        </Tabs>
    )
}