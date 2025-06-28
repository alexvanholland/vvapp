// app/teams/index.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const teams = [
    { id: 'jo15-1', naam: 'JO15-1' },
    { id: 'jo17-2', naam: 'JO17-2' },
    { id: 'senioren-1', naam: 'Senioren 1' },
];

export default function TeamsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Teams</Text>
            {teams.map((team) => (
                <Link key={team.id} href={`/teams/${team.id}`} asChild>
                    <Pressable style={styles.card}>
                        <Text style={styles.name}>{team.naam}</Text>
                    </Pressable>
                </Link>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    card: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
    },
    name: { fontSize: 18 },
});
