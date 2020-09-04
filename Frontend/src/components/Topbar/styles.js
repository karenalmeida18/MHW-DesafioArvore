import styled from "styled-components";

export const TopbarContainer = styled.div`
     position: sticky;
     display: flex;
     width: 100%;
     top: 0;
     justify-content: space-between;
     padding: 10px 8px 10px 8px;
     background-color: white;
     
     svg {
         font-size: 18pt;
     }
     
     @media (min-width: 700px){
         padding: 8px 110px 8px 110px;
  
     svg { 
         font-size: 20pt;
     }
    }

`;

export const IconsContainer = styled.div`
     display: flex;
     flex-direction: row;
`;

export const IconStar = styled.div`
     display: flex;
     flex-direction: row;
     background-color: #fbf0ff;
     color: #A55EBF;
     border-radius: 20px;
     padding: 5px;
     font-size: 8pt;
     align-items: center;
     margin-right: 9px;
    
     svg {
         color: #A55EBF;
         font-size: 12pt; 
     } 
     div {
         background-color: #dbb4ee;
         border-radius: 40px;
         padding: 2px 2px 0px 2px;
         margin-right: 5px;
    }

     @media (min-width: 700px){
         font-size: 12pt;
    }
`;

export const IconCoin = styled.div`
     display: flex;
     flex-direction: row;
     background-color: #fffbdc;
     color: #fcd406;
     border-radius: 20px;
     padding: 5px;
     font-size: 8pt;
     justify-content: end;
     align-items: center;
     p  {
         background-color: #fcd406;
         font: bold 9pt Arial;
         border-radius: 40px;
         padding: 3px 6px 3px 6px;
         margin-right: 5px;
         color: white;
     }
     @media (min-width: 700px){
          font-size: 12pt;
     }
`;
