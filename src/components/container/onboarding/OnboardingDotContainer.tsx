import React from 'react';
import { Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate, SharedValue } from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface OnboardingDotContainerProps {
    index: number;
    scrollX: SharedValue<number>;
    currentIndex: number;
}

export const OnboardingDotContainer: React.FC<OnboardingDotContainerProps> = ({
    index, 
    scrollX, 
    currentIndex
}) => {
    const dotAnimatedStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ];

        const width = interpolate(
            scrollX.value,
            inputRange,
            [12, 12, 12],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );

        const backgroundColor = currentIndex === index ? '#A8E063' : '#DCDCDC';

        return {
            width,
            opacity,
            backgroundColor,
        };
    });

    return (
        <Animated.View 
            style={[
                {
                    height: 12,
                    borderRadius: 7.5,
                    marginHorizontal: 4,
                },
                dotAnimatedStyle
            ]} 
        />
    );
}

