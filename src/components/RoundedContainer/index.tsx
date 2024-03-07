import React from 'react';

import { BottomSheetContainer, BottomSheetContent } from './styles';

interface Props {
  children?: any;
}
const RoundedContainer: React.FC<Props> = ({ children }) => {
  return (
    <BottomSheetContent>
      <BottomSheetContainer>{children}</BottomSheetContainer>
    </BottomSheetContent>
  );
};

export default RoundedContainer;
