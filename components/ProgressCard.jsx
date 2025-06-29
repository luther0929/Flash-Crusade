import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ xp = 0, level = 1 }) {
    const xpToNextLevel = level * 100;

    return (
        <View style={styles.container}>
            <View style={styles.hexagonContainer}>
                <View style={styles.hexagon}>
                    <Text style={styles.levelNumberText}>{level}</Text>
                </View>
            </View>
            <View style={styles.xpContainer}>
                <Text style={styles.xpText}>{xp} XP</Text>
                <View style={styles.xpBar}>
                    <View style={[styles.xpBarFill, { width: `${(xp % xpToNextLevel) / xpToNextLevel * 100}%` }]}></View>
                </View>
                <View style={styles.toNextLevelContainer}>
                    <Text style={styles.toNextLevelText}>{xpToNextLevel - (xp % xpToNextLevel)} XP to lvl. {level + 1}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    hexagonContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hexagon: {
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
    },
    levelNumberText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        transform: [{ rotate: '-45deg' }],
    },
    xpContainer: {
        justifyContent: 'center',
        gap: 8,
        flexDirection: 'column',
        height: 100,
        width: 190,
    },
    xpText: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.8,
        padding: 4,
    },
    xpBar: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 6,
        overflow: 'hidden',
    },
    xpBarFill: {
        height: '100%',
        backgroundColor: '#F28C82',
        borderRadius: 6,
    },
    toNextLevelContainer: {
        padding: 6,
        alignItems: 'flex-end',
    },
    toNextLevelText: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.8,
    },
});