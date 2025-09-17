import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { BottomTabs } from './BottomTabs';
import { RouterUtil } from '@/utility/RouterUtil';
import { routes } from '@/router/routes';
import { NavigationTypeConstant } from '@/utility/constant/NavigationTypeConstant';
import { RouteType } from '@/router/routes';

const Drawer = createDrawerNavigator();

export const NativeDrawer = () => {
    // Get all drawer routes - no user type filtering for now
    const drawerRoutes = routes.filter((route: any) => 
        route.metadata?.type === NavigationTypeConstant.drawer
    );

    // Add bottom tabs as a drawer route
    const bottomTabRoute: RouteType = {
        path: NavigationTypeConstant.tab,
        name: NavigationTypeConstant.tab,
        metadata: { type: NavigationTypeConstant.tab },
        component: BottomTabs,
        options: {}
    };

    const allDrawerRoutes = [...drawerRoutes, bottomTabRoute];

    // Simple drawer content component
    const DrawerContent = () => (
        <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
                BigCart Menu
            </Text>
            <Text style={{ fontSize: 14, color: '#666' }}>
                Drawer content goes here
            </Text>
        </View>
    );

    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                drawerStyle: { width: "80%" },
                drawerContent: DrawerContent
            })}
        >
            {allDrawerRoutes.map((route, index) => (
                <Drawer.Screen 
                    key={index} 
                    name={route.path} 
                    component={route.component} 
                    options={route.options || {}} 
                />
            ))}
        </Drawer.Navigator>
    );
};
