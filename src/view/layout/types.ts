import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

// Base layout props that all layouts should extend
export interface BaseLayoutProps extends ViewProps {
  children: ReactNode;
  className?: string;
}

// Header configuration for layouts that support headers
export interface HeaderConfig {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  rightComponent?: ReactNode;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

// Default layout props - for standard app screens
export interface DefaultLayoutProps extends BaseLayoutProps {
  // Required props
  children: ReactNode;
  
  // Header configuration
  title?: string;
  menuType?: 'back' | 'menu' | 'none';
  showHeader?: boolean;
  rightComponent?: ReactNode;
  goBack?: () => void;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  
  // Layout styling
  className?: string;
  backgroundColor?: string;
}

// Auth layout props - for authentication screens
export interface AuthLayoutProps extends BaseLayoutProps {
  // Required props
  children: ReactNode;
  
  // Header configuration
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  goBack?: () => void;
  onBackPress?: () => void;
  
  // Auth-specific props
  clearToken?: boolean;
  
  // Layout styling
  className?: string;
  backgroundColor?: string;
}

// Container layout props - for base layout wrapper
export interface ContainerLayoutProps extends BaseLayoutProps {
  // Required props
  children: ReactNode;
  
  // Layout configuration
  backgroundColor?: string;
  barColor?: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
  fullscreenMode?: boolean;
  
  // Styling
  className?: string;
}

// Scrollable layout props - for scrollable content
export interface ContainerScrollViewLayoutProps extends ContainerLayoutProps {
  // Required props
  children: ReactNode;
  
  // Scroll configuration
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: any;
  
  // Layout configuration
  backgroundColor?: string;
  barColor?: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
  fullscreenMode?: boolean;
  
  // Styling
  className?: string;
}
