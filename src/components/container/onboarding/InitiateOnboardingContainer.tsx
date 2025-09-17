import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate, SharedValue } from 'react-native-reanimated';
import { DefaultTypography } from '../../../components/text/DefaultTypography';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export interface Slide {
    id: number;
    title: string;
    description: string;
    image: any;
}

interface InitiateOnboardingContainerProps {
    index: number;
    scrollX: SharedValue<number>;
    item: Slide;
    items: Slide[];
}

export const InitiateOnboardingContainer = ({
    index, 
    scrollX, 
    item, 
    items
}: InitiateOnboardingContainerProps) => {
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
            [0.5, 1, 0.5],
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
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
            {/* Full screen background image */}
            <Animated.Image
                source={item.image}
                style={[
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: SCREEN_WIDTH,
                        height: SCREEN_HEIGHT,
                        resizeMode: 'cover'
                    }, 
                    imageAnimatedStyle
                ]}
            />
            
            {/* Dark overlay for better text readability */}
            <View 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            />

            {/* Text content overlaid on image */}
            <Animated.View 
                className="px-8 pb-8 pt-32 flex-1 items-center gap-6"
                style={textAnimatedStyle}
            >
                <DefaultTypography className="text-[32px] font-bold text-white text-center mb-2">
                    {item.title}
                </DefaultTypography>
                {/* Only Show for the first slide */}
                {index === 0 && (
                    <View className="-mt-6 justify-center">
                        <Image 
                            source={require("@/assets/images/bigCart.png")} 
                            className="w-[127px] h-[50px]" 
                        />
                    </View>
                )}
                <DefaultTypography className="text-center text-[16px] text-[#ffffff] leading-6 opacity-90 px-4">
                {/* <DefaultTypography className="text-center text-[16px] text-[#868889] leading-6 opacity-90"> */}
                    {item.description}
                </DefaultTypography>
            </Animated.View>
        </View>
    )
}

