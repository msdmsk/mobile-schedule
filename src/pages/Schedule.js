import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage, Picker} from "react-native";
// import {Picker} from '@react-native-community/picker';
import OneSchedule from "../components/oneSchedule";
import urls from "../env.js";

const Schedules = [
    {id:1, date:"2021.12.1",todo:"ジム", start:"10:00", end:"12:00"},
    {id:2, date:"2021.12.1",todo:"会議", start:"14:00", end:"15:00"},
    {id:3, date:"2021.12.1",todo:"ディナー", start:"18:00", end:"20:00"}
]

const Schedule = ({navigation}) => {
    useEffect(() => {
        // 画面が表示された時に必ず実行したい関数がある時に使う navigationのdidFocus
        navigation.addListener("didFocus", () => {
            getDateInfo();
            getTimeSchedule();
        });
    },[navigation]);
    //  const [selectedValue, setSelectedValue] = useState("4");
    const [dateInfo, setDateInfo] = useState("");
    const getDateInfo = async()=>{
        const dateInfo = await AsyncStorage.getItem("dateInfo");
        setDateInfo(dateInfo);
    };

    const onPressTime = async()=>{
        console.log("click Time");
        navigation.navigate("TimescheduleView");
    };

    const [startSchedule, setStartSchedule] = useState("0:00");
    const [endSchedule, setEndSchedule] = useState("0:00");
    //  const onChangeEndSchedule = (time) => setEndSchedule(time);

    const getTimeSchedule = async (time) => {
        const startTime = await AsyncStorage.getItem("startSchedule");
        const endTime = await AsyncStorage.getItem("endSchedule");
        // console.log("startTime: ",startTime);
        // console.log("endTime",endTime);
        await setStartSchedule(startTime);
        await setEndSchedule(endTime);
        // console.log("startSchedule: ", startSchedule);
        // console.log("endSchedule", endSchedule);
        console.log("----------")
    };

    return(
    <StyledView>
    <Date>{dateInfo}</Date>
    {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="0:00" value="0" />
        <Picker.Item label="1:00" value="1" />
        <Picker.Item label="2:00" value="2" />
        <Picker.Item label="3:00" value="3" />
        <Picker.Item label="4:00" value="4" />
        <Picker.Item label="5:00" value="5" />
        <Picker.Item label="6:00" value="6" />
    </Picker> */}
    <ToDo>
        <Detail>ジム</Detail>
        <FromTo onPress={onPressTime} activeOpacity={0.8}>
        <From>{startSchedule}:00</From>
        <Label>~</Label>
        <To>{endSchedule}:00</To>
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
const FromTo = styled(TouchableOpacity)`
 height:40px;
 margin-top:10px;
 display: flex;
 flex-direction: row;
 `;
const From = styled(Text)`
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
export default Schedule;