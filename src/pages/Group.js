import React from 'react';
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import { Calendar } from 'react-native-calendars';

const Group =()=>{
 return(
  <StyledView>
    <CurrentGroupBox>
      <CurrentGroupName>佐藤家</CurrentGroupName>
    </CurrentGroupBox>
      <MySchedule>
       <Calendar/>
      </MySchedule>
  </StyledView>
 );
};

const { width } = Dimensions.get('window');
const StyledView = styled(View)`
 z-index: 10;
 `;
const CurrentGroupBox = styled(View)`
 width:${width};
 height:40px;
 `;
const CurrentGroupName = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 18;
 margin-top: 10px;
 margin-left: 25px;
 `;
const MySchedule = styled(Calendar)`
 height:360px;
 border:3px dotted #acd5e2;
 `;
const GroupBar = styled(View)`
 width:100%;
 height:50px;
 background-color:#191970;
 border-top-width:0.6;
 border-bottom-width:0.6;
 border-color:#acd5e2;
 `;
export default Group;