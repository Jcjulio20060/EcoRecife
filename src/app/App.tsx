import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ColetaResumoCard from '../components/ColetaResumoCard';
import ProgressoNivel from '../components/ProgressoNivel';
import MenuItem from '../components/MenuItem';

export default function ColetasScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Suas coletas</Text>
      <Text style={styles.meta}>Sua meta: 8 coletas por mês</Text>

      <ProgressoNivel nivel="Bronze" />

      <View style={styles.coletas}>
        <ColetaResumoCard cor="#f88" titulo="Eletro" valor="3" />
        <ColetaResumoCard cor="#8f8" titulo="Móveis" valor="40" />
        <ColetaResumoCard cor="#c8f" titulo="Outros" valor="1" />
        <ColetaResumoCard cor="#fbb" titulo="Canceladas" valor="0" />
      </View>

      <MenuItem icon="cube-outline" titulo="Meus produtos" subtitulo="Veja os produtos resgatados!" onPress={() => console.log('Meus produtos pressed')} />
      <MenuItem icon="calendar-outline" titulo="Agendamento" subtitulo="Agende sua coleta porta-a-porta!" onPress={() => console.log('Agendamento pressed')} />
      <MenuItem icon="location-outline" titulo="Ecopontos" subtitulo="Encontre ecopontos próximos de você!" onPress={() => console.log('Ecopontos pressed')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  meta: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  coletas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
