import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
.header{
    margin-bottom : 10px;
    padding : 3px
    width : 100%;
    text-align : center;
    box-shadow : 0px 1px 1px gray;
}

.style-button{
    margin : 3px;
    padding : 2px 10px;
    border-radius : 5px;
    border-color : white;
    background-color : rgb(152,251,152);

    :hover{
        background-color : rgb(124,252,0);
        border-color : white;
    }
}
.images{
    width:150px;
    height:150px;
    margin-left: auto;
  margin-right: auto;
}



`;
