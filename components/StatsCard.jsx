import { View, Text, StyleSheet } from 'react-native';

export default function StatsCard() {
    const streak = 10;
    const bestStreak = 10;
    const answered = 10;
    return (
        <View style={styles.container}>           
            <View style={styles.statContainer}>
                <Text style={styles.text}>Current Streak</Text>
                <Text style={styles.text}>{streak}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.text}>Best Streak</Text>
                <Text style={styles.text}>{bestStreak}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.text}>Answered</Text>
                <Text style={styles.text}>{answered}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        gap: 10,
    },
    statContainer: {
        width: '100%',
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'regular',
        color: 'white',
    },
});    