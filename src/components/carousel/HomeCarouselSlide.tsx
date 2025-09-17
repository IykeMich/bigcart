import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate, SharedValue } from 'react-native-reanimated';
import { DefaultTypography } from '@/components/text/DefaultTypography';

const SCREEN_WIDTH = Dimensions.get('window').width;

export interface HomeCarouselSlide {
    id: number;
    title: string;
    description: string;
    image: any;
    backgroundColor?: string;
}

interface HomeCarouselSlideProps {
    index: number;
    scrollX: SharedValue<number>;
    item: HomeCarouselSlide;
    items: HomeCarouselSlide[];
}

export const HomeCarouselSlideComponent = ({
    index, 
    scrollX, 
    item, 
    items
}: HomeCarouselSlideProps) => {
    const inputRange = [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
    ];

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            scrollX.value,
            inputRange,
            [0.9, 1, 0.9],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.7, 1, 0.7],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
            opacity,
        };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollX.value,
            inputRange,
            [20, 0, 20],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        return {
            opacity,
            transform: [{ translateY }],
        };
    });

    return (
        <View style={{ width: SCREEN_WIDTH, height: 250 }}>
            {/* Background image */}
            <Animated.Image
                source={item.image}
                style={[
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: SCREEN_WIDTH,
                        height: 220,
                        resizeMode: 'cover'
                    }, 
                    imageAnimatedStyle
                ]}
            />
            
            {/* Overlay for better text readability */}
            <View 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: SCREEN_WIDTH,
                    height: 220,
                    backgroundColor: item.backgroundColor || 'rgba(0, 0, 0, 0.1)'
                }}
            />

            {/* Text content overlaid on image - positioned bottom-left like reference */}
            <Animated.View 
                className="px-6 py-4 flex-1 justify-center items-start"
                style={textAnimatedStyle}
            >
                <DefaultTypography className="!text-[24px] !font-semibold text-black mb-1 text-left w-[50%]">
                    {item.title}
                </DefaultTypography>
                <DefaultTypography className="text-left hidden text-[12px] text-gray-700 leading-4 opacity-90">
                    {item.description}
                </DefaultTypography>
            </Animated.View>
        </View>
    );
};
