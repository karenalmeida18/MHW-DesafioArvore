import styled from "styled-components";

export const RecompensesContainer = styled.div`
  
  display: flex;
  position: fixed;
  top: 80px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  
  
   
  .voltar{
  display: block;
  position: fixed;
  top: 15px;
  width: 100%;
  margin:5px;
  font-size:30px;
  }

  
  .recompensa1 {
    display: inline-block;
    position: fixed;
    top: 200px;
    width: 100%;
    flex-direction: row;
    padding-bottom:15px;
    border-bottom: 1px solid grey;

    
    
   svg {
      margin-right: 12px;
      font-size:20px;
      color:#A97ED1;
          
    } 
     }

  .recompensa2 {
    display: inline-block;
    position: fixed;
    top: 250px;
    width: 100%;
    flex-direction: row;
    padding-bottom:15px;
    border-bottom: 1px solid grey;
    
    
    
  

  svg {
      margin-right: 12px;
      font-size:20px;
      color:#A97ED1;
    }
  }


`;

export const NewRecompensa = styled.div`


  display: inline-block;
  position: fixed;
  top: 150px;
  width: 100%;
  flex-direction: row;
  padding-bottom:15px;
  border-bottom: 1px solid grey;
  

  svg {
    margin-right: 12px;
    font-size:20px;
    color:#45D0C1;
  }

`;




  