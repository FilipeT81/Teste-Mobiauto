import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from '@atoms/Text';
import { TouchableOpacity } from 'react-native';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`;

export const ContainerIcon = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  top: 10px;
  flex-direction: column;
  width: 80px;
  align-items: center;
`;

export const LabelIcon = styled(Text)`
  text-align: center;
`;
