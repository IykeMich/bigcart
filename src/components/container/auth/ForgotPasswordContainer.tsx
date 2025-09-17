import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { DefaultTextInput } from '@/components/default/DefaultTextInput';
import GradientButton from '@/components/button/GradientButton';
import { KeyboardAvoidingViewWrapper } from '@/components/wrapper/KeyboardAvoidingViewWrapper';
import { RouterUtil } from '@/utility/RouterUtil';

import EmailIcon from '@/assets/icons/Email.svg';

export interface ForgotPasswordContainerProps {
    onResetSuccess?: () => void;
    onNavigateToLogin?: () => void;
    onNavigateToSignup?: () => void;
}

export const ForgotPasswordContainer = ({
    onResetSuccess,
    onNavigateToLogin,
    onNavigateToSignup
}: ForgotPasswordContainerProps) => {
    // State Management
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    // Event Handlers
    const handleResetPassword = useCallback(async () => {
        if (!email.trim()) {
            // TODO: Show validation error
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Implement actual password reset logic with API
            // const result = await resetPassword(email);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setIsEmailSent(true);
            onResetSuccess?.();
        } catch (error) {
            // TODO: Handle reset error
            console.error('Password reset error:', error);
        } finally {
            setIsLoading(false);
        }
    }, [email, onResetSuccess]);

    const handleNavigateToLogin = useCallback(() => {
        onNavigateToLogin?.() || RouterUtil.navigateToRoute("auth.login");
    }, [onNavigateToLogin]);

    const handleNavigateToSignup = useCallback(() => {
        onNavigateToSignup?.() || RouterUtil.navigateToRoute("auth.signup");
    }, [onNavigateToSignup]);

    if (isEmailSent) {
        return (
            <KeyboardAvoidingViewWrapper showsVerticalScrollIndicator={false}>
                {/* Success State */}
                <View className="items-center">
                    <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-6">
                        <DefaultTypography className="text-green-600 text-3xl">✓</DefaultTypography>
                    </View>
                    
                    <DefaultTypography className="text-2xl font-bold text-gray-900 text-center mb-2">
                        Check Your Email
                    </DefaultTypography>
                    
                    <DefaultTypography className="text-gray-600 text-base text-center leading-6 mb-8">
                        We've sent a password reset link to {email}. Please check your email and follow the instructions to reset your password.
                    </DefaultTypography>

                    <GradientButton 
                        title="Back to Login" 
                        onPress={handleNavigateToLogin} 
                        className='w-full h-[50px]'
                    />
                </View>
            </KeyboardAvoidingViewWrapper>
        );
    }

    return (
        <KeyboardAvoidingViewWrapper showsVerticalScrollIndicator={false}>

            <View className='w-full justify-center mt-8'>
                {/* Title */}
                <DefaultTypography className="text-black text-2xl text-center font-semibold mb-1.5">
                    Forgot Password?
                </DefaultTypography>

                {/* Description */}
                <DefaultTypography className="text-[#868889] text-base text-center mb-8 leading-6 px-7">
                    No worries! Enter your email address and we'll send you a link to reset your password.
                </DefaultTypography>
            </View>

            {/* Email Input */}
            <View className='mt-4 mb-6'>
                <DefaultTextInput 
                    placeholder='Email Address' 
                    leftIcon={EmailIcon}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Reset Button */}
            <GradientButton 
                title={isLoading ? "Sending..." : "Send Reset Link"} 
                onPress={handleResetPassword} 
                className='w-full h-[50px] mb-6'
                disabled={isLoading}
            />

            {/* Back to Login */}
            <View className='items-center'>
                <TouchableOpacity onPress={handleNavigateToLogin}>
                    <DefaultTypography className="text-gray-600 text-base">
                        Remember your password?{' '}
                        <DefaultTypography className="text-blue-600 font-semibold">
                            Sign In
                        </DefaultTypography>
                    </DefaultTypography>
                </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View className='mt-6 items-center'>
                <TouchableOpacity onPress={handleNavigateToSignup}>
                    <DefaultTypography className="text-gray-600 text-base">
                        Don't have an account?{' '}
                        <DefaultTypography className="text-blue-600 font-semibold">
                            Sign Up
                        </DefaultTypography>
                    </DefaultTypography>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingViewWrapper>
    );
};
