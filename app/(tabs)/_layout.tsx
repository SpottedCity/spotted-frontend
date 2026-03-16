import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme'; // Zakładam, że tu jest Twój pomarańczowy
import { BlurView } from 'expo-blur';
import { Dimensions, Platform, Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 3;

function MyCustomTabBar({ state, descriptors, navigation }: any) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(state.index * TAB_WIDTH) }]
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {/* Animowane "szkiełko" */}
        <Animated.View style={[styles.slider, animatedStyle]}>
          <BlurView intensity={20} tint="light" style={styles.blur} />
        </Animated.View>

        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Pobieramy nazwę z opcji (np. title: 'Mapa') lub używamy nazwy pliku
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName =
            route.name === 'home'
              ? 'map.fill'
              : route.name === 'report'
                ? 'plus.circle.fill'
                : 'person.fill';

          return (
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
              <IconSymbol
                name={iconName as any}
                size={24}
                color={isFocused ? Colors.accent : '#888'}
              />
              {/* DODAJEMY TEKST PONIŻEJ */}
              <Animated.Text style={[styles.label, { color: isFocused ? Colors.accent : '#888' }]}>
                {label}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <MyCustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // WYMUSZENIE CZARNEGO TŁA NA POZIOMIE SYSTEMOWYM
        tabBarBackground: () => <View style={{ flex: 1, backgroundColor: '#000' }} />
      }}
    >
      {/* tutaj można zmieniać nazwy pod ikonami */}
      <Tabs.Screen name="home" options={{ title: 'Mapa' }} />{' '}
      <Tabs.Screen name="report" options={{ title: 'Zgłoś' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // KLUCZ: Wysokość musi uwzględniać pasek gestów iOS
    height: Platform.OS === 'ios' ? 90 : 70,
    // Dodajemy tło tutaj, żeby "dziura" pod paskiem też była czarna
    backgroundColor: '#000',
    // Zaokrąglamy tylko górę tutaj, żeby kontener sam w sobie był ładny
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  background: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    paddingTop: 12
    // Usuwamy stąd backgroundColor i promienie,
    // bo teraz rządzi nimi nadrzędny 'container'
  },
  slider: {
    position: 'absolute',
    top: 5, // mały margines od góry paska
    width: TAB_WIDTH - 20,
    height: 45,
    marginHorizontal: 10,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.15)'
  },
  blur: {
    ...StyleSheet.absoluteFillObject
  },
  tabItem: {
    flex: 1,
    height: 30, // Stała wysokość kontenera ikony
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  label: {
    fontSize: 11,
    fontWeight: '500'
  }
});
