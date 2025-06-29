import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Screen size breakpoints
const screenSizes = {
  // iPhone SE (375 x 667)
  small: {
    width: 375,
    height: 667,
  },
  // iPhone 14 (390 x 844)
  medium: {
    width: 390,
    height: 844,
  },
  // Samsung S23 Ultra (412 x 915)
  large: {
    width: 412,
    height: 915,
  },
};

// Determine screen size category
const getScreenSize = () => {
  if (width <= 375) return 'small';
  if (width <= 390) return 'medium';
  return 'large';
};

// Responsive scaling functions
export const scale = (size) => {
  const screenSize = getScreenSize();
  const scaleFactors = {
    small: 0.8,
    medium: 1,
    large: 1.2,
  };
  return size * scaleFactors[screenSize];
};

export const verticalScale = (size) => {
  const screenSize = getScreenSize();
  const scaleFactors = {
    small: 0.8,
    medium: 1,
    large: 1.1,
  };
  return size * scaleFactors[screenSize];
};

export const moderateScale = (size, factor = 0.5) => {
  const screenSize = getScreenSize();
  const scaleFactors = {
    small: 0.8,
    medium: 1,
    large: 1.15,
  };
  return size + (scaleFactors[screenSize] - 1) * size * factor;
};

// Responsive dimensions
export const responsiveDimensions = {
  padding: {
    small: scale(12),
    medium: scale(16),
    large: scale(20),
  },
  margin: {
    small: scale(8),
    medium: scale(12),
    large: scale(16),
  },
  fontSize: {
    small: scale(12),
    medium: scale(14),
    large: scale(16),
  },
  titleSize: {
    small: scale(20),
    medium: scale(24),
    large: scale(28),
  },
};

// Get responsive value based on screen size
export const getResponsiveValue = (values) => {
  const screenSize = getScreenSize();
  return values[screenSize] || values.medium;
};

// Screen dimensions
export const screenWidth = width;
export const screenHeight = height;

// Platform-specific adjustments
export const isWeb = Platform.OS === 'web';
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// Web-specific responsive adjustments
export const getWebResponsiveValue = (mobileValue, webValue) => {
  return isWeb ? webValue : mobileValue;
}; 