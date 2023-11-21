import styled from 'styled-components';

const theme ={
    colors: {
        secondary: '#202b3b',
        white: '#FFFFFF'
      },
  }

export const Container = styled.div`
input{
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: ${theme.colors.secondary};
    border: none;
    color: ${theme.colors.white};
    letter-spacing: 1px;
    font-weight: 700;
}
`