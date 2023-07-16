import styled from '@emotion/styled';

export const Header = styled.header`
  align-items: center;
  margin: 0 auto 20px auto;

  background: ${props => props.theme.colors.mainBackground};
  width: 980px;

  border-bottom: 1px solid ${props => props.theme.colors.accent};
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;
