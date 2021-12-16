import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, AsyncStorage, Alert} from "react-native";
import { Calendar } from 'react-native-calendars';
import OneGroup from "../components/oneGroup";
import urls from "../env.js";

const Groups =[
  {id:1, name:"田中家",},
  {id:2, name:"◯◯グループ"},
  {id:3, name:"××同好会"}
  ]

const Group =({navigation})=>{
  useEffect(() => {
  getGroupInfo();
  }, []);

const onPressSchedule=()=>{
  navigation.navigate("ScheduleView");
  };

  const [groupName, setGroupName] = useState("");
  const getGroupInfo = async()=>{
   const groupName = await AsyncStorage.getItem("groupName");
   console.log("---------------------");
   console.log(groupName); 
   setGroupName(groupName);
  };

  const onPressLogoutBtn=()=>{
    Alert.alert(
     "確認",
     "本当にログアウトしますか？",
     [
      {text:"いいえ",style:"cancel"},
      {text:"ログアウト",onPress:onPressLogout},
     ],
     {cancelable:false}
    );
   };
   const onPressLogout = async()=>{
    await AsyncStorage.removeItem("isLoggedIn");
    await AsyncStorage.removeItem("myId");
    await AsyncStorage.removeItem("myName");
    navigation.navigate("LoginView");
   };

 return(
  <StyledView>
    <CurrentGroupBox>
      <CurrentGroupName>{groupName}</CurrentGroupName>
    </CurrentGroupBox>
      <GroupSchedule
        onDayPress={onPressSchedule}/>
      <GroupBar>
      <GroupText>Group</GroupText>
      {Groups.map(group=>{
       return(
        <OneGroup
         key={group.id}
         name={group.name}
         onPress={() => {navigation.navigate("GroupView")}}/>
       );
      })}
    </GroupBar>
    <LogoutBtn onPress={onPressLogoutBtn} activeOpacity={0.8}>
     <StyledText>Logout</StyledText>
    </LogoutBtn>
  </StyledView>
 );
};

const { width } = Dimensions.get('window');
const StyledView = styled(View)`
 z-index: 10;
 `;
const CurrentGroupBox = styled(View)`
 width:${width};
 height:100px;
 `;
const CurrentGroupName = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 20;
 margin-top: 60px;
 margin-left: 25px;
 `;
const GroupSchedule = styled(Calendar)`
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
const GroupText = styled(Text)`
 color:#FFF;
 font-weight: 500;
 font-size: 18;
 margin-top: 15px;
 margin-left: 25px;
 `;
const LogoutBtn = styled(TouchableOpacity)`
height:40px;
width:${width-110};
background-color:#F8F8FF	;
border-radius:4px;
margin:200px auto 0;
opacity:1;
shadow-color:#000000;
shadow-offset:1px 1px;
shadow-opacity:0.6;
`;
const StyledText = styled(Text)`
 text-align:center;
 font-weight:500;
 font-size:25px;
 color:#111111;
 padding-top:3px;
 `;
export default Group;