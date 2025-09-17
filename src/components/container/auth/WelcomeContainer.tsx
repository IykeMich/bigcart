import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import GradientButton from '@/components/button/GradientButton';
import { RouterUtil } from '@/utility/RouterUtil';

export interface WelcomeContainerProps {
    onNavigateToLogin?: () => void;
    onNavigateToSignUp?: () => void;
}

export const WelcomeContainer = ({
    onNavigateToLogin,
    onNavigateToSignUp
}: WelcomeContainerProps) => {
    // Event Handlers
    const handleNavigateToLogin = useCallback(() => {
        onNavigateToLogin?.() || RouterUtil.navigateToRoute("auth.login");
    }, [onNavigateToLogin]);

    const handleNavigateToSignUp = useCallback(() => {
        onNavigateToSignUp?.() || RouterUtil.navigateToRoute("auth.signup");
    }, [onNavigateToSignUp]);

    return (
        <View className="flex-1 items-center justify-center px-6">
            {/* Logo/Brand Section */}
            <View className="items-center mb-12">
                <Image
                    source={require('@/assets/images/bigCart.png')}
                    className="w-32 h-32 mb-6"
                    resizeMode="contain"
                />
                <DefaultTypography className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Welcome to BigCart
                </DefaultTypography>
                <DefaultTypography className="text-base text-gray-600 text-center leading-6">
                    Your one-stop solution for all your shopping needs. 
                    Get started by creating an account or signing in.
                </DefaultTypography>
            </View>

            {/* Action Buttons */}
            <View className="w-full gap-4">
                <GradientButton
                    title="Get Started"
                    onPress={handleNavigateToSignUp}
                    className="w-full h-[50px]"
                />
                
                <TouchableOpacity
                    onPress={handleNavigateToLogin}
                    className="w-full h-[50px] border-2 border-gray-300 rounded-lg items-center justify-center"
                >
                    <DefaultTypography className="text-gray-700 text-base font-semibold">
                        I already have an account
                    </DefaultTypography>
                </TouchableOpacity>
            </View>

            {/* Additional Info */}
            <View className="mt-8 items-center">
                <DefaultTypography className="text-sm text-gray-500 text-center">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </DefaultTypography>
            </View>
        </View>
    );
};