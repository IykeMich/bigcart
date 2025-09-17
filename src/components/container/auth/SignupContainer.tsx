import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { DefaultTextInput } from '@/components/default/DefaultTextInput';
import GradientButton from '@/components/button/GradientButton';
import { KeyboardAvoidingViewWrapper } from '@/components/wrapper/KeyboardAvoidingViewWrapper';
import { RouterUtil } from '@/utility/RouterUtil';

import EmailIcon from '@/assets/icons/Email.svg';
import PadLock from '@/assets/icons/Padlock.svg';
import Telephone from '@/assets/icons/Telephone.svg';

export interface SignupContainerProps {
    onSignupSuccess?: () => void;
    onNavigateToLogin?: () => void;
    onNavigateToOnboarding?: () => void;
}

export const SignupContainer = ({
    onSignupSuccess,
    onNavigateToLogin,
    onNavigateToOnboarding
}: SignupContainerProps) => {
    // State Management
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    // Event Handlers
    const handleInputChange = useCallback((field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    const validateForm = useCallback(() => {
        const { email, phone, password, confirmPassword } = formData;
        
        if (!email.trim() || !phone.trim() || !password.trim() || !confirmPassword.trim()) {
            // TODO: Show validation error
            return false;
        }

        if (password !== confirmPassword) {
            // TODO: Show password mismatch error
            return false;
        }

        if (!acceptTerms) {
            // TODO: Show terms acceptance error
            return false;
        }

        return true;
    }, [formData, acceptTerms]);

    const handleSignup = useCallback(async () => {
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Implement actual signup logic with API
            // const result = await signupUser(formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            onSignupSuccess?.();
        } catch (error) {
            // TODO: Handle signup error
            console.error('Signup error:', error);
        } finally {
            setIsLoading(false);
        }
    }, [formData, validateForm, onSignupSuccess]);

    const handleNavigateToLogin = useCallback(() => {
        onNavigateToLogin?.() || RouterUtil.navigateToRoute("auth.login");
    }, [onNavigateToLogin]);

    const handleNavigateToOnboarding = useCallback(() => {
        onNavigateToOnboarding?.() || RouterUtil.navigateToRoute("auth.onboarding");
    }, [onNavigateToOnboarding]);

    return (
        <KeyboardAvoidingViewWrapper showsVerticalScrollIndicator={false}>
            {/* Welcome Title */}
            <DefaultTypography className="text-black text-2xl font-bold mb-1.5">
                Create Account
            </DefaultTypography>

            {/* Description */}
            <DefaultTypography className="text-gray-600 text-base mb-8 leading-6">
                Quickly create account
            </DefaultTypography>

            {/* Form Fields */}
            <View className='flex-col gap-4'>
                <DefaultTextInput 
                    placeholder='Email Address' 
                    leftIcon={EmailIcon}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <DefaultTextInput 
                    placeholder='Phone Number' 
                    leftIcon={Telephone}
                    value={formData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                    keyboardType="phone-pad"
                />

                <DefaultTextInput 
                    leftIcon={PadLock} 
                    placeholder='Password' 
                    secureTextEntry={true}
                    value={formData.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                />

                <DefaultTextInput 
                    leftIcon={PadLock} 
                    placeholder='Confirm Password' 
                    secureTextEntry={true}
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange('confirmPassword', value)}
                />
            </View>

            {/* Terms and Conditions */}
            <View className='mt-4 items-center flex-row px-2'>
                <Switch
                    value={acceptTerms}
                    onValueChange={setAcceptTerms}
                    trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                    thumbColor={acceptTerms ? '#FFFFFF' : '#F3F4F6'}
                />
                <DefaultTypography className="text-[#868889] text-sm ml-2 flex-1">
                    I agree to the Terms of Service and Privacy Policy
                </DefaultTypography>
            </View>

            {/* Signup Button */}
            <GradientButton 
                title={isLoading ? "Creating Account..." : "Create Account"} 
                onPress={handleSignup} 
                className='w-full h-[50px] mt-8'
                disabled={isLoading}
            />

            {/* Login Link */}
            <View className='mt-6' style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <DefaultTypography className="text-[#868889] text-base">
                    Already have an account?{' '}
                </DefaultTypography>
                <TouchableOpacity onPress={handleNavigateToLogin}>
                    <DefaultTypography className="text-black text-base font-semibold">
                        Sign In
                    </DefaultTypography>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingViewWrapper>
    );
};
