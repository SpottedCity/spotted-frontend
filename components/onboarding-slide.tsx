import React from 'react'; // <-- Tego brakowało, TS czasami głupieje bez tego
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';

interface SlideProps {
  title: string;
  text: string;
  animationSource: any;
}

const OnboardingSlide = ({ title, text, animationSource }: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.animationWrapper}>
        <LottieView autoPlay loop={true} style={styles.animation} source={animationSource} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF'
  },
  animationWrapper: {
    height: 300,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  animation: {
    width: 250,
    height: 250
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 16,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24
  }
});

export default OnboardingSlide;
