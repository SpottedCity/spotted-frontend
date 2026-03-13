import CustomButton from '@/components/custom-button';
import GoogleSignInButton from '@/components/google-sign-in-button';
import { Colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleLoginMock = () => {
    console.log('logowanie emailem: ${email, hasło: ${password}');
    router.replace('/(tabs)/home');
  };
  const handleGoogleLogin = () => {
    router.replace('/(tabs)/home');
  };

  const handleLoginButton = () => {
    router.replace('/login');
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
                <Text style={styles.title}>Witamy nowego użytkownika!</Text>
                <Text style={styles.subtitle}>
                  Zarejestruj się, aby dodawać zgłoszenia i pomoagać innym.
                </Text>
              </View>
              <View style={styles.form}>
                <Text style={styles.inputLabel}>Nazwa Użytkownika</Text>
                <TextInput
                  style={styles.input}
                  placeholder="np. podróżnik20"
                  placeholderTextColor={Colors.textMuted}
                  autoCapitalize="none"
                  value={username}
                  onChangeText={setUsername}
                />
                <Text style={styles.inputLabel}>Adres e-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="np. jan@kowalski.pl"
                  placeholderTextColor={Colors.textMuted}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.inputLabel}>Hasło</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Wpisz swoje hasło"
                  placeholderTextColor={Colors.textMuted}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <View style={styles.bottomSection}>
              <CustomButton title="Zarejestruj się" iconName="user" onPress={handleLoginMock} />
              <GoogleSignInButton onPress={handleGoogleLogin} />

              <View style={styles.registerPrompt}>
                <Text style={styles.registerText}>Masz już konto? </Text>
                <Text style={styles.registerText} onPress={handleLoginButton}>
                  Zaloguj się
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%'
  },

  topSection: {
    flex: 1,
    justifyContent: 'center'
  },
  bottomSection: {
    marginTop: 20
  },

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
    marginBottom: 20,

    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1
  },
  forgotPassword: {
    color: Colors.accent,
    fontWeight: '600',
    textAlign: 'right',
    marginTop: -10,
    marginBottom: 30
  },

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
