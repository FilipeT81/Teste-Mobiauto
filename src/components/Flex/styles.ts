import styled from 'styled-components/native';
import { View, ViewProps, FlexAlignType } from 'react-native';
import { commonAlignProps, AlignProps } from '@styles/common';

interface Props extends ViewProps, AlignProps {
  directionFlex?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  items?: FlexAlignType;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}
export const Container = styled(View)<Props>`
  display: flex;
  width: 100% !important;
  flex-direction: ${({ directionFlex }) => {
    return directionFlex ?? 'column';
  }};
  justify-content: ${({ justify }) => justify ?? 'center'};
  align-items: ${({ items }) => items ?? 'center'};
  ${(props) => commonAlignProps(props)}
`;
