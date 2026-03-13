import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Dimensions, FlatList, Pressable, Text, View, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLoginMock = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#F8FAFC', '#FFEDD5']}
      style={styles.container}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
