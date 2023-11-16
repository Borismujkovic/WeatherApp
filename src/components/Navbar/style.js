import styled from "styled-components";

export const Navbar = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: flex-start;
background-color: #202b3b;
border-radius: 1rem;
padding: 1rem;
min-height: 100vh;
img{
    height: 70px;
}
h1{
    text-align: center;
}
ul{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    li{
        width: 100%;
        font-size: 1.4rem;
    }
}
`;