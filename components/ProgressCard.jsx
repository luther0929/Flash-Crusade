import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, getResponsiveValue } from '../utils/responsive';

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
        padding: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: getResponsiveValue({ small: scale(10), medium: scale(12), large: scale(16) }),
        marginHorizontal: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        marginVertical: getResponsiveValue({ small: verticalScale(6), medium: verticalScale(8), large: verticalScale(10) }),
    },
    hexagonContainer: {
        width: getResponsiveValue({ small: scale(60), medium: scale(80), large: scale(90) }),
        height: getResponsiveValue({ small: scale(60), medium: scale(80), large: scale(90) }),
        justifyContent: 'center',
        alignItems: 'center',
    },
    hexagon: {
        width: getResponsiveValue({ small: scale(40), medium: scale(55), large: scale(65) }),
        height: getResponsiveValue({ small: scale(40), medium: scale(55), large: scale(65) }),
        borderWidth: getResponsiveValue({ small: 1.5, medium: 2, large: 2.5 }),
        borderColor: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
    },
    levelNumberText: {
        color: '#fff',
        fontSize: getResponsiveValue({ small: scale(18), medium: scale(24), large: scale(28) }),
        fontWeight: 'bold',
        transform: [{ rotate: '-45deg' }],
    },
    xpContainer: {
        justifyContent: 'center',
        gap: getResponsiveValue({ small: scale(6), medium: scale(8), large: scale(10) }),
        flexDirection: 'column',
        height: getResponsiveValue({ small: verticalScale(80), medium: verticalScale(100), large: verticalScale(110) }),
        width: getResponsiveValue({ small: scale(140), medium: scale(190), large: scale(220) }),
    },
    xpText: {
        color: '#fff',
        fontSize: getResponsiveValue({ small: scale(12), medium: scale(14), large: scale(16) }),
        opacity: 0.8,
        padding: getResponsiveValue({ small: scale(3), medium: scale(4), large: scale(5) }),
    },
    xpBar: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: getResponsiveValue({ small: verticalScale(14), medium: verticalScale(18), large: verticalScale(20) }),
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: getResponsiveValue({ small: scale(4), medium: scale(6), large: scale(8) }),
        overflow: 'hidden',
    },
    xpBarFill: {
        height: '100%',
        backgroundColor: '#F28C82',
        borderRadius: getResponsiveValue({ small: scale(4), medium: scale(6), large: scale(8) }),
    },
    toNextLevelContainer: {
        padding: getResponsiveValue({ small: scale(4), medium: scale(6), large: scale(8) }),
        alignItems: 'flex-end',
    },
    toNextLevelText: {
        color: '#fff',
        fontSize: getResponsiveValue({ small: scale(10), medium: scale(12), large: scale(14) }),
        opacity: 0.8,
    },
});