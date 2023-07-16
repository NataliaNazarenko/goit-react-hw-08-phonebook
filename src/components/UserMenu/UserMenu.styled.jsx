import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: ${props => props.theme.spacing(3)}
`;

export const Text = styled.p`
font-weight: 700;
color: ${props => props.theme.colors.accent};
font-size: ${props => props.theme.fontSizes.large}
`;

export const Button = styled.button`
padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
font: inherit;
cursor: pointer;
border-radius: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
border: 3px solid ${props => props.theme.colors.accent};
color: ${props => props.theme.colors.accent};
font-size: ${props => props.theme.fontSizes.large};
display: flex;
align-items: center;
justify-content: center;
margin: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(2)};

&:hover {
background-color: ${props => props.theme.colors.light};
}
`;