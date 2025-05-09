import { View, Text, StyleSheet } from 'react-native';

interface ProgressoNivelProps {
  nivel: string; // Replace 'string' with the appropriate type for 'nivel'
}

export default function ProgressoNivel({ nivel }: ProgressoNivelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seu nível de coletor atual é {nivel}</Text>
      <View style={styles.barra}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  barra: {
    height: 8,
    backgroundColor: '#AADD88',
    borderRadius: 20,
    width: '20%',
  },
});
