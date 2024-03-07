import React from 'react';
import { ViewProps, FlexAlignType } from 'react-native';
import { AlignProps } from '@styles/common';
import { Container } from './styles';

export interface FlexProps extends ViewProps, AlignProps {
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

const Flex = ({ ...props }: FlexProps) => {
  return <Container {...props} />;
};

export default Flex;
