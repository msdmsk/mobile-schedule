import *as React from "react";
import {Dimensions, Text, TouchableOpacity,} from "react-native";
import styled from "styled-components";

const OneGroup = ({name, onPress})=>{
 return(
 <Grouplist activeOpacity={1} onPress={onPress}>
  <GroupName>{name}</GroupName>
 </Grouplist>
 );
};

const width = Dimensions.get("window");
const Grouplist = styled(TouchableOpacity)`
 width:${width};
 height:40px;
 border-top-width:0.6;
 border-bottom-width:0.6;
 border-color:#acd5e2;
 `;
const GroupName = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 18;
 margin-top: 10px;
 margin-left: 25px;
 `;

export default OneGroup;