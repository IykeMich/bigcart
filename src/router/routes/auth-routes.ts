import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";
import LoginScreen from "@/view/screens/auth/LoginScreen";
import SignupScreen from "@/view/screens/auth/SignupScreen";
import ForgotPasswordScreen from "@/view/screens/auth/ForgotPasswordScreen";

// Placeholder components - these would be actual screen components
const ResetPasswordScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Reset Password Screen'));

export const authRoutes: RouteType[] = [
    {
        path: RouteConstant.auth.login.path,
        name: RouteConstant.auth.login.name,
        component: LoginScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.auth.signup.path,
        name: RouteConstant.auth.signup.name,
        component: SignupScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.auth.forgotPassword.path,
        name: RouteConstant.auth.forgotPassword.name,
        component: ForgotPasswordScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.auth.resetPassword.path,
        name: RouteConstant.auth.resetPassword.name,
        component: ResetPasswordScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    }
];
