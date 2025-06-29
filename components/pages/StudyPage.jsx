import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Flashcard from '../Flashcard';   
import Button from '../Button';
import ProgressCard from '../ProgressCard';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef, useEffect } from 'react';
import { module1Questions } from '../../data/moduleQuestions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StudyPage() {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [streak, setStreak] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [showXpAnimation, setShowXpAnimation] = useState(false);
    const xpAnim = useRef(new Animated.Value(0)).current;
    const xpTextAnim = useRef(new Animated.Value(0)).current;

    const currentQuestion = module1Questions[currentQuestionIndex];
    const progress = currentQuestionIndex + 1;
    const totalQuestions = module1Questions.length;

    // Load saved XP and level on component mount
    useEffect(() => {
        loadUserProgress();
    }, []);

    const loadUserProgress = async () => {
        try {
            const savedXp = await AsyncStorage.getItem('userXp');
            const savedLevel = await AsyncStorage.getItem('userLevel');
            
            if (savedXp !== null) {
                setXp(parseInt(savedXp));
            }
            if (savedLevel !== null) {
                setLevel(parseInt(savedLevel));
            }
        } catch (error) {
            console.log('Error loading user progress:', error);
        }
    };

    const saveUserProgress = async (newXp, newLevel) => {
        try {
            await AsyncStorage.setItem('userXp', newXp.toString());
            await AsyncStorage.setItem('userLevel', newLevel.toString());
        } catch (error) {
            console.log('Error saving user progress:', error);
        }
    };

    // XP required for each level (increases by 100 per level)
    const getXpRequiredForLevel = (level) => {
        return level * 100;
    };

    const addXp = (amount) => {
        const newXp = xp + amount;
        
        // Check for level up
        const xpRequired = getXpRequiredForLevel(level);
        if (newXp >= xpRequired) {
            const newLevel = level + 1;
            setLevel(newLevel);
            // Reset XP to 0 after leveling up
            setXp(0);
            // Save the new level and reset XP
            saveUserProgress(0, newLevel);
        } else {
            setXp(newXp);
            // Save the new XP
            saveUserProgress(newXp, level);
        }

        // Show XP animation
        setShowXpAnimation(true);
        Animated.sequence([
            Animated.timing(xpAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(xpTextAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(xpTextAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowXpAnimation(false);
            xpAnim.setValue(0);
        });
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setStreak(streak + 1);
            // Add XP for correct answer
            addXp(20);
        } else {
            setStreak(0);
        }
        
        // Move to next question for both correct and wrong answers
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsFlipped(false); // Reset card to question side
        } else {
            // Quiz completed - save XP and level data
            navigation.navigate('HomePage', {
                finalXp: xp,
                finalLevel: level,
                fromStudy: true
            });
        }
    };

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleBackPress = () => {
        // Navigate back to CoursePage with current XP and level data
        navigation.navigate('CoursePage', {
            updatedXp: xp,
            updatedLevel: level,
            fromStudy: true
        });
    };

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={styles.courseNameContainer}>
                    <Text style={styles.moduleText}>Module 1</Text>
                    <Text style={styles.titleText}>Introduction to Python</Text>
                </View>
                <View style={styles.spacer} />
            </View>
      
            <ProgressCard xp={xp} level={level} />
     
            <View style={styles.progressContainer}>
                <View style={styles.flashcardContainer}>
                    <Flashcard 
                        question={currentQuestion.question}
                        answer={currentQuestion.answer}
                        isFlipped={isFlipped}
                        onFlip={handleCardFlip}
                    />
                </View>
                <View style={styles.progressTextContainer}>
                    <Text style={styles.progressText}>{progress}/{totalQuestions}</Text>
                    <Text style={styles.streakText}>Streak: {streak}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button icon="close-outline" onPress={() => handleAnswer(false)} color="#FF6B6B" />
                    <Button icon="checkmark-outline" onPress={() => handleAnswer(true)} color="#A8D5BA" />
                </View>
            </View>

            {/* XP Animation */}
            {showXpAnimation && (
                <Animated.View 
                    style={[
                        styles.xpAnimationContainer,
                        {
                            opacity: xpAnim,
                            transform: [{
                                translateY: xpAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -50],
                                })
                            }]
                        }
                    ]}
                >
                    <Animated.Text 
                        style={[
                            styles.xpAnimationText,
                            {
                                opacity: xpTextAnim,
                                transform: [{
                                    scale: xpTextAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.5, 1.2],
                                    })
                                }]
                            }
                        ]}
                    >
                        +50 XP!
                    </Animated.Text>
                </Animated.View>
            )}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 16,
        position: 'relative',
    },
    backButton: {
        padding: 8,
        position: 'absolute',
        left: 16,
        zIndex: 1,
    },
    courseNameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 32,
    },
    moduleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    spacer: {
        width: 40, // Same width as back button for balance
    },
    progressContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        margin: 12,
        padding: 2,
        borderRadius: 16,
    },
    flashcardContainer: {
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        padding: 20,
    },
    progressTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    progressText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'regular',
    },
    streakText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'regular',
    },
    xpAnimationContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    xpAnimationText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});