
import styled from 'styled-components';
export const Container= styled.div`
width:90vw;
height:50vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

@media (max-width: 768px) {
  width:100%;
//height:100%;
  
  }
  @media (max-width: 550px) {
    width:100%;
//height:100%;
background:#172554;
  }

`;


export const ContainerPage = styled.div`
width:96vw;
//height:300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
background:#172554;///#001f5f;
flex-direction:row;
z-index:0;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
width:90vw;
flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:0.6rem;
    color: #eab308;
    font-size:18px;
    font-family: 'Poppins', sans-serif;
    font-weight:700;
background:#172554;///#001f5f;

`;
export const Box = styled.div`
width:12rem;
flex-direction:row;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:0.8rem;

`;


export const LinkFooter = styled.div`
flex-direction:column;
  display:flex;
  color:#e5e7eb;
  font-weight:400;
  font-family: 'Poppins', sans-serif;
  padding:0.6rem;
  line-height: 32px;
  font-size: 16px;
  transition: all 0.5s;
  cursor: pointer;


  a{
    color:#e5e7eb;
    list-style:none;
    text-decoration: none;
    &:hover{
    color:#ffffb2;
    transition: 200ms ease-in;
  }
}

`;
export const ColumnRodape = styled.div`
display:flex;
justify-content:center;
 align-items:center;
flex-direction:column;

`;

export const Rodape = styled.div`
width:96vw;
height:4rem;
flex-wrap:wrap;
display:flex;
justify-content:center;
 align-items:center;
background:#172554;//#001f5f;
color:#fff;
font-size:12px;
font-family: 'Poppins', sans-serif;
@media (max-width: 550px) {
  margin-left:50px;
}
`;