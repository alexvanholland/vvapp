import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const teams = [
    {
        id: 'jo15-1',
        naam: 'JO15-1',
        categorie: 'JO15',
        trainer: 'Alex van Holland',
        spelers: [
            { naam: 'Jens de Jong', positie: 'Aanvaller', nummer: 9 },
            { naam: 'Sam Bakker', positie: 'Verdediger', nummer: 4 },
        ],
    },
    {
        id: 'jo17-2',
        naam: 'JO17-2',
        categorie: 'JO17',
        trainer: 'Pietje Puk',
        spelers: [
            { naam: 'Lars Visser', positie: 'Middenveld', nummer: 8 },
            { naam: 'Noah de Vries', positie: 'Keeper', nummer: 1 },
        ],
    },
    {
        id: 'senioren-1',
        naam: 'Senioren 1',
        categorie: 'Senioren',
        trainer: 'Coach Pietersen',
        spelers: [
            { naam: 'Bas Jansen', positie: 'Aanvaller', nummer: 10 },
            { naam: 'Tim de Groot', positie: 'Verdediger', nummer: 3 },
        ],
    },
];

export default function TeamDetailScreen() {
    const { id } = useLocalSearchParams();
    const team = teams.find((t) => t.id === id);

    if (!team) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Team niet gevonden</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{team.naam}</Text>
            <Text style={styles.subtitle}>Categorie: {team.categorie}</Text>
            <Text style={styles.subtitle}>Trainer: {team.trainer}</Text>

            <View style={styles.spelersContainer}>
                <Text style={styles.sectionTitle}>Spelers</Text>
                {team.spelers.map((speler, index) => (
                    <View key={index} style={styles.spelerCard}>
                        <Text style={styles.spelerNaam}>{speler.naam}</Text>
                        <Text style={styles.spelerInfo}>Positie: {speler.positie}</Text>
                        <Text style={styles.spelerInfo}>Nummer: {speler.nummer}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#b50000', // DSVP-rood
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 12,
        color: '#000',
    },
    spelersContainer: {
        marginTop: 16,
    },
    spelerCard: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#b50000',
    },
    spelerNaam: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    spelerInfo: {
        fontSize: 14,
        color: '#444',
    },
});
