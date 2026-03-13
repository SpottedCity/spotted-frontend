import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import AntDesign from '@expo/vector-icons/AntDesign'; // ikona kłódki
import Entypo from '@expo/vector-icons/Entypo'; // ikona logowania
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // ikona rejestracji

// Modal wyświetlany, gdy użytkownik próbuje wykonać operację wymagającą autoryzacji, ale nie jest zalogowany. Zawiera linki do logowania i rejestracji.
export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <AntDesign name="lock" size={100} color="#ffc8b6" style={styles.iconLock} />
      <ThemedText type="title">Operacja wymaga autoryzacji!</ThemedText>
      <ThemedText style={styles.subtitle} type="subtitle">
        zaloguj lub zarejestruj się poniżej
      </ThemedText>
      {/*TODO: Dodać do linków formularze logowania i rejestracji*/}
      <ThemedView style={styles.linkContainer}>
        <Link href="/" dismissTo style={styles.link}>
          {/* Dodajemy ten kontener, który wymusi układ poziomy i centrowanie */}
          <ThemedView style={styles.contentWrapper}>
            <Entypo name="login" size={24} color="#ffc8b6" style={styles.iconLogin} />
            <ThemedText style={styles.text}>Zaloguj się</ThemedText>
          </ThemedView>
        </Link>
        <Link href="/" dismissTo style={styles.link}>
          <ThemedView style={styles.contentWrapper}>
            <MaterialCommunityIcons
              name="account-box-edit-outline"
              size={24}
              color="#ffc8b6"
              style={styles.iconLogin}
            />
            <ThemedText style={styles.text}>Zarejestruj się</ThemedText>
          </ThemedView>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

// Style dla modala, w tym styl dla linków, ikon i tekstu
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  // Content wrapper to kontener wewnątrz linku, który ustawia ikonę obok tekstu i centrowanie
  contentWrapper: {
    flexDirection: 'row', // Ikona obok tekstu
    alignItems: 'center', // Centrowanie w pionie
    justifyContent: 'center', // Centrowanie w poziomie
    backgroundColor: 'transparent', // ThemedView może mieć domyślne tło, ukrywamy je
  },
  linkContainer: {
    flexDirection: 'row',
    margin: 20,
    gap: 20,
  },
  link: {
    width: 170,
    backgroundColor: '#B51A2B',
    textAlign: 'center',
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
    shadowColor: '#b1b1b1',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    color: '#ffc8b6',
  },
  subtitle: {
    marginTop: 15,
    color: '#8f8f8f',
  },
  iconLock: {
    marginBottom: 50,
  },
  iconLogin: {
    marginRight: 10,
  },
});
