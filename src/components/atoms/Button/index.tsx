import {
  ButtonContainer,
  Container,
  Icon,
  IconAntDesign,
  IconContainer,
  Label,
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { AlignProps } from "@src/global/styles/common";

interface Props extends TouchableOpacityProps, AlignProps {
  dark?: boolean;
  name?: string;
  label?: string;
  onPress?: () => void;
  positionIcon?: "left" | "right";
  typeIcon?: "entypo" | "antDesign";
  success?: boolean;
  primary?: boolean;
  paper?: boolean;
}
const Button: React.FC<Props> = ({
  dark = false,
  name,
  label,
  positionIcon = "right",
  typeIcon = "entypo",
  paper,
  success,
  ...rest
}: Props) => {
  const buttonContainerProps = {
    success,
    dark,
    paper,
    ...rest,
  };

  return (
    <Container>
      <ButtonContainer {...buttonContainerProps} disabled={rest.disabled}>
        {positionIcon == "left" && name && (
          <IconContainer>
            {typeIcon == "antDesign" ? (
              <IconAntDesign name={name} />
            ) : (
              <Icon name={name} />
            )}
          </IconContainer>
        )}
        <Label
          paper={paper}
          primary
          dark={dark}
          enabled={!rest.disabled}
          success={success}
        >
          {label}
        </Label>
        {positionIcon == "right" && name && (
          <IconContainer>
            {typeIcon == "antDesign" ? (
              <IconAntDesign name={name} />
            ) : (
              <Icon name={name} />
            )}
          </IconContainer>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Button;
