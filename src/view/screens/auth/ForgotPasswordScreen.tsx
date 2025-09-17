import React, { useEffect } from 'react';
import { AuthLayout } from '@/view/layout/AuthLayout';
import { ForgotPasswordContainer } from '@/components/container/auth/ForgotPasswordContainer';
import { RouterUtil } from '@/utility/RouterUtil';

const ForgotPasswordScreen = () => {
    // Screen-level effects
    useEffect(() => {
        // Any screen-specific initialization can go here
        // For example: analytics tracking, screen focus effects, etc.
    }, []);

    // Event handlers for container callbacks
    const handleResetSuccess = () => {
        // Handle successful password reset
        console.log('Password reset email sent successfully');
    };

    const handleNavigateToLogin = () => {
        RouterUtil.navigateToRoute("auth.login");
    };

    const handleNavigateToSignup = () => {
        RouterUtil.navigateToRoute("auth.signup");
    };

    return (
        <AuthLayout 
            title="Password Recovery"
            showBackButton={true}
            goBack={handleNavigateToLogin}
        >
            <ForgotPasswordContainer
                onResetSuccess={handleResetSuccess}
                onNavigateToLogin={handleNavigateToLogin}
                onNavigateToSignup={handleNavigateToSignup}
            />
        </AuthLayout>
    );
};

export default ForgotPasswordScreen;