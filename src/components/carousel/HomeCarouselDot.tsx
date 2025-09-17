import React from 'react';
import { Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate, SharedValue } from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface HomeCarouselDotProps {
    index: number;
    scrollX: SharedValue<number>;
    currentIndex: number;
}

export const HomeCarouselDot: React.FC<HomeCarouselDotProps> = ({
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
            [8, 24, 8],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );

        const backgroundColor = currentIndex === index ? '#6CC51D' : '#FFFFFF';

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
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 3,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 2,
                },
                dotAnimatedStyle
            ]} 
        />
    );
};
