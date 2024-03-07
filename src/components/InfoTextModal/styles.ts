import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface PropsText {
  type:
    | 'title'
    | 'titleButton'
    | 'titleHeader'
    | 'subtitle'
    | 'paragraph'
    | 'label'
    | 'labelBold'
    | 'labelSmall'
    | 'collapsable'
    | 'collapsableBold';
  color?: string;
  fontFamily?: 'secondary';
  textAlign?: 'start' | 'center' | 'end';
}

export const Typograph = styled.Text<PropsText>`
  font-family: ${({ theme, fontFamily }) =>
    fontFamily === 'secondary' ? theme.fonts.secondary_regular : theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  ${({ textAlign }) => {
    return (
      textAlign && {
        'text-align': textAlign,
      }
    );
  }}

  color: ${({ color, theme }) => color || theme.colors.text};

  ${({ type, color, fontFamily }) => {
    switch (type) {
      case 'title':
        return css`
          color: ${({ theme }) => color || theme.colors.primary};
          font-size: ${({ theme }) => RFValue(theme.typography.title)}px;
        `;
      case 'titleButton':
        return css`
          color: ${({ theme }) => color || theme.colors.primary};
          font-size: ${({ theme }) => RFValue(theme.typography.titleButton)}px;
        `;
      case 'titleHeader':
        return css`
          font-family: ${({ theme }) => theme.fonts.semi_bold};
          color: ${({ theme }) => color || theme.colors.text_collapsable};
          font-size: ${({ theme }) => RFValue(theme.typography.titleHeader)}px;
        `;
      case 'subtitle':
        return css`
          color: ${({ theme }) => color || theme.colors.text};
          font-size: ${({ theme }) => RFValue(theme.typography.subtitle)}px;
        `;
      case 'paragraph':
        return css`
          color: ${({ theme }) => color || theme.colors.text};
          font-size: ${({ theme }) => RFValue(theme.typography.paragraph)}px;
        `;
      case 'label':
        return css`
          color: ${({ theme }) => color || theme.colors.text};
          font-size: ${({ theme }) => RFValue(theme.typography.label)}px;
        `;
      case 'labelBold':
        return css`
          font-family: ${({ theme }) =>
            fontFamily === 'secondary' ? theme.fonts.secondary_bold : theme.fonts.bold};
          color: ${({ theme }) => color || theme.colors.primary};
          font-size: ${({ theme }) => RFValue(theme.typography.labelBold)}px;
        `;
      case 'labelSmall':
        return css`
          color: ${({ theme }) => color || theme.colors.text};
          font-size: ${({ theme }) => RFValue(theme.typography.labelSmall)}px;
        `;
      case 'collapsableBold':
        return css`
          font-family: ${({ theme }) =>
            fontFamily === 'secondary' ? theme.fonts.secondary_bold : theme.fonts.bold};
          color: ${({ theme }) => color || theme.colors.text_collapsable};
          font-size: ${({ theme }) => RFValue(theme.typography.paragraph)}px;
        `;
      case 'collapsable':
        return css`
          font-family: ${({ theme }) =>
            fontFamily === 'secondary' ? theme.fonts.secondary_bold : theme.fonts.bold};
          color: ${({ theme }) => color || theme.colors.east_bay};
          font-size: ${({ theme }) => RFValue(theme.typography.label)}px;
        `;
      default:
        return css`
          color: ${({ theme }) => color || theme.colors.text};
          font-size: ${({ theme }) => RFValue(theme.typography.paragraph)}px;
        `;
    }
  }}
`;
