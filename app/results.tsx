import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Results() {
  const score = 5; // Aquí puedes obtener el puntaje real del estado o de un contexto
  const totalQuestions = 10; // Total de preguntas

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <Text style={styles.score}>Puntaje: {score} / {totalQuestions}</Text>
      <Link href="/profile" style={styles.link}>Ver perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    marginTop: 10,
    color: '#007AFF',
    textAlign: 'center',
  },
});