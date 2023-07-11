import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${props => props.theme.spacing(50)};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(4.5)};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(1.25)};
  margin-left: ${props => props.theme.spacing(1.25)};
`;

export const Input = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(1.25)};
  color: ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.spacing(0.25)} solid ${props => props.theme.colors.gray};
  box-shadow: ${props => props.theme.shadows.small};
`;
