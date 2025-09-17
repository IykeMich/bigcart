import React, { useRef, useState, useEffect } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { FlashList, FlashListRef } from '@shopify/flash-list';
import { useSharedValue } from 'react-native-reanimated';
import { InitiateOnboardingContainer, Slide } from '@/components/container/onboarding/InitiateOnboardingContainer';
import { OnboardingDotContainer } from '@/components/container/onboarding/OnboardingDotContainer';
import GradientButton from '@/components/button/GradientButton';
import { RouterUtil } from '@/utility/RouterUtil';

const SCREEN_WIDTH = Dimensions.get('window').width;

const InitiateOnboardingScreen = () => {
    const scrollX = useSharedValue(0);
    const flashListRef = useRef<FlashListRef<Slide> | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Screen-level effects
    useEffect(() => {
        // Any screen-specific initialization can go here
        // For example: analytics tracking, screen focus effects, etc.
    }, []);

    const handleScroll = (event: any) => {
        scrollX.value = event.nativeEvent.contentOffset.x;
    };

    const handleGetStarted = () => {
        RouterUtil.navigateToRoute("onboarding.complete");
    };

    const introSlides: Slide[] = [
        {
            id: 1,
            title: 'Welcome to',
            description: 'Your trusted online store for the freshest fruits and foods—delivered right to your door.',
            image: require('@/assets/images/OnboardingOne.png'),
        },
        {
            id: 2,
            title: 'Fresh Groceries',
            description: 'Get the freshest produce delivered right to your doorstep with our premium selection',
            image: require('@/assets/images/OnboardingTwo.png'),
        },
        {
            id: 3,
            title: 'Easy Shopping',
            description: 'Browse, select, and order your groceries with our intuitive and user-friendly interface',
            image: require('@/assets/images/OnboardingThree.png'),
        },
        {
            id: 4,
            title: 'Fast Delivery',
            description: 'Enjoy quick and reliable delivery service that brings your groceries to you in no time',
            image: require('@/assets/images/OnboardingFour.png'),
        },
    ];

    const renderItem = ({ item, index }: { item: Slide; index: number }) => (
        <InitiateOnboardingContainer
            index={index}
            scrollX={scrollX}
            item={item}
            items={introSlides}
        />
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <FlashList
                ref={flashListRef}
                data={introSlides}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={1}
                decelerationRate="fast"
                snapToInterval={SCREEN_WIDTH}
                snapToAlignment="start"
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
                    setCurrentIndex(index);
                }}
                style={{ flex: 1 }}
                contentContainerStyle={{ height: '100%' }}
            />

            {/* Bottom section with dots and navigation */}
            <View className="absolute bottom-24 left-0 right-0 items-center justify-center">
                {/* Pagination dots */}
                <View className="flex-row items-center justify-center mb-6">
                    {introSlides.map((_, index) => (
                        <OnboardingDotContainer
                            key={index}
                            index={index}
                            scrollX={scrollX}
                            currentIndex={currentIndex}
                        />
                    ))}
                </View>

                <GradientButton 
                    title="Get started"
                    onPress={handleGetStarted}
                    className="w-[90%] rounded-xl"
                    textClassName='!text-[20px]'
                />
            </View>
        </View>
    );
};

export default InitiateOnboardingScreen;