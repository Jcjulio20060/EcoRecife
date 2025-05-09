import { View, Text, StyleSheet } from 'react-native';

interface ColetaResumoCardProps {
  cor: string;
  titulo: string;
  valor: string | number;
  icon?: React.ReactNode;
}

export default function ColetaResumoCard({ cor, titulo, valor, icon }: ColetaResumoCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: cor }]}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    margin: 4,
  },
  valor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  titulo: {
    fontSize: 14,
    color: '#fff',
  },
});
