import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { FlashList, FlashListRef } from '@shopify/flash-list';
import { useSharedValue } from 'react-native-reanimated';
import { HomeCarouselSlideComponent, HomeCarouselSlide } from './HomeCarouselSlide';
import { HomeCarouselDot } from './HomeCarouselDot';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface HomeCarouselProps {
    slides: HomeCarouselSlide[];
}

const HomeCarousel = ({ slides }: HomeCarouselProps) => {
    const scrollX = useSharedValue(0);
    const flashListRef = useRef<FlashListRef<HomeCarouselSlide> | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: any) => {
        scrollX.value = event.nativeEvent.contentOffset.x;
    };

    const renderItem = ({ item, index }: { item: HomeCarouselSlide; index: number }) => (
        <HomeCarouselSlideComponent
            index={index}
            scrollX={scrollX}
            item={item}
            items={slides}
        />
    );

    return (
        <View className="mb-6 relative">
            <FlashList
                ref={flashListRef}
                data={slides}
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
                style={{ height: 220 }}
                contentContainerStyle={{ height: 220 }}
            />

            {/* Pagination dots - positioned inside carousel at bottom */}
            <View className="absolute bottom-4 left-6 right-0 flex-row items-center justify-start">
                {slides.map((_, index) => (
                    <HomeCarouselDot
                        key={index}
                        index={index}
                        scrollX={scrollX}
                        currentIndex={currentIndex}
                    />
                ))}
            </View>
        </View>
    );
};

export default HomeCarousel;
