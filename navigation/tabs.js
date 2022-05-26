import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Plus from "../screens/Plus";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const CustomTabBarButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
          shadowColor: "#fff",
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "orange",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="home"
                size={25}
                color="#f4f4f4"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "orange" : "#f4f4f4",
                }}
              />
              <Text
                style={{
                  color: focused ? "orange" : "#f4f4f4",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="search"
                size={25}
                color="#f4f4f4"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "orange" : "#f4f4f4",
                }}
              />
              <Text
                style={{
                  color: focused ? "orange" : "#f4f4f4",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                SEARCH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={30}
              color="#f4f4f4"
              style={{
                width: 30,
                height: 30,
                color: "#f4f4f4",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="notifications"
                size={25}
                color="#f4f4f4"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "orange" : "#f4f4f4",
                }}
              />
              <Text
                style={{
                  color: focused ? "orange" : "#f4f4f4",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                NOTIFY
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="settings"
                size={25}
                color="#f4f4f4"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "orange" : "#f4f4f4",
                }}
              />
              <Text
                style={{
                  color: focused ? "orange" : "#f4f4f4",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                SETTING
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
