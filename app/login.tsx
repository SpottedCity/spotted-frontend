import CustomButton from '@/components/custom-button';
import GoogleSignInButton from '@/components/google-sign-in-button';
import { Colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError('Adres e-mail jest wymagany.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Wpisz poprawny adres e-mail.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Hasło jest wymagane.');
      isValid = false;
    }

    return isValid;
  };

  const router = useRouter();

  const handleLoginMock = () => {
    if (!validateForm()) {
      return;
    }
    console.log('logowanie emailem: ${email, hasło: ${password}');
    router.replace('/(tabs)/home');
  };
  const handleGoogleLogin = () => {
    router.replace('/(tabs)/home');
  };

  const handleRegisterButton = () => {
    router.replace('/register');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[Colors.surface, Colors.background, Colors.gradientEnd]}
        style={styles.container}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.topSection}>
              <View style={styles.header}>
                <Text style={styles.title}>Witaj z powrotem!</Text>
                <Text style={styles.subtitle}>
                  Zaloguj się, aby dodawać zgłoszenia i pomoagać innym.
                </Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.inputLabel}>Adres e-mail</Text>
                <TextInput
                  style={[styles.input, emailError ? styles.inputError : null]}
                  placeholder="np. jan@kowalski.pl"
                  placeholderTextColor={Colors.textMuted}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                <Text style={styles.inputLabel}>Hasło</Text>
                <TextInput
                  style={[styles.input, passwordError ? styles.inputError : null]}
                  placeholder="Wpisz swoje hasło"
                  placeholderTextColor={Colors.textMuted}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                <Text style={styles.forgotPassword}>Zapomniałeś hasła?</Text>
              </View>
            </View>
            <View style={styles.bottomSection}>
              <CustomButton title="Zaloguj się" iconName="sign-in" onPress={handleLoginMock} />
              <GoogleSignInButton onPress={handleGoogleLogin} />

              <View style={styles.registerPrompt}>
                <Text style={styles.registerText}>Nie masz jeszcze konta? </Text>
                <Text style={styles.registerText} onPress={handleRegisterButton}>
                  Zarejestruj się
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1, // Pozwala ScrollView zająć cały ekran i poprawnie działać z flex
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
    maxWidth: 500, // Zabezpieczenie dla Weba
    alignSelf: 'center',
    width: '100%'
  },

  // --- KLOCKI GŁÓWNE ---
  topSection: {
    flex: 1, // To jest klucz! Rozpycha ten element, spychając bottomSection na dół
    justifyContent: 'center' // Trzyma formularz na środku pionowo
  },
  bottomSection: {
    marginTop: 20 // Odstęp od formularza
  },

  // --- NAGŁÓWEK ---
  header: {
    marginBottom: 40
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.primary,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textMuted,
    lineHeight: 24
  },

  // --- FORMULARZ (INPUTY) ---
  form: {
    width: '100%'
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
    marginLeft: 4
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 20, // Odstęp między inputami

    // Lekki cień dla inputów
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1
  },
  inputError: {
    borderColor: Colors.error,
    borderWidth: 1.5
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: -15,
    marginBottom: 15,
    marginLeft: 4
  },
  forgotPassword: {
    color: Colors.accent, // Pomarańczowy link
    fontWeight: '600',
    textAlign: 'right',
    marginTop: -10, // Lekko podciągamy do góry
    marginBottom: 30
  },

  // --- SEPARATOR (LUB) ---
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border
  },
  dividerText: {
    marginHorizontal: 10,
    color: Colors.textMuted,
    fontWeight: '600',
    fontSize: 14
  },

  registerPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24
  },
  registerText: {
    color: Colors.textMuted,
    fontSize: 15
  },
  registerLink: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
