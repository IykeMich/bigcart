import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";

// Placeholder components
const EarningMainScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Earning Main Screen'));
const EarningDetailsScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Earning Details Screen'));
const WithdrawScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Withdraw Screen'));

export const earningRoutes: RouteType[] = [
    {
        path: RouteConstant.earning.main.path,
        name: RouteConstant.earning.main.name,
        component: EarningMainScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            title: "Earnings",
            userType: 'provider',
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.earning.details.path,
        name: RouteConstant.earning.details.name,
        component: EarningDetailsScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.earning.withdraw.path,
        name: RouteConstant.earning.withdraw.name,
        component: WithdrawScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    }
];
