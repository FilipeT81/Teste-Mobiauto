import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  position: relative;
`;
export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.semi_bold};
  color: ${(props) => props.theme.colors.text};
`;
export const ClearIcon = styled.TouchableOpacity`
  z-index: 2;
  width: 8%;
  position: absolute;
  top: 45%;
  left: 80%;
`;
