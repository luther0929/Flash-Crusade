import { View, Text, StyleSheet } from 'react-native';
import ProgressCard from '../ProgressCard';
import StatsCard from '../StatsCard';
import RankCard from '../RankCard';
import BadgeCard from '../BadgeCard';

export default function MyStatsPage({ userXp = 0, userLevel = 1 }) {
    return (
        <View>
            <View>
                <ProgressCard xp={userXp} level={userLevel} />
                <RankCard />
                <BadgeCard />
                <StatsCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

