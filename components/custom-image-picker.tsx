import { SIZES } from '@/constants/sizes';
import { Colors } from '@/constants/theme';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface CustomImagePickerProps {
  imageUri: string | null;
  onImageSelect: (uri: string | null) => void;
  label?: string;
  circular?: boolean;
}

export default function CustomImagePicker({
  imageUri,
  onImageSelect,
  label = 'Dodaj zdjęcie',
  circular = false
}: CustomImagePickerProps) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: circular ? [1, 1] : [4, 3],
      quality: 0.8
    });

    if (!result.canceled) {
      onImageSelect(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    onImageSelect(null);
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <View style={[styles.imageContainer, circular && styles.circual]}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Pressable style={styles.removeButton} onPress={removeImage}>
            <Feather name="x" size={SIZES.icon_sm} color={Colors.white} />
          </Pressable>
        </View>
      ) : (
        <Pressable style={[styles.emptyContainer, circular && styles.circular]} onPress={pickImage}>
          <View style={styles.iconCircle}>
            <Feather name="camera" size={SIZES.icon_md} color={Colors.primary} />
          </View>
          <Text style={styles.labelText}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: SIZES.sm
  }
});
