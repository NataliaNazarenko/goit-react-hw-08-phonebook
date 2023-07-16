import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing(7.5)};

  width: ${props => props.theme.spacing(250)};
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.spacing(7.5)};
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium};
`;
