import { View, Text, StyleSheet } from 'react-native';
import OnboardingSlide from '@/components/onboarding-slide';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function HomeScreen() {
  const onboardingData = [
    {
      id: '1',
      title: 'Po co mi to?',
      text: 'Omijaj korki i dowiaduj się o awariach w Twoim mieście.',
      animationSource: require('../assets/onboarding/Thinking.json')
    },
    {
      id: '2',
      title: 'Widzisz problem? Zgłoś go!',
      text: 'Dziura w drodze, wypadek czy opóźniony autobus? Wystarczy kilka kliknięć, aby ostrzec innych.',
      animationSource: require('../assets/onboarding/Alert.json')
    },
    {
      id: '3',
      title: 'Pomagajmy sobie nawzajem',
      text: 'Razem tworzymy bezpieczniejsze miasto. Twoje zgłoszenie może uratować komuś dzień.',
      animationSource: require('../assets/onboarding/Team.json')
    },
    {
      id: '4',
      title: 'Zobacz, co dzieje się obok',
      text: 'Abyśmy mogli pokazać Ci najświeższe zgłoszenia z okolicy oraz dodać twoje, potrzebujemy dostępu do lokalizacji.',
      animationSource: require('../assets/onboarding/Location.json')
    }
  ];

  const handleDone = () => {
    console.log('Onboarding zakończony! Przenieś mnie do logowania.');
    // TODO routing to login screen
  };

  const renderNextButton = () => (
    <View style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>Dalej</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>Zaczynamy!</Text>
    </View>
  );

  const renderSkipButton = () => (
    <View style={styles.transparentButton}>
      <Text style={styles.skipText}>Pomiń</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={onboardingData}
        renderItem={({ item }) => (
          <OnboardingSlide
            title={item.title}
            text={item.text}
            animationSource={item.animationSource}
          />
        )}
        onDone={handleDone}
        showSkipButton={true}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  primaryButton: {
    backgroundColor: '#F97316',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  transparentButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  skipText: {
    color: '#64748B',
    fontWeight: '600',
    fontSize: 16
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 8,
    height: 8,
    marginTop: 15
  },
  activeDot: {
    backgroundColor: '#F97316',
    width: 20,
    height: 8,
    marginTop: 15
  }
});
