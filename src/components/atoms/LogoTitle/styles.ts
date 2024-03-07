import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InfoTextContainer = styled.View`
  margin-top: ${RFValue(35)}px;
  margin-bottom: ${RFValue(5)}px;
  align-items: center;
  width: 100%;
  align-self: center;
`;
export const InfoTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_bold};
  color: ${({ theme }) => theme.colors.primary};
`;
export const InfoTitleBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.tertiary};
`;
