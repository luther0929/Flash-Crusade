import { View, Text, StyleSheet, Image } from 'react-native';

export default function BadgeCard() {
    return (
        <View style={styles.container}>
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>Streak</Text>
                <Image source={require('../assets/images/badge/Master.png')} style={styles.badgeImage} />
                <Text style={styles.achievementText}>Spotless</Text>
            </View>
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>Accuracy</Text>
                <Image source={require('../assets/images/badge/Silver.png')} style={styles.badgeImage} />
                <Text style={styles.achievementText}>Sharp Shooter</Text>
            </View>
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>Speed</Text>
                <Image source={require('../assets/images/badge/Gold.png')} style={styles.badgeImage} />
                <Text style={styles.achievementText}>Speedster</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 24,
        padding: 1,
        borderRadius: 1,
        marginHorizontal: 16,
        marginVertical: 16,
    },
    badgeContainer: {
        gap: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.8,
        fontWeight: 'semi-bold',
    },
    achievementText: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.8,
        fontWeight: 'regular',
    },
    badgeImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
});