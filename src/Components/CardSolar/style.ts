import styled from 'styled-components';


export const Container = styled.div`
    width: 16rem;
    height:280px;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
    z-index:0;
    margin-bottom:1rem;
    margin-left:2rem;
    border-radius:8px;
  
`;

export const Titulo = styled.div`
font-size:21px;
font-weight:700;
color:#002060;
  display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Poppins', sans-serif;
`;

export const Desc= styled.div`
font-size:14px;
  display:flex;
    justify-content:center;
    align-items:center;
    margin:1rem;
`;
export const Numero= styled.div`
width:18px;
height:18px;
padding:0.8rem;
font-size:18px;
border-radius:50%;
border:1px solid #002060;
background:#002060;
  color:#fff;
  display:flex;
    justify-content:center;
    align-items:center;
`;

export const BoxNumero= styled.div`
width:170px;
height:20px;

display:flex;
    justify-content:flex-start;
    align-items:flex-start;

`;

export const Imagem = styled.img`
width:5rem;
  display:flex;
    justify-content:center;
    align-items:center;
		transition: all 0.5s;
    cursor: pointer;
		&:hover{
		-webkit-transform: scale(0.8);
    transform: scale(1.1);
		}
`;