import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DefaultTypography, DefaultTypographyProps } from '../text/DefaultTypography';

interface DefaultButtonProps extends TouchableOpacityProps {
    children?: ReactNode,
    title?: string
    loading?: boolean,
    loadingColor?: "text-white" | "text-black",
    textClassName?: string,
    defaultTypography?: DefaultTypographyProps,
    gradient?: boolean
}

export const DefaultButton = ({
    children, 
    textClassName, 
    loadingColor = "text-white", 
    defaultTypography, 
    loading, 
    style, 
    className, 
    title, 
    gradient = false,
    ...props
}: DefaultButtonProps) => {
    const buttonContent = !loading ? (
        children ? children : (
            <DefaultTypography className={`text-white !font-semibold text-[16px] ${textClassName}`} {...defaultTypography}>
                {title}
            </DefaultTypography>
        )
    ) : (
        <ActivityIndicator className={`${loadingColor}`} />
    );

    if (gradient) {
        return (
            <TouchableOpacity 
                activeOpacity={0.6} 
                disabled={loading} 
                className={`h-[40px] disabled:opacity-70 items-center rounded-lg justify-center ${className}`} 
                {...props}
            >
                <LinearGradient
                    colors={['#0B7A5F', '#0A6B52']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }, style]}
                >
                    {buttonContent}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            disabled={loading} 
            style={[{backgroundColor: '#0B7A5F'}, style]} 
            className={`h-[40px] disabled:opacity-70 items-center rounded-lg justify-center ${className}`} 
            {...props}
        >
            {buttonContent}
        </TouchableOpacity>
    )
}

