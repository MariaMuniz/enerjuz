import styled from 'styled-components';

export const Container = styled.div`
margin-top:-1rem;
width: 300px;
margin-left:60px;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Titulo = styled.h3`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:1.6rem;
  color:#000;
 
  width: 260px;

`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:1rem;
  color:#000;
  font-size:1rem;
  width: 250px;

`;


export const Formulario = styled.div`
display: flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
  z-index: 1;
  background: #fff;
  max-width: 300px;
  margin: 0 auto 5px;
  padding: 30px;
  text-align: center;

`;

export const Label = styled.label`
display: flex;
justify-content:flex-start;
align-items:center;
font-family: "Roboto", sans-serif;
  outline: 0;
  width: 90%;
  border:0;
  margin: 0 2px 0px 2px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight:400;
 
`;

export const Input = styled.input`
font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 90%;
  height:2rem;
  border:0;
  margin: 0 0px 0 0px;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 12px;
  border-radius: 5px;
    border: 1px solid #add8e6;
    //box-shadow: 1px 1px 1px #add8e6;


`;

export const Button = styled.button`
  width: 14rem;
  color: #FFFFFF;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  background-color:#002060;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 20px;

  &:hover{
    background-color: #06238f;
  }
`;


export const Menssage = styled.textarea`
  margin-top:1rem;
  width: 210px;
   height:20vh;
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #add8e6;
  margin:10px 10px;

`;

export const ContainerBtn = styled.div`
   width: 300px;
margin-left:0;
display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;