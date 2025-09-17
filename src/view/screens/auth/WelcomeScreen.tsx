import React, { useEffect } from 'react';
import { ContainerLayout } from '@/view/layout/ContainerLayout';
import { WelcomeContainer } from '@/components/container/auth/WelcomeContainer';
import { RouterUtil } from '@/utility/RouterUtil';

const WelcomeScreen = () => {
    // Screen-level effects
    useEffect(() => {
        // Any screen-specific initialization can go here
        // For example: analytics tracking, screen focus effects, etc.
    }, []);

    // Event handlers for container callbacks
    const handleNavigateToLogin = () => {
        RouterUtil.navigateToRoute("auth.login");
    };

    const handleNavigateToSignUp = () => {
        RouterUtil.navigateToRoute("auth.signup");
    };

    return (
        <ContainerLayout 
            backgroundColor="#F7F7F7" 
            barStyle="dark-content"
            fullscreenMode={false}
        >
            <WelcomeContainer
                onNavigateToLogin={handleNavigateToLogin}
                onNavigateToSignUp={handleNavigateToSignUp}
            />
        </ContainerLayout>
    );
};

export default WelcomeScreen;