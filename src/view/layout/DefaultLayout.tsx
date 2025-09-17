import React, { ReactNode } from 'react';
import { View, ViewProps, TouchableOpacity } from 'react-native';
import { ContainerLayout, ContainerLayoutProps } from './ContainerLayout';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import { DefaultLayoutProps, HeaderConfig } from './types';

// icons
import BackArrow from '@/assets/icons/BackArrow.svg';

export interface DefaultHeaderProps extends HeaderConfig {
    goBack?: () => void;
    menuType?: 'back' | 'menu' | 'none';
    title?: string;
    rightComponent?: ReactNode;
}

const DefaultHeader = ({ 
    goBack, 
    menuType = 'none', 
    title, 
    rightComponent 
}: DefaultHeaderProps) => {
    return (
        <View className="flex-row items-center justify-between px-4 py-3 border-0">
            <View className="flex-row items-center justify-center gap-3 p-5 w-full">
                {menuType === 'back' && goBack && (
                    <TouchableOpacity 
                        onPress={goBack}
                        className="absolute left-2"
                    >
                            <BackArrow />
                    </TouchableOpacity>
                )}
                
                {title && (
                    <DefaultTypography className="text-[18px] font-medium text-gray-900 mb-1">
                        {title}
                    </DefaultTypography>
                )}
            </View>
            
            {rightComponent && (
                <View className="ml-3">
                    {rightComponent}
                </View>
            )}
        </View>
    );
};

export const DefaultLayout = ({
    children,
    goBack,
    menuType = 'none',
    title,
    rightComponent,
    showHeader = true,
    ...props
}: DefaultLayoutProps) => {
    return (
        <ContainerLayout barStyle="dark-content" fullscreenMode={false} {...props}>
            <View className="flex-1">
                {showHeader && (
                    <DefaultHeader 
                        goBack={goBack}
                        menuType={menuType}
                        title={title}
                        rightComponent={rightComponent}
                    />
                )}
                <View className="flex-1 px-3">
                    {children}
                </View>
            </View>
        </ContainerLayout>
    );
};
