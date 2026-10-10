import AppButton from "@/components/AppButton";
import Card from "@/components/Card"; // 1. Import do Card adicionado
import Header from "@/components/Header";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { BotaoProps, Tarefa } from "./types";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <TouchableOpacity onPress={() => setContador(contador + 1)}>
      <Text style={styles.texto}>Contador: {contador}</Text>
    </TouchableOpacity>
  );
}

type Filtro = 'todas' | 'porFazer' | 'concluidas';

const data: Tarefa[] = [
  {
    id: "1",
    titulo: "Tarefa 1",
    concluida: false,
  },
  {
    id: "2",
    titulo: "Tarefa 2",
    concluida: true,
  },
  {
    id: "3",
    titulo: "Tarefa 3",
    concluida: false,
  },
];

const HomeScreen = ({ onPress, text }: BotaoProps) => {
  const nome = "Martong";
  const idade = 21;
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("Engenharia Informatica");
  const valida = curso.length > 0;
  const [filtro, setFiltro] = useState<Filtro>('todas');
  const [tarefas, setTarefas] = useState<Tarefa[]>(data);
  const [novaTarefa, setNovaTarefa] = useState("");
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Header title="top 10 sites de usro" />
        <Text>{nome}</Text>
        <Text>{idade + 10}</Text>
        <Text>{curso}</Text>
        <Text>{email}</Text>

        export default function AppNavigator() {
          return (
            <NavigationContainer>
              <Stack.Navigator initualRouteName="apresentacao">
                <Stack.Screen name="apresentacao" component={apresentacaoscreen} /> {/*unfinished */}
              
            </NavigationContainer>
          );
        }

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
        />

        <Button onPress={() => setCurso("Novo Curso")} title="clica me twin" />

        <Image
          source={require("./../../assets/images/icon.png")}
          style={{ width: 150, height: 150 }}
        />

        <Text>{valida ? "Válido" : "Inválido"}</Text>

        <Text style={{ fontSize: 20 }}>
          mano ursu engarçado <Text style={{ fontWeight: "bold" }}>longo</Text>
        </Text>

        function tarefasVisiveis() {
        if (filtro === 'porFazer') 
        {
          return tarefas.filter((t) => !t.concluida);
        }
          if (filtro === 'concluidas') 
        {
          return tarefas.filter((t) => t.concluida);
        }
        return tarefas;
      }
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.7}
          onPress={() => Alert.alert("Toque")}
          onLongPress={() => Alert.alert("Longo")}
        >
          <Text style={styles.texto}>Guardar</Text>
        </TouchableOpacity>

        <Contador />

        <AppButton
          titulo="aqui brah"
          onPress={() => Alert.alert("ok menino boy")}
        />

        {/* add tarefinha */}
        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Digite a nova tarefa"
        />
        <AppButton
          onPress={() => {
            if (!novaTarefa.trim()) return;
            setTarefas([
              ...tarefas,
              {
                id: Date.now().toString(),
                titulo: novaTarefa,
                concluida: false,
              },
            ]);
            setNovaTarefa("");
          }}
          titulo="Adicionar Tarefa"
        />

        {/* Rcards */}
        {tarefas.map((tarefa) => (
          <Card
            key={tarefa.id}
            title={tarefa.titulo}
            concluida={tarefa.concluida}
            onConcluir={() =>
              setTarefas(
                tarefas.map((t) =>
                  t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t,
                ),
              )
            }
            onDelete={() =>
              setTarefas(tarefas.filter((t) => t.id !== tarefa.id))
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
  },
  botao: {
    backgroundColor: "#83ba44",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  texto: {
    color: "#550303",
    fontSize: 16,
  },
});

export default HomeScreen;
