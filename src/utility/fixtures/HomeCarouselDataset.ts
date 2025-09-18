import { HomeCarouselSlide } from "@/components/carousel/HomeCarouselSlide";

export     const carouselSlides: HomeCarouselSlide[] = [
        {
            id: 1,
            title: '20% off on your first purchase',
            description: 'Get fresh groceries delivered with amazing discounts',
            image: require('@/assets/images/carousel/CarouselOne.png'),
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        {
            id: 2,
            title: 'Free delivery on orders over $50',
            description: 'Shop more, save more with our free delivery offer',
            image: require('@/assets/images/carousel/CarouselTwo.png'),
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        {
            id: 3,
            title: 'Fresh produce daily',
            description: 'Farm-fresh vegetables and fruits delivered daily',
            image: require('@/assets/images/carousel/CarouselThreepng.png'),
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        {
            id: 4,
            title: 'Premium quality guaranteed',
            description: 'Only the best quality products make it to your door',
            image: require('@/assets/images/carousel/CarouselFour.jpg'),
            // image: require('@/assets/images/carousel/CarouselFour.png'),
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }
    ];