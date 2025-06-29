import { View, Text, StyleSheet, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FlashSetCard({ module, title, cards, bestStreak, author }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const toggleExpanded = () => {
        if (isExpanded) {
            // Collapse animation - fade out first, then collapse
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start(() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setIsExpanded(false);
            });
        } else {
            // Expand animation - expand first, then fade in
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setIsExpanded(true);
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, isExpanded ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {borderBottomLeftRadius: 12, borderBottomRightRadius: 12}]}>
                <View style={styles.textContainer}>
                    <Text style={styles.moduleText}>Module {module}</Text>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <TouchableOpacity onPress={toggleExpanded}>
                    <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            
            {isExpanded && (
                <Animated.View 
                    style={[
                        styles.cardContainer,
                        { opacity: opacityAnim }
                    ]}
                >
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardText}>{cards} cards</Text>
                        <Text style={styles.cardText}>Your best streak: {bestStreak}</Text>
                        <Text style={styles.cardText}>Author: {author}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('StudyPage')}>
                        <Ionicons name="play-circle" size={36} color="#fff" />
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'Column',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    headerContainer: {
        borderRadius: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'column',
    },
    moduleText: {
        fontSize: 16,
        fontWeight: 'semi-bold',
        color: '#fff',
    },
    titleText: {
        fontSize: 16,
        color: '#fff',
    },
    cardContainer: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    cardTextContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    cardText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 4,
    },
})      