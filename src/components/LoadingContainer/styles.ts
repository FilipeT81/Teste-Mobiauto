import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export interface ContainerLoadingProps {
  isLoadingIos?: boolean;
}
export const Container = styled.View<ContainerLoadingProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ isLoadingIos }) => (isLoadingIos ? '200' : '200')}px;
  background-color: ${({ theme }) => theme.colors.background_page};
`;

export const TextLoading = styled.Text`
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.secondary};
`;
