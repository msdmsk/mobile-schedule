import *as React from "react";
import { Dimensions, View, Text, TouchableOpacity} from "react-native";
import styled from "styled-components";

const oneGroup = ({name, onPress}) => {
 return(
  <GroupBox activeOpacity={1} onPress={onPress}>
   <GroupName>{name}</GroupName>
  </GroupBox>
 );
};

const { width } = Dimensions.get('window');
const GroupBox = styled(TouchableOpacity)`
 width: ${width};
 height: 25px;
 border-bottom-width: 1;
 border-color: #acd5e2;
 margin-top: 25px;
 `;
const GroupName = styled(Text)`
 height:40px;
 font-weight: 500;
 font-size: 18;
 margin-left: 25px;
 `;

export default oneGroup;