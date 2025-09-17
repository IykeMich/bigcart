import React, { ReactNode } from 'react';
import { View, ScrollView, ScrollViewProps, StyleSheet } from 'react-native';
import { ContainerLayout, ContainerLayoutProps } from './ContainerLayout';

export interface ContainerScrollViewLayoutProps extends ContainerLayoutProps {
    children: ReactNode;
    scrollViewProps?: ScrollViewProps;
    contentContainerClassName?: string;
    showsVerticalScrollIndicator?: boolean;
}

export const ContainerScrollViewLayout = ({ 
    children, 
    className, 
    scrollViewProps,
    contentContainerClassName,
    showsVerticalScrollIndicator = false,
    ...props 
}: ContainerScrollViewLayoutProps) => {
    return (
        <ContainerLayout {...props}>
            <ScrollView
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                contentContainerStyle={styles.scrollView}
                {...scrollViewProps}
            >
                <View className={`flex-1 w-full ${contentContainerClassName || ''}`}>
                    {children}
                </View>
            </ScrollView>
        </ContainerLayout>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
});
