import { View, StyleSheet } from 'react-native';
import { isWeb, screenWidth } from '../utils/responsive';

export default function WebLayout({ children, maxWidth = 1200 }) {
    if (!isWeb) {
        return children;
    }

    return (
        <View style={styles.webContainer}>
            <View style={[styles.contentWrapper, { maxWidth }]}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    webContainer: {
        flex: 1,
        backgroundColor: '#667eea',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
    },
}); 