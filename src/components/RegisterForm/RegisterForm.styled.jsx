import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: fixed;
  background: white;
  width: 400px;
  height: auto;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 24rem;
`;

export const FormTitle = styled.h2`
  margin-top: 40px;
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.large};
  line-height: ${props => props.theme.spacing(8)};
  font-weight: 700;
  letter-spacing: -0.025em;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: ${props => props.theme.spacing(6)};
  display: flex;
  justify-content: space-between;
  gap: ${props => props.theme.spacing(2)};
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(5)};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Input = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(1)} 0;
  color: ${props => props.theme.colors.dark};
  width: 100%;
  border-radius: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: ${props => props.theme.shadows.small};

  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: ${props => props.theme.spacing(5)};
  }
`;

export const Button = styled.button`
  display: flex;
  padding-top: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(5)};
  font-weight: 600;
  justify-content: center;
  width: 100%;
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.gray};
  }
`;

export const ChangeFormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(5)};
  text-align: center;
`;

export const ChangeFormLink = styled.div`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  line-height: ${props => props.theme.spacing(5)};
  margin-left: ${props => props.theme.spacing(1)};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.gray};
  }
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
`;
