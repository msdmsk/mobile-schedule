import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";
import { Picker } from "@react-native-community/picker";
import urls from "../env.js";

const Timeschedule =({navigation})=>{
 const [selectedValueStart, setSelectedValueStart] = useState("0");
 const [selectedValueEnd, setSelectedValueEnd] = useState("0");
 
 const onPressSave =async(time)=>{
  await AsyncStorage.setItem("startSchedule",`${selectedValueStart}`);
  await AsyncStorage.setItem("endSchedule", `${selectedValueEnd}`);
  console.log("get timeSchedule;"+`${selectedValueStart}`);
  navigation.navigate("ScheduleView");
  };

 return(
  <StyledView>
   <Date>2021年12月1日   ジム</Date>
   <FromToBox>
    <StartBox>
     <Label>From</Label>
    </StartBox>
    <EndBox>
     <Label>To</Label>
    </EndBox>
   </FromToBox>
   <TimeBox>
    <Start
    selectedValue={selectedValueStart}
    onValueChange={(itemValue, itemIndex) => setSelectedValueStart(itemValue)}
    >
    <Picker.Item label="0:00" value="0" />
    <Picker.Item label="1:00" value="1" />
    <Picker.Item label="2:00" value="2" />
    <Picker.Item label="3:00" value="3" />
    <Picker.Item label="4:00" value="4" />
    <Picker.Item label="5:00" value="5" />
    <Picker.Item label="6:00" value="6" />
    <Picker.Item label="7:00" value="7" />
    <Picker.Item label="8:00" value="8" />
    <Picker.Item label="9:00" value="9" />
    <Picker.Item label="10:00" value="10" />
    <Picker.Item label="11:00" value="11" />
    <Picker.Item label="12:00" value="12" />
    <Picker.Item label="13:00" value="13" />
    <Picker.Item label="14:00" value="14" />
    <Picker.Item label="15:00" value="15" />
    <Picker.Item label="16:00" value="16" />
    <Picker.Item label="17:00" value="17" />
    <Picker.Item label="18:00" value="18" />
    <Picker.Item label="19:00" value="19" />
    <Picker.Item label="20:00" value="20" />
    <Picker.Item label="21:00" value="21" />
    <Picker.Item label="22:00" value="22" />
    <Picker.Item label="23:00" value="23" />
   </Start>
   <End
    selectedValue={selectedValueEnd}
    onValueChange={(itemValue, itemIndex) => setSelectedValueEnd(itemValue)}
    >
    <Picker.Item label="0:00" value="0" />
    <Picker.Item label="1:00" value="1" />
    <Picker.Item label="2:00" value="2" />
    <Picker.Item label="3:00" value="3" />
    <Picker.Item label="4:00" value="4" />
    <Picker.Item label="5:00" value="5" />
    <Picker.Item label="6:00" value="6" />
    <Picker.Item label="7:00" value="7" />
    <Picker.Item label="8:00" value="8" />
    <Picker.Item label="9:00" value="9" />
    <Picker.Item label="10:00" value="10" />
    <Picker.Item label="11:00" value="11" />
    <Picker.Item label="12:00" value="12" />
    <Picker.Item label="13:00" value="13" />
    <Picker.Item label="14:00" value="14" />
    <Picker.Item label="15:00" value="15" />
    <Picker.Item label="16:00" value="16" />
    <Picker.Item label="17:00" value="17" />
    <Picker.Item label="18:00" value="18" />
    <Picker.Item label="19:00" value="19" />
    <Picker.Item label="20:00" value="20" />
    <Picker.Item label="21:00" value="21" />
    <Picker.Item label="22:00" value="22" />
    <Picker.Item label="23:00" value="23" />
   </End>
  </TimeBox>
  <SaveBtn onPress={onPressSave} activeOpacity={0.8}>
   <Label>Save</Label>
  </SaveBtn>
 </StyledView>
 )
};

const { width } = Dimensions.get('window');
const StyledView = styled(View)`
 height:800;
 background-color: #fff;
`;
const Date = styled(Text)`
 height:50;
 font-size: 24px;
 font-weight:500;
 margin-top:20px;
 text-align:center;
`;
const FromToBox = styled(View)`
 display:flex;
 flex-direction:row;
 `;
const StartBox = styled(View)`
 height:50;
 width:200;
 border:1px dotted #acd5e2;
 `;
const EndBox = styled(View)`
 height:50;
 width:200;
 border:1px dotted #acd5e2;
 `;
const Label = styled(Text)`
 height:40px;
 font-weight: 700;
 font-size: 22;
 margin-top:10;
 text-align:center;
`;
const TimeBox = styled(View)`
 display:flex;
 flex-direction:row;
 `;
const Start = styled(Picker)`
 height:80;
 width:200;
 `;
 const End = styled(Picker)`
 height:80;
 width:200;
 `;
const SaveBtn = styled(TouchableOpacity)`
 height:50px;
 width:${width-110};
 background-color:#F8F8FF	;
 border-radius:4px;
 margin:200px auto 0;
 opacity:1;
 shadow-color:#000000;
 shadow-offset:1px 1px;
 shadow-opacity:0.6;
  `;

export default Timeschedule;