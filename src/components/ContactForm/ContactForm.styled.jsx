import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: ${props => props.theme.spacing(5)};

  width: ${props => props.theme.spacing(50)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.dark};
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

export const SubmitButton = styled.button`
  display: flex;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(2.5)};
  background: ${props => props.theme.colors.tagBackground};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};

  line-height: ${props => props.theme.spacing(4.5)};
  font-weight: 600;
  justify-content: center;
  width: ${props => props.theme.spacing(27.5)};
  border-radius: ${props => props.theme.spacing(1.25)};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  border: ${props => props.theme.spacing(0.25)} solid ${props => props.theme.colors.accent};
  margin-top: ${props => props.theme.spacing(2.5)};

  :hover {
    background: ${props => props.theme.colors.accent};
  }
`;
