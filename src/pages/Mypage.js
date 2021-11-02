import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, AsyncStorage, Alert} from "react-native";
import { Calendar } from 'react-native-calendars';
import { Modal } from 'react-native-modal';
import OneGroup from "../components/oneGroup";

const Groups =[
 {group_id:1, name:"田中家",},
 {group_id:2, name:"◯◯グループ"},
 {group_id:3, name:"××同好会"}
 ]

const Mypage =({navigation})=>{
 useEffect(()=>{
 getMyInfo();
 },[]);

const [myName, setMyName] = useState("");
const getMyInfo = async()=>{
const myName = await AsyncStorage.getItem("myName");
setMyName(myName);
};

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

const onSelectDate = (day) => {
  console.log(day+"日が押されました");
  return Alert.alert(
    day+"日が押されました"
  );
}

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

 const handleDayPress = (day) => {
  alert("日付が押されました！")
};

 return(
  <StyledView>
    <UserBox>
      <UserName>田中</UserName>
    </UserBox>
      <MySchedule>
       <Calendar
        // current={'2021-10-30'}
        // minDate={'2021-09-01'}
        // maxDate={'2021-11-15'}
        // onDayPress={(day) => {console.log(day+"日が押されました");}}
        onDayPress={handleDayPress}
        // onDayPress={console.log("日付が押されました！")}
        // onDayLongPress={(day) => {console.log('selected day', day)}}
        onPressArrowRight={addMonth =>console.log("矢印が押されました！")}
        markingType={'multi-dot'}
        // markedDates={{
        // 　'2021-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
        // 　'2021-10-26': {dots: [massage, workout], disabled: true}
        // }}
        />
      </MySchedule>
    <GroupBar>
      <GroupText>Group</GroupText>
    </GroupBar>

    {/* <OneGroup
     name="田中家"
     onPress={() => {}}/> */}
  </StyledView>
 );
};

const { width } = Dimensions.get('window');
const StyledView = styled(View)`
 z-index: 10;
 `;
const UserBox = styled(View)`
 width:${width};
 height:40px;
 `;
const UserName = styled(Text)`
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
const GroupText = styled(Text)`
 color:#FFF;
 font-weight: 500;
 font-size: 18;
 margin-top: 15px;
 margin-left: 25px;
 `;
export default Mypage;