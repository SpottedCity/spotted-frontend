import CustomButton from '@/components/custom-button';
import CustomInput from '@/components/custom-input';
import { Colors } from '@/constants/theme';
import { mockCurrentUser } from '@/constants/user-data';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const LogOutMock = () => {
    console.log('Wylogowano');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[Colors.surface, Colors.background, Colors.gradientEnd]}
        style={styles.container}
      >
        {/* ScrollView for smaller devices */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Profil Image Container */}
          <View style={styles.profileImageContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('@/assets/images/pfp.jpg')} style={styles.profileImage} />
              <Pressable
                style={styles.editIconContainer}
                onPress={() => console.log('Edycja zdjęcia')}
              >
                <Feather name={'camera'} size={18} color={Colors.white} />
              </Pressable>
            </View>
          </View>

          {/* User Data Section */}
          <View style={styles.nameRoleContainer}>
            <Text style={styles.name}>{mockCurrentUser.username}</Text>
            <Text style={styles.role}>{mockCurrentUser.trustLevel}</Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputFieldsContainer}>
            <CustomInput
              label="Adres E-mail"
              iconName="mail-outline"
              value={mockCurrentUser.email}
              editable={false}
            />
            <CustomInput
              label="Miejscowość"
              iconName="location-outline"
              value={mockCurrentUser.city}
            />
          </View>

          {/* LOG OUT  */}
          <View style={styles.buttonContainer}>
            <CustomButton title="Wyloguj się" onPress={LogOutMock} iconName="sign-out" />
          </View>
        </ScrollView>
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
    padding: 24
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  imageWrapper: {
    position: 'relative' // WAŻNE: To sprawia, że ikonka pozycjonuje się względem tego diva
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: Colors.white
  },
  editIconContainer: {
    position: 'absolute', // HIT: Wyrwane z normalnego układu
    bottom: 0, // Przylepione do dołu zdjęcia
    right: 0, // Przylepione do prawej strony zdjęcia
    height: 36,
    width: 36,
    backgroundColor: Colors.accent,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.white // Biała ramka, żeby ładnie odcinało się od zdjęcia
  },
  nameRoleContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4
  },
  role: {
    fontSize: 15,
    color: '#64748B',
    fontWeight: '500'
  },
  inputFieldsContainer: {
    marginTop: 10,
    marginBottom: 30
  },
  buttonContainer: {
    marginTop: 'auto', // Zepchnie przycisk na sam dół ekranu, jeśli jest miejsce
    paddingBottom: 60
  }
});
