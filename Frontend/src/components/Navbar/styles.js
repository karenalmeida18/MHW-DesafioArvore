import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    background-color: white;

    ul {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 8px 20px 8px 20px;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 7pt;
            color: gray;
           
            a {
              text-decoration: none;
              color: inherit;
              flex-direction: column;
              display: flex;
              align-items: center;
            }

            svg {
                font-size: 14pt;
                margin-bottom: 4px;
            }
        }
    }
    @media(min-width: 700px){    
        ul{
            padding: 8px 110px 8px 110px;
            
            li {
                flex-direction: row;
                font-size: 12pt;
                margin-bottom: 5px;

                a {
                    flex-direction: row;
                } 

                svg {
                    margin-right: 8px;
                    margin-bottom: 0;
                }
            }
        }
    }
  

`;