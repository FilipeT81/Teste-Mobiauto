import styled from 'styled-components/native';
import { View } from 'react-native';

export const BottomSheetContainer = styled(View)`
  padding: ${({ theme }) => theme.shape.padding_bottom_sheet_container}px;
  background-color: ${({ theme }) => theme.colors.background_page};
  border-top-color: ${({ theme }) => theme.colors.secondary};
  border-top-left-color: ${({ theme }) => theme.colors.secondary};
  border-top-right-color: ${({ theme }) => theme.colors.secondary};
  border-top-width: 0.2px;
  border-left-width: 0.2px;
  border-right-width: 0.2px;
  border-top-left-radius: ${({ theme }) => theme.shape.border_top_left_radius}px;
  border-top-right-radius: ${({ theme }) => theme.shape.border_top_right_radius}px;
`;

export const BottomSheetContent = styled.View`
  width: 100%;
`;
