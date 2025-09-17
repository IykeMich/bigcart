import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { routes } from '@/router/routes';
import { NavigationTypeConstant } from '@/utility/constant/NavigationTypeConstant';
import { RouteType } from '@/router/routes';
import { RouterUtil } from '@/utility/RouterUtil';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    // Get all tab routes - no user type filtering for now
    const validatedRoutes = routes.filter((route: RouteType) => 
        route.metadata?.type === NavigationTypeConstant.tab
    );

    // Get the first route as initial route
    const initialRoute = validatedRoutes.length > 0 ? validatedRoutes[0].name : 'Home';

    return (
        <Tab.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    paddingVertical: 8,
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: '#56AB2F',
                tabBarInactiveTintColor: '#666',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}
        >
            {validatedRoutes.map((route, index) => (
                <Tab.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={{
                        tabBarLabel: route.metadata?.title || route.name,
                        tabBarIcon: ({ color, size }) => {
                            const IconComponent = route.metadata?.activeIcon;
                            return IconComponent ? (
                                <IconComponent width={size} height={size} color={color} />
                            ) : (
                                <View style={{ width: size, height: size, backgroundColor: color }} />
                            );
                        },
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};
