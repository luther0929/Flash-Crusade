import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { scale, verticalScale, isWeb, getResponsiveValue } from '../utils/responsive';

export default function Flashcard({ question, answer, isFlipped, onFlip }) {
    const flipAnim = useRef(new Animated.Value(0)).current;

    // Sync with external flip state
    useEffect(() => {
        const toValue = isFlipped ? 1 : 0;
        
        Animated.spring(flipAnim, {
            toValue,
            friction: 8,
            tension: 10,
            useNativeDriver: true,
        }).start();
    }, [isFlipped]);

    const flipCard = () => {
        if (onFlip) {
            onFlip();
        }
    };

    const frontInterpolate = flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const backInterpolate = flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '360deg'],
    });

    const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate }]
    };

    const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }]
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={flipCard} activeOpacity={0.9} style={styles.touchableContainer}>
                    <Animated.View style={[styles.cardQuestionContainer, frontAnimatedStyle]}>
                        <Text style={styles.cardText}>{question}</Text>
                    </Animated.View>
                    
                    <Animated.View style={[styles.cardAnswerContainer, styles.cardBack, backAnimatedStyle]}>
                        <Text style={styles.cardText}>{answer}</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardQuestionContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: getResponsiveValue({ small: scale(20), medium: scale(24), large: scale(28) }),
        borderRadius: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        backfaceVisibility: 'hidden',
        minHeight: getResponsiveValue({ small: verticalScale(180), medium: verticalScale(220), large: verticalScale(260) }),
    },
    cardAnswerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: getResponsiveValue({ small: scale(20), medium: scale(24), large: scale(28) }),
        borderRadius: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        backfaceVisibility: 'hidden',
        minHeight: getResponsiveValue({ small: verticalScale(180), medium: verticalScale(220), large: verticalScale(260) }),
    },
    cardText: {
        color: '#000',
        fontSize: getResponsiveValue({ small: scale(16), medium: scale(18), large: scale(20) }),
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: getResponsiveValue({ small: scale(24), medium: scale(28), large: scale(32) }),
        flexWrap: 'wrap',
    },
    cardBack: {
        transform: [{ rotateY: '180deg' }]
    },
    touchableContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});