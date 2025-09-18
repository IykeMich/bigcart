import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { DefaultTextInput } from '@/components/default/DefaultTextInput';
import GradientButton from '@/components/button/GradientButton';
import { KeyboardAvoidingViewWrapper } from '@/components/wrapper/KeyboardAvoidingViewWrapper';
import { RouterUtil } from '@/utility/RouterUtil';

import EmailIcon from '@/assets/icons/Email.svg';
import PadLock from '@/assets/icons/Padlock.svg';

export interface LoginContainerProps {
    onLoginSuccess?: () => void;
    onNavigateToSignUp?: () => void;
    onNavigateToForgotPassword?: () => void;
}

export const LoginContainer = ({
    onLoginSuccess,
    onNavigateToSignUp,
    onNavigateToForgotPassword
}: LoginContainerProps) => {
    // State Management
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Event Handlers
    const handleLogin = useCallback(async () => {
        RouterUtil.navigate("dashboard.home");
    }, []);

    const handleNavigateToSignUp = useCallback(() => {
        onNavigateToSignUp?.() || RouterUtil.navigateToRoute("auth.signup");
    }, [onNavigateToSignUp]);

    const handleNavigateToForgotPassword = useCallback(() => {
        onNavigateToForgotPassword?.() || RouterUtil.navigateToRoute("auth.forgotPassword");
    }, [onNavigateToForgotPassword]);

    return (
        <KeyboardAvoidingViewWrapper showsVerticalScrollIndicator={false}>
            {/* Welcome Title */}
            <DefaultTypography className="text-black text-2xl font-bold mb-1.5">
                Welcome Back !
            </DefaultTypography>

            {/* Description */}
            <DefaultTypography className="text-gray-600 text-base mb-8 leading-6">
                Sign in to your account
            </DefaultTypography>

            {/* Form Fields */}
            <View className='flex-col gap-4'>
                <DefaultTextInput 
                    placeholder='Email Address' 
                    leftIcon={EmailIcon}

                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <DefaultTextInput 
                    leftIcon={PadLock} 
                    placeholder='Password' 
                    secureTextEntry={true}
                />
            </View>

            {/* Remember Me & Forgot Password */}
            <View className='mt-2 items-center flex-row justify-between px-2'>
                <View className='flex-row items-center'>
                    <Switch
                        value={rememberMe}
                        onValueChange={setRememberMe}
                        trackColor={{ false: '#E5E7EB', true: '#A8E063' }}
                        thumbColor={rememberMe ? '#FFFFFF' : '#F3F4F6'}
                        // reduce size of switch height
                        style={{ transform: [{ scale: 0.7 }] }}
                    />
                    <DefaultTypography className="text-[#868889] text-base">
                        Remember me
                    </DefaultTypography>
                </View>
                
                <TouchableOpacity onPress={handleNavigateToForgotPassword}>
                    <DefaultTypography className="text-[#1E1E1E] text-sm font-semibold">
                        Forgot Password
                    </DefaultTypography>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <GradientButton 
                title={isLoading ? "Signing in..." : "Login"} 
                onPress={handleLogin} 
                className='w-full h-[50px] mt-8'
                disabled={isLoading}
            />

            {/* SignUp Link */}
            <View className='mt-3' style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <DefaultTypography className="text-gray-600 text-base">
                    Don't have an account?{' '}
                </DefaultTypography>
                <TouchableOpacity onPress={handleNavigateToSignUp}>
                    <DefaultTypography className="text-black text-base font-semibold">
                        Sign up
                    </DefaultTypography>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingViewWrapper>
    );
};