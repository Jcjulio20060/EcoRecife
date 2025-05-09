import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  titulo: string;
  subtitulo: string;
  onPress: () => void;
}

export default function MenuItem({ icon, titulo, subtitulo, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#3498db" />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitulo: {
    color: '#888',
  },
});
