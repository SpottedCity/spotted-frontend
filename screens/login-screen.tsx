import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

export default function LoginScreen() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <View>
      <Text>Onboarding screen</Text>
      <Button title="Next" onPress={handleNext} />
      <Button title="Previous" onPress={handlePrevious} />
    </View>
  );
}
