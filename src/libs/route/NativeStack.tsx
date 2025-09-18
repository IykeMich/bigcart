import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './BottomTabs';
import { routes } from '@/router/routes';
import { NavigationTypeConstant } from '@/utility/constant/NavigationTypeConstant';
import { RouteType } from '@/router/routes';

interface NativeStackProps {
    initialRouteName?: string;
}

export const NativeStack = ({ initialRouteName }: NativeStackProps) => {
    const Stack = createNativeStackNavigator();
    
    // Get all stack routes - no authentication filtering for now
    const stackRoutes = routes.filter((route: RouteType) => 
        route.metadata?.type === NavigationTypeConstant.stack
    );
    
    // Add main app route with bottom tabs
    const mainAppRoute = {
        path: 'MainApp',
        name: 'MainApp',
        metadata: { 
            type: NavigationTypeConstant.stack
        },
        component: BottomTabs
    };
    
    // Combine all routes - show everything for now
    const validatedRoutes = [...stackRoutes, mainAppRoute];
    
    // Debug logging
    // console.log('NativeStack - All routes:', validatedRoutes.length);
    // console.log('NativeStack - Route names:', validatedRoutes.map(r => r.name));
    
    return (
        <Stack.Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName={initialRouteName}
        >
            {validatedRoutes.map((route, index) => (
                <Stack.Screen 
                    key={index} 
                    name={route.name} 
                    component={route.component} 
                    options={route.metadata?.options || {}} 
                />
            ))}
        </Stack.Navigator>
    );
};
