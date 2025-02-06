import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

// Definición de la interfaz para las preguntas
interface Question {
  question: string;
  options: string[];
  answer: string;
}

// Lista de preguntas para niños sobre el semáforo y su comportamiento como peatones
const questions: Question[] = [
  {
    question: '¿Qué debes hacer cuando el semáforo peatonal está en verde?',
    options: ['Cruzarte la calle.', 'Esperar a que cambie a rojo.', 'Mirar a ambos lados y cruzar.'],
    answer: 'Mirar a ambos lados y cruzar.',
  },
  {
    question: '¿Qué significa el semáforo peatonal cuando está en rojo?',
    options: ['Puedes cruzar.', 'Debes esperar.', 'Es seguro correr.'],
    answer: 'Debes esperar.',
  },
  {
    question: 'Si el semáforo peatonal está parpadeando en verde, ¿qué debes hacer?',
    options: ['Cruzar rápidamente.', 'Esperar a que se ponga en verde fijo.', 'Ignorar el semáforo.'],
    answer: 'Cruzar rápidamente.',
  },
  {
    question: '¿Qué debes hacer si el semáforo para los autos está en rojo, pero no hay semáforo peatonal?',
    options: ['Cruzar sin mirar.', 'Esperar a que cambie a verde.', 'Mirar a ambos lados y cruzar con cuidado.'],
    answer: 'Mirar a ambos lados y cruzar con cuidado.',
  },
  {
    question: '¿Por qué es importante usar el paso de peatones?',
    options: ['Porque es más seguro.', 'Porque es más rápido.', 'Porque los autos no pueden pasar.'],
    answer: 'Porque es más seguro.',
  },
];

// Componente principal
const Test: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);

  // Función para manejar la respuesta seleccionada
  const handleAnswer = (selectedAnswer: string): void => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsTestCompleted(true); // Marcar el test como completado
    }
  };

  // Función para mostrar el mensaje final basado en el puntaje
  const getFinalMessage = (): string => {
    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
      return '¡Excelente trabajo! Respondiste todo correctamente. ¡Eres un experto en seguridad vial!';
    } else if (percentage >= 70) {
      return '¡Buen trabajo! Tienes un buen conocimiento sobre seguridad vial, pero aún puedes mejorar.';
    } else {
      return 'Necesitas practicar más. Recuerda siempre seguir las reglas de seguridad vial.';
    }
  };

  return (
    <View style={styles.container}>
      {isTestCompleted ? (
        // Mostrar mensaje final cuando el test esté completado
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Resultados</Text>
          <Text style={styles.score}>Puntaje: {score}/{questions.length}</Text>
          <Text style={styles.message}>{getFinalMessage()}</Text>
        </View>
      ) : (
        // Mostrar preguntas mientras el test no esté completado
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/semaforo.png')} // Ruta de la imagen
              style={styles.image}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.title}>Pregunta {currentQuestion + 1}</Text>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
            {questions[currentQuestion].options.map((option, index) => (
              <View key={index} style={styles.buttonContainer}>
                <Button title={option} onPress={() => handleAnswer(option)} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#a1c2c4', // Color de fondo
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    width: 300,
    height: 300,
  },
  questionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'right',
  },
  buttonContainer: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Test;