import styled from 'styled-components/native';
export const PageContainer = styled.View`
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const InfoContainer = styled.View`
  height: 100%;
`;
export const FormContainer = styled.View`
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.background_page};
  flex: 1;
`;
export const LogoTitleContainer = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;
