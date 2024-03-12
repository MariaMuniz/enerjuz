import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height: 9rem;
    margin:0;
    display: flex;
    justify-content:center;
    align-items:center;
   margin-bottom:1rem;
   flex-direction:row;
   background-image:url("topo2.png");
   @media (max-width: 768px) {
margin-top:4.2rem;
  
  }
    `;

export const Box = styled.div`
 display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export const Titulo = styled.div`
  font-weight: 700;
    font-size: 24pt;
    color:#002060;
  `;

export const Traco = styled.div`
margin-top:-2rem;
 font-weight: 700;
    font-size: 24pt;
    color:#002060;
 `;