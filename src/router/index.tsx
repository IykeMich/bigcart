import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NativeStack } from '@/libs/route/NativeStack';
import { navigationRef } from '@/utility/RouterUtil';
import { RouteConstant } from '@/utility/constant/RouteConstant';

// Font loading function (placeholder)
const onLayoutRootView = async () => {
    // Font loading logic would go here
    // await Font.loadAsync({
    //     // Font families
    // });
};

// Toast component (placeholder)
const Toast = () => {
    return (
        <View style={{ position: 'absolute', top: 50, left: 20, right: 20, zIndex: 1000 }}>
            {/* Toast implementation would go here */}
        </View>
    );
};

// View component wrapper
const ViewComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <View style={{ flex: 1 }}>
            {children}
        </View>
    );
};

export const Router = () => {
    // Deep linking configuration - path-based
    const linking = { 
        prefixes: ['bigcart://'],
        config: {
            screens: {
                // Onboarding paths
                'stack/onboarding/splash': 'splash',
                'stack/onboarding/initiate': 'initiate', 
                'stack/onboarding/complete': 'complete',
                
                // Auth paths
                'stack/auth/login': 'Login',
                'stack/auth/signup': 'SignUp',
                'stack/auth/forgot-password': 'ForgotPassword',
                
                // Main app with tab paths
                'tab/dashboard/home': 'home',
                'tab/dashboard/favorites': 'favorites',
                'tab/profile/main': 'profile',
                'stack/dashboard/categories': 'categories',
                
                // Direct screen names for backward compatibility
                splash: 'splash',
                initiate: 'initiate',
                complete: 'complete',
                Login: 'Login',
                SignUp: 'SignUp',
                ForgotPassword: 'ForgotPassword',
                MainApp: {
                    screens: {
                        Home: 'home',
                        Favorites: 'favorites',
                        Profile: 'profile',
                    }
                }
            }
        }
    };
    
    // Initial route - start with MainApp for authenticated users
    const initialRoute = 'MainApp';
    
    return (
        <NavigationContainer 
            onReady={onLayoutRootView} 
            linking={linking} 
            ref={navigationRef}
        >
            <ViewComponent>
                <NativeStack initialRouteName={initialRoute} />
                <Toast />
                <StatusBar style="auto" />
            </ViewComponent>
        </NavigationContainer>
    );
};
