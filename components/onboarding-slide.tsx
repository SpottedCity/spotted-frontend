import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';

interface SlideProps {
  title: string;
  text: string;
  animationSource: any;
  width: number;
}

const OnboardingSlide = ({ title, text, animationSource, width }: SlideProps) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.contentWrapper}>
        <LottieView
          autoPlay
          loop={true}
          style={styles.animation}
          source={animationSource}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  contentWrapper: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20
  },
  animation: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 16,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24
  }
});

export default OnboardingSlide;
