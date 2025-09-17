import React from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { SvgProps } from "react-native-svg"

type GradientButtonProps = {
  title: string
  onPress?: () => void
  className?: string
  textClassName?: string
  leftIcon?: React.FC<SvgProps>
  rightIcon?: React.FC<SvgProps>
  iconColor?: string
  iconSize?: number
  disabled?: boolean
}

export default function GradientButton({
  title,
  onPress,
  className,
  textClassName,
  leftIcon,
  rightIcon,
  iconColor = "white",
  iconSize = 24,
  disabled = false,
  ...props
}: GradientButtonProps) {
  const LeftIcon = leftIcon
  const RightIcon = rightIcon
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      className={`rounded-lg overflow-hidden w-[200px] ${className} ${disabled ? 'opacity-50' : ''}`}
      onPress={disabled ? undefined : onPress}
      style={styles.shadow} // 👈 only shadow added
      disabled={disabled}
      {...props}
    >
      <LinearGradient
        colors={["#A8E063", "#56AB2F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="px-8 py-4 items-center justify-center rounded-lg"
      >
        <View className="flex-row items-center justify-center relative w-full h-[48px]">
          {/* Left Icon */}
          {LeftIcon && (
            <View className="absolute left-4 h-full justify-center">
              <LeftIcon color={iconColor} width={iconSize} height={iconSize} />
            </View>
          )}

          {/* Center Title */}
          <Text className={`text-white font-poppins-semibold text-base text-center ${textClassName}`}>
            {title}
          </Text>

          {/* Right Icon */}
          {RightIcon && (
            <View className="absolute right-4 h-full justify-center">
              <RightIcon color={iconColor} width={iconSize} height={iconSize} />
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000", // black shadow
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6, // Android shadow
  },
})
