import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";

// Placeholder components
const FundingMainScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Funding Main Screen'));
const AddCardScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Add Card Screen'));
const PaymentMethodsScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Payment Methods Screen'));

export const fundingRoutes: RouteType[] = [
    {
        path: RouteConstant.funding.main.path,
        name: RouteConstant.funding.main.name,
        component: FundingMainScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            title: "Funding",
            userType: 'both',
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.funding.addCard.path,
        name: RouteConstant.funding.addCard.name,
        component: AddCardScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.funding.paymentMethods.path,
        name: RouteConstant.funding.paymentMethods.name,
        component: PaymentMethodsScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    }
];
