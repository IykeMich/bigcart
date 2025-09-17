import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import InitiateOnboardingScreen from "@/view/screens/onboarding/InitiateOnboardingScreen";
import SplashScreen from "@/view/screens/onboarding/SplashScreen";
import CompleteOnboardingScreen from "@/view/screens/onboarding/CompleteOnboardingScreen";
import HomeScreen from "@/view/screens/dashboard/HomeScreen";

export const onboardingRoutes: RouteType[] = [
    {
        path: RouteConstant.onboarding.splash.path,
        name: RouteConstant.onboarding.splash.name,
        // component: SplashScreen,
        component: HomeScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.onboarding.initiate.path,
        name: RouteConstant.onboarding.initiate.name,
        component: InitiateOnboardingScreen,
        // component: HomeScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.onboarding.complete.path,
        name: RouteConstant.onboarding.complete.name,
        component: CompleteOnboardingScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    }
];