import styled from 'styled-components/native';
import Text from '../Text';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Flex from '../Flex';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  align-items: center;
`;

export const BorderHeader = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_page};
`;

export const TitleContainer = styled.View`
`;

export const Title = styled(Text)`
  text-align: center;
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled(TouchableOpacity)``;


