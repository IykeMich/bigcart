import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ContainerLayout, ContainerLayoutProps } from './ContainerLayout';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { AuthLayoutProps } from './types';

// icons
import BackArrow from '@/assets/icons/BackArrow.svg';

export const AuthLayout = ({
    children,
    clearToken = false,
    goBack,
    title,
    subtitle,
    showBackButton = true,
    ...props
}: AuthLayoutProps) => {
    return (
        <ContainerLayout barStyle="dark-content" fullscreenMode={false} {...props} className=''>
            <View className="flex-1">
                {/* Header Section */}
                <View className="flex-row items-center justify-center gap-3 p-5 w-full" >
                    {showBackButton && goBack && (
                        <TouchableOpacity 
                            onPress={goBack}
                            className="absolute left-2"
                        >
                                <BackArrow />
                        </TouchableOpacity>
                    )}
                    
                    <View className="text-center justify-center">
                        {title && (
                            <DefaultTypography className="text-[18px] font-medium text-gray-900 mb-1">
                                {title}
                            </DefaultTypography>
                        )}
                        {subtitle && (
                            <DefaultTypography className="text-base text-gray-600 leading-6">
                                {subtitle}
                            </DefaultTypography>
                        )}
                    </View>
                </View>
                
                {/* Content Section */}
                <View className="flex-1 w-full px-3 pt-3">
                    {children}
                </View>
            </View>
        </ContainerLayout>
    );
};
