import { Slot } from 'expo-router';
import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function Layout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: '#002F6C',
                },
                headerTintColor: '#FFFFFF',
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#D0E2FF',
                tabBarStyle: {
                    backgroundColor: '#002F6C',
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = 'home';

                    if (route.name === '(tabs)') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'teams') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
            })}
        >
            <Tabs.Screen
                name="(tabs)"
                options={{
                    title: 'Home',
                    href: '/',
                }}
            />
            <Tabs.Screen
                name="teams"
                options={{
                    title: 'Teams',
                }}
            />
        </Tabs>
    );
}
