import React from 'react';

import { Typograph, PropsText } from './styles';

interface Props extends PropsText {
  label?: string | React.ReactNode;
  children?: any;
  textAlign?: 'start' | 'center' | 'end';
}
const Text: React.FC<Props> = ({ label, type, children, color, ...rest }) => {
  return (
    <Typograph type={type} color={color} {...rest}>
      {label}
      {children}
    </Typograph>
  );
};

export default Text;
