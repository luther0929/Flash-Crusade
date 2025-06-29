import { View, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuCourse from '../MenuCourse';
import MyStatsPage from './MyStatsPage';
import FlashcardSetPage from './FlashcardSetPage';
import LeaderboardPage from './LeaderboardPage';

export default function CoursePage() {
    const courseTitle = "Programming Principles";
    const courseCode = "CS101";
    const [selectedMenu, setSelectedMenu] = useState("myStats");
    const [userXp, setUserXp] = useState(0);
    const [userLevel, setUserLevel] = useState(1);
    const navigation = useNavigation();
    const route = useRoute();
    const fadeAnim = useRef(new Animated.Value(1)).current;

    // Load saved XP and level on component mount
    useEffect(() => {
        loadUserProgress();
    }, []);

    // Handle data passed from StudyPage
    useEffect(() => {
        if (route.params?.fromStudy) {
            setUserXp(route.params.updatedXp);
            setUserLevel(route.params.updatedLevel);
        }
    }, [route.params]);

    const loadUserProgress = async () => {
        try {
            const savedXp = await AsyncStorage.getItem('userXp');
            const savedLevel = await AsyncStorage.getItem('userLevel');
            
            if (savedXp !== null) {
                setUserXp(parseInt(savedXp));
            }
            if (savedLevel !== null) {
                setUserLevel(parseInt(savedLevel));
            }
        } catch (error) {
            console.log('Error loading user progress:', error);
        }
    };

    const handleMenuChange = (newMenu) => {
        // Fade out
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            // Change menu and fade in
            setSelectedMenu(newMenu);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={styles.courseNameContainer}>
                    <Text style={styles.courseTitle}>{courseTitle}</Text>
                    <Text style={styles.courseCode}>{courseCode}</Text>
                </View>
            </View>
            <MenuCourse courseTitle={courseTitle} courseCode={courseCode} selectedMenu={selectedMenu} setSelectedMenu={handleMenuChange} />
            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
                {selectedMenu === "myStats" && (
                    <MyStatsPage userXp={userXp} userLevel={userLevel} />
                )}
                {selectedMenu === "flashcards" && (
                    <FlashcardSetPage />
                )}
                {selectedMenu === "leaderboard" && (
                    <LeaderboardPage />
                )}
            </Animated.View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    courseNameContainer: {
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    courseTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    courseCode: {   
        color: '#fff',
        fontSize: 16,
        fontWeight: 'semi-bold',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
});