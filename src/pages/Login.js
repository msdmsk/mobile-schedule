import React, {useState} from "react";
import styled from "styled-components";
import {Text, TextInput, View, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";
import urls from "../env.js";

const Login =({navigation})=>{
 const [userName, setUserName] = useState("");
 const onChangeName = (text) => setUserName(text);
 const [password, setPassword] = useState("");
 const onChangePassword = (text) => setPassword(text);

 const onPressLogin = async({})=>{
  if(userName==""||password=="")return;
  const response = await fetch(`${urls.api_server}api/users/session`,{
   headers:{
    "Content-Type": "application/json",
    Accept: "application/json",
   },
   method:"POST",
   body:JSON.stringify({name:userName, password:password}),
  });
  if(response.status==200){
   const responseJSON = await response.json();
   const {id, name} = responseJSON.currentUser;
   AsyncStorage.setItem("isLoggedIn", "true");
   AsyncStorage.setItem("myId", `${id}`);
   AsyncStorage.setItem("myName",`${name}`);
   navigation.navigate("MypageView");

  }
 };

 return(
  <ImageBackground
   source={require("../../assets/oriApp/cherry-blossam.png")}
   style={{width:width, height:height}}>
   <StyledView>
    <Label>UserName</Label>
    <FormInput
     value={userName}
     onChangeText={(text)=>onChangeName(text)}
     autoCapitalize = "none"/>
    <Label>Password</Label>
    <FormInput
     value={password}
     onChangeText={(text)=>onChangePassword(text)}
     autoCapitalize = "none" secureTextEntry={true}/>
    <LoginBtn onPress={onPressLogin} activeOpacity={0.8}>
     <StyledText>SignUp / Login</StyledText>
    </LoginBtn>
   </StyledView>
   </ImageBackground>
 );
};

const {width, height}=Dimensions.get("window");
const StyledView = styled(View)`
 height:410;
 margin-top:250px;
 z-index:10;
`;
const Label = styled(Text)`
 color:#111111;
 width:${width-100};
 margin:0 auto;
 padding:20px 0 5px 10px;
 font-weight:500;
 font-size:12px;
 `;
const FormInput = styled(TextInput)`
 height:40px;
 width:${width-110};
 padding-left:10px;
 background-color:#FFFFFF;
 border-color:#555555;
 border-radius:4px;
 margin:0 auto
 `;
const LoginBtn = styled(TouchableOpacity)`
 height:40px;
 width:${width-110};
 background-color:#F8F8FF	;
 border-radius:4px;
 margin:35px auto 0;
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

export default Login;