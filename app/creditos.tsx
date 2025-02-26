import { StyleSheet, View, Text, Image} from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image style={styles.imagem} source={require('../assets/image 1.png')}/>        
        <Text> ♡ Banarango foi feito com muito amor por:</Text>
        <Text>Ellyda da Silva, Miria Muriely, Vitoria Beatriz, amigo oculto</Text>
        <Text>redes sociais: 🍊 Ellyda.s     🍓mmuriely_    🍌viv_beatrizz 
        </Text>
      </View>
    </View>

  )
};

const styles= StyleSheet.create(
    {
        container:{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
        },
        block: {
            backgroundColor: '#b1afaa',
            width : 150,
            height: 150,
            alignItems: 'center',
            borderRadius: 80,
        },
        class: {
          flex: 2,
          flexDirection:'row',
          gap: 60
        },
        child: {
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center'
        },
        imagem: {
          borderRadius: 200
        }
      },
        
    
)