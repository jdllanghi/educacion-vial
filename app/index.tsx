import { router } from 'expo-router'; // Importamos el router para la navegación
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDUCACION VIAL</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Recordar contraseña</Text>
      </TouchableOpacity>
      
      {/* Botón para iniciar sesión */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/test')} // Navega a la pantalla del test
      >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
      
      <Text style={styles.registerText}>
        ¿No tienes cuenta?{" "}
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Regístrate</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#54e3ea',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#f8fafc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#c6d3e0',
    color: '#ffffff',
  },
  link: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  registerLink: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
});