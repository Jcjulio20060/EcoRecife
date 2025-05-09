import { Stack } from 'expo-router';

export default function Layout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="products" options={{ title: 'Produtos' }} />
        <Stack.Screen name="agendamento" options={{ title: 'Agendamentos' }} />
        <Stack.Screen name="forms" options={{ title: 'Formulário' }} />
      </Stack>
    );
  }