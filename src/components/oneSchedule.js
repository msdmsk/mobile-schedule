import React from "react";
import { Dimensions, View, Text, TextInput } from "react-native";
import styled from "styled-components";

const oneSchedule=({date,todo,}) => {
return(
  <StyledView>
   <Date>{date}</Date>
   <ToDo>
    <Detail>{todo}</Detail>
    <FromTo>
     <From>{start}</From>
     <Label>~</Label>
     <To>{end}</To>
    </FromTo>  
   </ToDo>
  </StyledView>
 );
};

const { width } = Dimensions.get('window');
const StyledView = styled(View)`
 background-color: #fff;
`;
const Date = styled(Text)`
 height:50;
 font-size: 24px;
 font-weight: 500;
 margin-top:20px;
 text-align:center;
`;
const ToDo = styled(View)`
 width:${width};
 height:50px;
 display: flex;
 flex-direction: row;
 border-top-width:0.6;
 border-bottom-width:0.6;
 border-color:#acd5e2;
 `;
const Detail = styled(Text)`
 width:100px;
 height:60px;
 font-weight: 500;
 font-size: 20;
 margin-top:10px;
 margin-left: 25px;
 `;
const FromTo = styled(View)`
 height:40px;
 margin-top:10px;
 display: flex;
 flex-direction: row;
 `;
const From = styled(View)`
 height:40px;
 font-weight: 500;
 font-size: 20;
 margin-left: 25px;
 `;
const Label = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 20;
 margin-left: 25px;
 `;
const To = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 20;
 margin-left: 25px;
 `;
export default oneSchedule;