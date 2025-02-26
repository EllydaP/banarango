import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useUser } from './contexts/UserContext'; // Importando o contexto
import { useState } from 'react'; // Importando o useState

export default function Menu() {
    const { nome, setNome } = useUser(); // Obtendo o nome e a função setNome do contexto
    const [novoNome, setNovoNome] = useState(''); // Estado local para armazenar o novo nome

    // Função que será chamada quando o usuário clicar em "Modificar"
    function mudarNome() {
        if (novoNome.trim() !== '') {
            setNome(novoNome); // Atualiza o nome no contexto com o novo valor
            setNovoNome(''); // Limpa o campo de input após a atualização
        } else {
            alert('Por favor, insira um nome válido.'); // Exibe um alerta caso o campo esteja vazio
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.child}>
                <View style={styles.block}></View>
                <Text style={styles.texto}>{nome}</Text> {/* Exibe o nome atual */}
            </View>
            <View style={styles.child}>
                <Text>Alterar nome de usuário:</Text>
                <TextInput
                    style={styles.campo}
                    placeholder='Digite o novo nome'
                    value={novoNome}
                    onChangeText={setNovoNome} // Atualiza o estado local com o novo nome
                />
                <TouchableOpacity style={styles.butao} onPress={mudarNome}>
                    <Text style={styles.texto}>Modificar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
    },
    block: {
        backgroundColor: '#b1afaa',
        width: 150,
        height: 150,
        alignItems: 'center',
        borderRadius: 80,
    },
    child: {
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    campo: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 30,
        width: 250,
        padding: 10,
    },
    butao: {
        backgroundColor: '#FBF8F3',
        borderWidth: 1,
        width: 200,
        height: 40,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
});
