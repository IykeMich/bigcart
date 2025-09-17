import React, { useEffect } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { RouterUtil } from '@/utility/RouterUtil';
import { CompleteOnboardingContainer } from '@/components/container/onboarding/CompleteOnboardingContainer';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const CompleteOnboardingScreen = () => {
    const insets = useSafeAreaInsets();

    // Screen-level effects
    useEffect(() => {
        // Any screen-specific initialization can go here
        // For example: analytics tracking, screen focus effects, etc.
    }, []);

    // Event handlers for container callbacks
    const handleNavigateToSignup = () => {
        RouterUtil.navigateToRoute("auth.signup");
    };

    const handleNavigateToLogin = () => {
        RouterUtil.navigateToRoute("auth.login");
    };

    const handleGoogleSignIn = () => {
        // TODO: Implement Google sign in logic
        console.log('Google sign in initiated');
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Background Image */}
            <ImageBackground
                source={require('@/assets/images/auth/AuthOne.png')}
                style={{
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT * 0.75,
                    justifyContent: 'flex-start',
                }}
                resizeMode="cover"
            >
                {/* Navigation Bar Overlay */}
                <View style={{
                    paddingTop: insets.top + 10,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <DefaultTypography className="text-white text-center w-full text-lg font-semibold">
                        Welcome
                    </DefaultTypography>
                    <View style={{ width: 30 }} />
                </View>
            </ImageBackground>

            {/* Bottom Panel with Container */}
            <View style={{
                flex: 1,
                backgroundColor: '#F4F5F9',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingTop: 30,
                paddingBottom: insets.bottom + 20,
            }} className='absolute bottom-4 left-0 right-0'>
                <CompleteOnboardingContainer
                    onNavigateToSignup={handleNavigateToSignup}
                    onNavigateToLogin={handleNavigateToLogin}
                    onGoogleSignIn={handleGoogleSignIn}
                />
            </View>
        </View>
    );
};

export default CompleteOnboardingScreen;

