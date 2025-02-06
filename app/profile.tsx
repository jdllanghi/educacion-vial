import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>Progreso: 70%</Text>
      <Text style={styles.text}>Último puntaje: 8/10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#a1c2c4', // Cambiar el color de fondo a rojo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', // Cambiar el color del título a blanco para mejor contraste
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white', // Cambiar el color del texto a blanco para mejor contraste
  },
});
