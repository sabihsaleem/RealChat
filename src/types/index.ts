import {ReactNode} from 'react';
import {
  ColorValue,
  DimensionValue,
  GestureResponderEvent,
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type CustomTextInputTypes = {
  title?: string;
  onChangeText?: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  value?: string;
  placeholderTextColor?: ColorValue;
  isLeft?: boolean;
  leftIconSource?: ImageSourcePropType;
  backgroundColor?: ColorValue;
  isRight?: boolean;
  onPressRight?: (event: GestureResponderEvent) => void;
  onPressLeft?: (event: GestureResponderEvent) => void;
  secureTextEntry?: boolean;
  styleTextInput?: StyleProp<TextStyle>;
  styleRight?: StyleProp<ViewStyle>;
  styleLeft?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  reference?: React.LegacyRef<TextInput>;
  errorText?: string;
};

export type CustomTextTypes = {
  title?: string | number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  textStyle?: StyleProp<ViewStyle>;
};

export type CustomHeaderTypes = {
  title?: string;
  leftIconColor?: number | ColorValue;
  isLeftIcon?: boolean;
  leftChild?: ReactNode;
  onLeftClick?: ((event: GestureResponderEvent) => void) | undefined;
  leftBtnDisabled?: boolean;
  isRightIcon?: boolean;
  rightChild?: ReactNode;
  onRightClick?: ((event: GestureResponderEvent) => void) | undefined;
  rightBtnDisabled?: boolean;
  hasSafeArea?: DimensionValue;
  content?: string;
  bgColorAndroid?: number | ColorValue;
};

export type CustomButtonTypes = {
  title?: string | number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type CustomSelectorTypes = {
  selectorText?: string;
  customStyles?: StyleProp<ViewStyle>;
  isEnabled?: boolean;
  isSwitch?: boolean;
  trueTrackColor?: null | ColorValue;
  falseTrackColor?: null | ColorValue;
  selectedColorThumbColor?: ColorValue;
  unSelectedColorThumbColor?: ColorValue;
  toggleSwitch?: ((value: boolean) => void | Promise<void>) | null;
};
