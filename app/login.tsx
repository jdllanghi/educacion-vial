import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router'; // Importamos el router para la navegación

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el registro
  const handleRegister = () => {
    console.log('Registro exitoso:', { username, email, password });
    // Aquí puedes agregar la lógica para enviar los datos al backend
    // Por ejemplo, usando fetch para registrar al usuario
    router.push('/'); // Navegar a la pantalla de inicio de sesión después del registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>REGISTRARSE</Text>
      </TouchableOpacity>
      
      <Text style={styles.loginText}>
        ¿Ya tienes cuenta?{" "}
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.loginLink}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

// Estilos para la pantalla de registro
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#54e3ea', // Fondo de color celeste
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
    color: '#000000', // Color del texto dentro del campo
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
  loginText: {
    fontSize: 14,
    textAlign: 'center',
  },
  loginLink: { // Asegúrate de que este estilo esté definido
    color: '#007AFF', // Color azul para el enlace de inicio de sesión
    fontWeight: 'bold',
  },
});