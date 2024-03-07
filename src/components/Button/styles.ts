import { Entypo, AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { commonAlignProps, AlignProps } from '@src/global/styles/common';

interface Props extends AlignProps {
  enabled?: boolean;
  disabled?: boolean;
  dark: boolean;
  success?: boolean;
  children: React.ReactNode;
  primary?: boolean;
  paper?: boolean;
}
export const Container = styled.View``;

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, dark, success, primary, paper, disabled }) => {
    if (disabled) return theme.colors.grey;
    if (paper) return theme.colors.paper;
    if (success) {
      return theme.colors.success;
    }

    if (dark || primary) {
      return theme.colors.primary;
    }

    return theme.colors.background;
  }};
  ${({ theme, paper }) => paper && { 'border-color': theme.colors.paper }}
  ${({ paper }) => paper && { 'border-width': '1px' }}

  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${(props) => commonAlignProps(props)}

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export const IconContainer = styled.View`
  margin-left: 20px;
`;

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.blue_light,
}))``;

export const IconAntDesign = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.icon,
}))``;

export const Label = styled.Text<Props>`
  color: ${({ theme, dark, success, primary, paper }) => {
    if (paper) return theme.colors.paper;

    if (primary) return theme.colors.paper;

    if (dark || success) {
      return theme.colors.text_shape;
    }

    return theme.colors.background_grey;
  }};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => RFValue(theme.typography.label)}px;
`;
