import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuCourse({ selectedMenu, setSelectedMenu }) {
    return (
        <View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={() => setSelectedMenu("myStats")}>
                    <Ionicons name={selectedMenu === "myStats" ? "person" : "person-outline"} size={24} color="#fff" />
                    <Text style={[
                        styles.menuButtonText,
                        selectedMenu === "myStats" && styles.selectedMenuText
                    ]}>My stats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => setSelectedMenu("flashcards")}>
                <Ionicons name={selectedMenu === "flashcards" ? "school" : "school-outline"} size={24} color="#fff" />
                    <Text style={[
                        styles.menuButtonText,
                        selectedMenu === "flashcards" && styles.selectedMenuText
                    ]}>Flashcards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => setSelectedMenu("leaderboard")}>
                    <Ionicons name={selectedMenu === "leaderboard" ? "bar-chart" : "bar-chart-outline"} size={24} color="#fff" />
                    <Text style={[
                        styles.menuButtonText,
                        selectedMenu === "leaderboard" && styles.selectedMenuText
                    ]}>Leaderboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuButton: {
        padding: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 12,
    },
    selectedMenuText: {
        fontWeight: 'bold',
    },
})
