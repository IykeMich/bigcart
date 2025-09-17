import {
    TextInputProps,
    View,
    TextInput,
    NativeSyntheticEvent,
    TextInputFocusEventData,
    Pressable
} from "react-native";
import EyePasswordShow from '@/assets/icons/eye-show.svg'
import EyePasswordUnShow from '@/assets/icons/eye-off.svg'
import ChevronLeft from '@/assets/icons/arrow-right.svg'
import React, {useState} from "react";
import {SvgProps} from "react-native-svg";
import { DefaultTypography } from "./DefaultTypography";
import { themeConfig } from "@/libs/theme/themeConfig";

export interface DefaultTextInputProps extends TextInputProps{
   formik?: any,
    label?: string,
    leftIcon?: React.FC<SvgProps>
    rightIcon?: React.FC<SvgProps>
    inputType?: "date"|"dropdown"|"text"|"message"|"currency",
    borderless?: boolean,
    name?: string,
    secureTextEntry?: boolean,
    containerClassname?: string,
    minContainerClassname?: string,
    backgroundClassname?: string
    onClick?: ()=>void
}
export const DefaultTextInput = ({className, inputType="text", minContainerClassname, onClick, editable, secureTextEntry, name, containerClassname,label, formik, backgroundClassname, ...props}: DefaultTextInputProps)=>{
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [secure, setSecure] = useState<boolean>(true)
    const textInput = name != undefined ? name : ''


    function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
        setIsFocused(true)
    }

    function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
        setIsFocused(false)
        formik?.handleBlur(textInput)(e)
    }

    const isSubmitted = typeof formik?.submitCount === 'number' && formik?.submitCount > 0
    const isError = !!formik?.errors?.[textInput] && (formik?.touched?.[textInput] || isSubmitted)

    const theme = themeConfig()

    return (
        <Pressable onPress={onClick}  className={`gap-2 my-1 ${containerClassname} ${backgroundClassname}`}>
            {
                label && (
                    <DefaultTypography className={"text-gray-700  text-[14px]"}>{label}</DefaultTypography>
                )
            }
            <View className={`gap-2 bg-white px-3 flex-row h-[60px]  rounded-xl ${minContainerClassname}`}>
                {
                    props.leftIcon &&
                    <View className={' h-full justify-center px-1'}>
                        <props.leftIcon  />
                    </View>
                }

                <TextInput
                    editable={inputType == "text" || inputType=="currency"  ? editable : false}
                    returnKeyType={inputType === "currency" ? undefined : "done"}
                    value={formik?.values?.[textInput]}
                    onChangeText={formik?.handleChange(textInput)}
                    secureTextEntry={secureTextEntry && secure}
                    placeholderTextColor={'#8E8E93'}
                    className={`grow  text-[14px] ${className}`}
                    style={[{ color: '#111827', fontWeight: '400' }, props.style]}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    {...props}
                />
                {
                    inputType == "dropdown" &&
                    <View className={' h-full justify-center px-1'}>
                        <ChevronLeft style={{transform: [{ rotate: '90deg' }], width: 20, height: 20}} color={'black'} />
                    </View>
                }
                {
                    inputType == "date" &&
                    <View className={' h-full justify-center px-1'}>
                    </View>
                }
                {
                    inputType == "currency" &&
                    <View className={' h-full justify-center px-1'}>
                        <DefaultTypography>NGN</DefaultTypography>
                    </View>
                }
                {
                    inputType == "message" &&
                    <View className={' h-[400px] justify-center px-1'}>
                    </View>
                }
                {
                    secureTextEntry && (
                        <Pressable className={' h-full justify-center px-1'} onPress={() => setSecure(!secure)}>
                            {
                                !secure ? <EyePasswordShow color={"black"} width={20} height={20}/> :
                                    <EyePasswordUnShow color={"black"} width={20} height={20}/>
                            }
                        </Pressable>
                    )
                }
                                {
                    props.rightIcon &&
                    <View className={' h-full justify-center px-1'}>
                        <props.rightIcon  />
                    </View>
                }

            </View>
            {
                isError && (
                    <DefaultTypography className={'text-red-600 text-[11px]'}>{formik?.errors[textInput]}</DefaultTypography>
                )
            }
        </Pressable>
    )
}