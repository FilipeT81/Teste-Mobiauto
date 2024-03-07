import { ReactNode } from "react";
import { Modal } from "react-native";

import { useTheme } from "styled-components";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import {
  ModalContainer,
  Title,
  ModalContent,
  TitleContainer,
  Button,
  BorderHeader,
} from "./styles";

interface ModalProps {
  title: string;
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({
  title,
  children,
  visible,
  onClose,
}: ModalProps) => {
  const theme = useTheme();
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="slide"
    >
      <ModalContainer>
        <ModalContent>
          <BorderHeader>
            <TitleContainer>
              <Title label={title} type="label" />
            </TitleContainer>
            <Button onPress={() => onClose()}>
              <IconFontAwesome
                name="times-circle"
                size={20}
                color={theme.colors.secondary}
              />
            </Button>
          </BorderHeader>
          {children}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;
