import React, { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { RFValue } from "react-native-responsive-fontsize";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { Container, ClearIcon, Label } from "./styles";

export interface Props extends PickerSelectProps {
  placeholder?: string;
  doneText?: string;
  error?: boolean;
  isDisabled?: boolean;
  transparent?: boolean;
  onValueChange: (value: any, index: number) => void;
}

const PickerBase: ForwardRefRenderFunction<RNPickerSelect, Props> = (
  {
    placeholder,
    doneText,
    error = false,
    isDisabled,
    value,
    transparent,
    items,
    onValueChange,
    ...rest
  },
  ref
) => {
  const theme = useTheme();
  const borderColor = useMemo(() => {
    if (value) {
      return theme.colors.picker_border_color;
    }
    if (error) {
      return theme.colors.alert;
    }
    return theme.colors.picker_border_color;
  }, [error, theme.colors.picker_border_color, theme.colors.alert, value]);

  function bgColor() {
    if (!!isDisabled) return theme.colors.background_grey;
    if (!!transparent) return "transparent";

    return theme.colors.gray_light;
  }
  function checkValue(valor: any): boolean {
    return (
      valor === null ||
      valor === undefined ||
      valor === "" ||
      (typeof valor === "number" && valor === 0)
    );
  }

  const adjustedPlaceholder = useMemo(() => {
    return {
      color: theme.colors.text,
      fontFamily: theme.fonts.semi_bold,
      label: "Selecionar",
    };
  }, [value, placeholder, theme.colors.text, theme.fonts.semi_bold]);

  return (
    <Container>
      <Label>{placeholder}</Label>
      <ClearIcon onPress={() => onValueChange?.(null, 0)}>
        {!checkValue(value) && (
          <IconFontAwesome
            name="times-circle"
            size={20}
            color={theme.colors.secondary}
          />
        )}
      </ClearIcon>

      <RNPickerSelect
        ref={ref}
        disabled={isDisabled}
        useNativeAndroidPickerStyle={false}
        doneText={doneText || "Concluído"}
        placeholder={adjustedPlaceholder}
        items={items}
        value={value}
        onValueChange={(value, index) => {
          onValueChange && onValueChange(value, index - 1);
        }}
        Icon={() => (
          <IconFontAwesome
            name="caret-down"
            size={35}
            color={theme.colors.secondary}
          />
        )}
        style={{
          iconContainer: {
            marginTop: theme.shape.margin_top_select,
            marginEnd: theme.shape.margin_end_select,
          },
          placeholder: {
            textAlign: "left",
            color: theme.colors.text,
            fontSize: RFValue(14),
            fontFamily: theme.fonts.semi_bold,
          },
          inputAndroid: {
            backgroundColor: bgColor(),
            width: `100%`,
            fontFamily: theme.fonts.semi_bold,
            fontSize: RFValue(14),
            height: theme.shape.height_input_select,
            paddingHorizontal: theme.shape.padding_horizontal_select,
            paddingVertical: theme.shape.padding_vertical_select,
            paddingRight: 80,
            overflow: "hidden",
            borderWidth: theme.shape.border_whidth_select,
            borderTopColor: theme.colors.secondary,
            borderLeftColor: theme.colors.secondary,
            borderRightColor: theme.colors.secondary,
            borderRadius: theme.shape.border_radius_select,
            borderColor: theme.colors.secondary,
            borderBottomColor: theme.colors.secondary,
            color: theme.colors.secondary,
            marginBottom: 14,
          },
          inputIOS: {
            backgroundColor: isDisabled
              ? theme.colors.background_grey
              : theme.colors.paper,
            width: `100%`,
            height: 54,
            fontSize: RFValue(14),
            paddingHorizontal: theme.shape.padding_horizontal_select,
            paddingVertical: theme.shape.padding_vertical_select,
            borderBottomWidth: theme.shape.border_whidth_select,
            borderColor,
            borderBottomColor: theme.colors.picker_border_color,
            borderRadius: theme.shape.border_radius_select,
            color: theme.colors.text,
            marginBottom: 14,
          },
        }}
        {...rest}
      />
    </Container>
  );
};

export const Picker = forwardRef(PickerBase);
