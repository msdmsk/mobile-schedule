import React from "react";
import {Text, Alert, AsyncStorage} from "react-native";
import { Icon } from "react-native-elements";
import Login from "./Login";
import Mypage from "./Mypage";
import Group from "./Group";
import Schedule from "./Schedule";
import Timeschedule from "./Timeschedule";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Navigator extends React.Component {
    render() {
      const Navigation = createAppContainer(SignedInNavigator);
      return <Navigation />;
    }
  }
  export default Navigator;

const UsersNavigator = createStackNavigator(
    {
      LoginView:{
       screen:Login,
       navigationOptions:{
        headerShown:null,
        footer:null
       },
      },
      MypageView: {
        screen:Mypage,
        navigationOptions: {
          title: 'MyPage',
          headerLeft: ()=> null,
          headerStyle: {
            backgroundColor: '#002f6a',
            borderBottomColor: '#002f6a',
            borderBottomWidth: 2,
            height: 100,
          },
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerTintColor: '#ffffff',
        },
      },
      GroupView: {
        screen:Group,
        navigationOptions: {
          header:null,
          title: 'Group',
          headerStyle: {
            backgroundColor: '#002f6a',
            borderBottomColor: '#002f6a',
            borderBottomWidth: 2,
            height: 100,
          },
          headerTitleStyle: {
            color: '#ffffff',
          }
        },
      },
      ScheduleView: {
        screen:Schedule,
        navigationOptions: {
          title: 'Schedule',
          headerStyle: {
            backgroundColor: '#002f6a',
            borderBottomColor: '#002f6a',
            borderBottomWidth: 2,
            height: 100,
          },
          headerTitleStyle: {
            color: '#ffffff',
          }
        },
      },
      TimescheduleView: {
        screen:Timeschedule,
        navigationOptions: {
          title: 'Timeschedule',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#002f6a',
            borderBottomColor: '#002f6a',
            borderBottomWidth: 2,
            height: 100,
          },
          headerTitleStyle: {
            color: '#ffffff',
          }
        },
      },

      initialRouteName: 'LoginView',
    }
  );
  const SignedInNavigator = createBottomTabNavigator(
    {
      MypageTab: {
        screen: UsersNavigator,
        navigationOptions: {
          tabBarLabel: ({ focused }) => (
            <Text style={{color: `${focused ? '#002f6a' : '#ffffff'}`,paddingTop: 5,}}>MyPage</Text>
          ),
          tabBarOptions: {
            style: {
              height: 65,
              backgroundColor: '#8ce5ff',
              paddingTop: 20,
              paddingBottom: 20,
              shadowColor: '#002f6a',
              shadowOffset: { width: 0, height: -1 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
          },
        },
      },
    },
    { initialRouteName: 'MypageTab' }
  );

  UsersNavigator.navigationOptions = ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 2
  });
