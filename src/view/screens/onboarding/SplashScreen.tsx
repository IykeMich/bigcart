import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { RouterUtil } from '@/utility/RouterUtil';
import { ContainerLayout } from "@/view/layout/ContainerLayout";

const SplashScreen = () => {
    const fadeAnim = new Animated.Value(0);
    const scaleAnim = new Animated.Value(0.8);

    useEffect(() => {
        // Animate the splash screen
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();

        // Navigate to next screen after delay
        const timer = setTimeout(() => {
            RouterUtil.navigateToRoute("onboarding.initiate");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ContainerLayout backgroundColor="#6CC51D" barStyle="light-content">
            <View style={styles.container}>
                <Animated.View 
                    style={[
                        styles.logoContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    <Text style={styles.logo}>BigCart</Text>
                    <Text style={styles.tagline}>From Farm to Cart, with Love.</Text>
                </Animated.View>
            </View>
        </ContainerLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    tagline: {
        fontSize: 18,
        color: '#fff',
        opacity: 0.9,
        textAlign: 'center',
    },
});

export default SplashScreen;