import {KeyboardAvoidingView, Platform, ScrollView, ScrollViewProps, StyleSheet, View} from "react-native";
import { ReactNode } from "react";

interface KeyboardAvoidingViewWrapperProps extends ScrollViewProps {
    children: ReactNode;
    androidOffset?: number;
}

export const KeyboardAvoidingViewWrapper = ({
                                                children,
                                                androidOffset = 0,
                                                ...props
                                            }: KeyboardAvoidingViewWrapperProps) => {
    const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
    const keyboardVerticalOffset = Platform.OS === "ios" ? 0 : androidOffset;

    return (
        <KeyboardAvoidingView
            behavior={behavior}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollViewContent, props.contentContainerStyle]}
                {...props}>
                <View style={styles.contentWrapper}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentWrapper: {
        width: "100%",
        flex: 1,
    }
});