import styled from "styled-components";

export const Container = styled.div `
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
        background-color: white;
        margin-top: 10%;
        h3{
            margin-left: 20px;
            margin-bottom: 20px;
        }
        svg {
            margin-right: 20px;
            margin-left: 20px;
            font-size: 20px;
        }
`;

export const Header = styled.div `
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 0 20px 0;
        svg {
            font-size: 18pt;
            cursor: pointer;
        }
        .iconHeader{
            border: 1pt solid #e4e4e4;
            border-radius: 30px;
            padding: 4px;
            color: #45D0c1;
            font-size: 25pt;
        }
`;

export const Modal = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2;

`;
export const Recompense = styled.button`
       display: flex;
       width: 100%;
       height: 50px; 
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       border: none;
       background-color: #FFFFFF;
       border-bottom: 1px solid #dbdbdb;

    svg {
      color: black;
    }
    p{
      display: flex;
      align-items: center;
    }
  
  @media(min-width: 700px){
    height: 80px;
  }
`;

export const TextArea = styled.textarea `
       display: flex;
       width: 100%;
       height: 50px;
       padding: 20px;
       flex-direction: row;
       border: 0;
       align-items: center;
       justify-content: space-between;
       background-color: #FFFFFF;
       border-bottom: 1px solid #dbdbdb;
`;

export const Title = styled.div`
       width: 100%;
       display: flex;
       align-items: center;
       padding-bottom: 20px;
       margin-left: 20px;
       p {
          display: flex;
          align-items: center;
          margin: 0;
       svg {
           margin-left: 20px; 
           color: #45D0c1;
           font-size: 17pt;
       }
  }
`;