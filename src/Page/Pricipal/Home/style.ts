import styled from 'styled-components';


export const Container = styled.div`
 
    width:99vw;
   background-color:transparent;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;

`;


export const Section = styled.section`
    /// background-color:#000;
    max-width:1360px;
    height:600px;
`;

export const SectionSolar = styled.section`
  
    max-width:99vw;
    height:600px;
    margin-left:1rem;
`;
export const SectionSolarCinza = styled.section`
   //background:#ccc;
   background-image:url("fundo2.png");
   background-repeat: no-repeat;
    max-width:100vw;
    height:660px;
    //margin-left:1rem;
    z-index:10;
    margin-top:-150px;
    background-color:transparent;
`;
export const SectionSolarCinzaI = styled.section`
   //background:#ccc;
 
    max-width:100vw;
    height:900px;
    //margin-left:1rem;
    z-index:10;
    margin-top:100px;
    background-color:transparent;
`;

export const ContainerQ = styled.div`
   display:flex;
   flex-wrap:wrap;
   width:600px;
`;
export const Thumbnail = styled.div`
   flex:1 1 400px;
   background:blue;
   height:500px;
`;
export const Content= styled.div`
 flex: 2 1 300px;
`;
export const ContainerImg = styled.div`
    flex-direction:row;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    max-width:99vw;
    height:500px;
    margin-left:1rem;
    z-index:0;
`;
export const Box = styled.div`

    width:100vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media (max-width: 768px) {
        display:block; 
 
  }

    `;
        export const TituloSection = styled.h3`
        display:flex;
       justify-content:center;
       align-items:center;
       color: #002060;
       margin-top:8rem;
       font-family: 'Poppins', sans-serif;
        `;
         export const TituloSectionF = styled.h4`
         display:flex;
        justify-content:center;
        align-items:center;
        color: #002060;
        margin-top:13rem;
        font-family: 'Poppins', sans-serif;
         `;
         export const SubTitulo = styled.h5`
         display:flex;
        justify-content:center;
        align-items:center;
        margin-top:1rem;
        color: #002060;
        font-family: 'Poppins', sans-serif;
         `;
           export const Traco = styled.h1`
           font-weight:700;
           margin-top:-40px;
           display:flex;
          justify-content:center;
          align-items:center;
          color: #002060;
           `;
