import React, { ReactNode } from 'react';
import { View, ViewProps, StatusBar, StatusBarStyle, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContainerLayoutProps } from './types';

// Re-export the type for backward compatibility
export type { ContainerLayoutProps };

export const ContainerLayout = ({
    children,
    className,
    backgroundColor = "#F7F7F7",
    barColor = "transparent",
    barStyle = "dark-content",
    fullscreenMode = false,
    ...props
}: ContainerLayoutProps) => {
    const insets = useSafeAreaInsets();

    const containerStyle = [
        {
            flex: 1,
            backgroundColor: backgroundColor,
            paddingTop: fullscreenMode ? 0 : insets.top
        }
    ];

    return (
        <View style={containerStyle}>
            <StatusBar translucent backgroundColor={barColor} animated={true} barStyle={barStyle}/>
            <View
                className={`flex-1 ${className || ''}`}
                style={[
                    Platform.OS == 'ios' && {
                        marginBottom: -insets.bottom,
                        paddingBottom: insets.bottom + 20
                    },
                    props.style
                ]}
            >
                {children}
            </View>
        </View>
    );
}

