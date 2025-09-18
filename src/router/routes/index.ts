import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";
import {SvgProps} from "react-native-svg";

export type RouteType = {
    path: string,
    name: string,
    options?: object,
    component: React.ComponentType,
    metadata?: Options,
}

type Options = {
    isAuthenticated?: [boolean, boolean] | boolean,
    redirectTo?: string,
    title?: string,
    activeIcon?: React.FC<SvgProps>,
    inactiveIcon?: React.FC<SvgProps>,
    type?: NavigationTypeConstant,
    userType?: 'provider'|'customer'|'both'
}

// Import all route definitions
import { authRoutes } from './auth-routes';
import { onboardingRoutes } from './onboarding-routes';
import { dashboardRoutes } from './dashboard-routes';
import { profileRoutes } from './profile-routes';
import { earningRoutes } from './earning-routes';
import { fundingRoutes } from './funding-routes';
import { productRoutes } from './product-routes';

// Aggregate all routes
export const routes: RouteType[] = [
    ...authRoutes,
    ...onboardingRoutes,
    ...dashboardRoutes,
    ...profileRoutes,
    ...earningRoutes,
    ...fundingRoutes,
    ...productRoutes,
]
