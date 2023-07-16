import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 600px);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.medium};
  text-align: center;
  margin-right: auto;
  color: ${props => props.theme.colors.dark};
`;
