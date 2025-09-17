import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

export interface DefaultTypographyProps extends TextProps {
    children?: ReactNode
}

export const DefaultTypography = ({children, className, ...props}: DefaultTypographyProps) => {
    const hasNumbers = /\d/.test(String(children));
    const fontClass = hasNumbers ? 'font-system' : 'font-poppins';

    return (
        <Text className={`${fontClass} ${className}`} {...props}>
            {children}
        </Text>
    )
}

