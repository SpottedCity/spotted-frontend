import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

// Ten layout zarządza zakładkami w aplikacji, tymi w tabs
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.textMuted,
        headerShown: false,
        tabBarButton: HapticTab
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Odkrywaj',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />
        }}
      />
    </Tabs>
  );
}
