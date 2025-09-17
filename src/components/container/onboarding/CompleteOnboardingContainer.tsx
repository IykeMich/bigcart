import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import GradientButton from '@/components/button/GradientButton';
import { RouterUtil } from '@/utility/RouterUtil';

import PersonIcon from '@/assets/icons/Person.svg';
import GoogleIcon from '@/assets/icons/Google.svg';

export interface CompleteOnboardingContainerProps {
    onNavigateToSignup?: () => void;
    onNavigateToLogin?: () => void;
    onGoogleSignIn?: () => void;
}

export const CompleteOnboardingContainer = ({
    onNavigateToSignup,
    onNavigateToLogin,
    onGoogleSignIn
}: CompleteOnboardingContainerProps) => {
    // Event Handlers
    const handleNavigateToSignup = useCallback(() => {
        onNavigateToSignup?.() || RouterUtil.navigateToRoute("auth.signup");
    }, [onNavigateToSignup]);

    const handleNavigateToLogin = useCallback(() => {
        onNavigateToLogin?.() || RouterUtil.navigateToRoute("auth.login");
    }, [onNavigateToLogin]);

    const handleGoogleSignIn = useCallback(() => {
        onGoogleSignIn?.() || console.log('Google sign in clicked');
        // TODO: Implement Google sign in logic
    }, [onGoogleSignIn]);

    return (
        <View className="flex-1">
            {/* Welcome Title */}
            <DefaultTypography className="text-black text-2xl font-bold mb-3">
                Welcome
            </DefaultTypography>

            {/* Description */}
            <DefaultTypography className="text-gray-600 text-base mb-8 leading-6">
                Welcome to BigCart! Your one-stop shop for all your grocery needs. 
                Let's get you started with an account or login to continue.
            </DefaultTypography>

            {/* Google Sign In Button */}
            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    marginBottom: 12,
                    borderWidth: 1,
                    borderColor: '#E0E0E0',
                }}
                activeOpacity={0.8}
                onPress={handleGoogleSignIn}
            >
                <View className='absolute left-4'>
                    <GoogleIcon />
                </View>
                <DefaultTypography className="text-black text-base font-medium flex-1 text-center">
                    Continue with Google
                </DefaultTypography>
            </TouchableOpacity>

            {/* Create Account Button */}
            <GradientButton 
                title='Create an account' 
                className='w-full mt-1'
                onPress={handleNavigateToSignup}
                leftIcon={PersonIcon}
                textClassName='!text-[16px]'
            />

            {/* Login Link */}
            <View className='mt-6' style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <DefaultTypography className="text-gray-600 text-base">
                    Already have an account?{' '}
                </DefaultTypography>
                <TouchableOpacity onPress={handleNavigateToLogin}>
                    <DefaultTypography className="text-black text-base font-semibold">
                        Login
                    </DefaultTypography>
                </TouchableOpacity>
            </View>
        </View>
    );
};