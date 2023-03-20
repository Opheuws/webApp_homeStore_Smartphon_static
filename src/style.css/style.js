import styled from "styled-components";

export const productsArea = styled.div `

display : flex;
gap: 50px;
flex-wrap: wrap;
justify-content: center;
align-items: center;

    div{
        heigth: 320px;
        width: 250px;
        border: 1px solid  red;
        display: flex;
        justify-content: space-between;
        flex-direction: colun;
        align-items: center;
        padding: 20px;

        button{
            font-size: 25px;
            background: transparent;
            border: none;
            color: crimson;
        }
    }

`
;