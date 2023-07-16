import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 600px);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  color: ${props => props.theme.colors.dark};
`;
