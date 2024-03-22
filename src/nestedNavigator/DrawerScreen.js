import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import TabScreen from "./TabScreen";
import { StatusBar } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigationState } from "@react-navigation/native";
import { useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Profile } from "../screens/Profile";
const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();
// const activeTab = useNavigationState(
//   // @ts-ignore
//   (state) =>
//     state?.routes.find((route) => route.name === "profile")?.params?.activeTab
// );

const NotificationScreen = () => (
  <View>
    <Text>Notification Screen</Text>
  </View>
);

export const PersonalManagementScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <TouchableOpacity
      style={{ alignSelf: "flex-end" }}
      onPress={() => navigation.openDrawer()}
    >
      <Feather
        name="user"
        size={20}
        color="black"
        style={{
          marginLeft: 10,
          backgroundColor: "#EDEDED",
          borderRadius: 46,
          padding: 7,
        }}
      />
    </TouchableOpacity>
    <Text>Personal Management Screen</Text>
  </View>
);

export const AccountManagementScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <TouchableOpacity
      style={{ alignSelf: "flex-end" }}
      onPress={() => navigation.openDrawer()}
    >
      <Feather
        name="user"
        size={20}
        color="black"
        style={{
          marginLeft: 10,
          backgroundColor: "#EDEDED",
          borderRadius: 46,
          padding: 7,
        }}
      />
    </TouchableOpacity>
    <Text>Account Management Screen</Text>
  </View>
);
export const ProbeManagementScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <TouchableOpacity
      style={{ alignSelf: "flex-end" }}
      onPress={() => navigation.openDrawer()}
    >
      <Feather
        name="user"
        size={20}
        color="black"
        style={{
          marginLeft: 10,
          backgroundColor: "#EDEDED",
          borderRadius: 46,
          padding: 7,
        }}
      />
    </TouchableOpacity>
    <Text>Probe Management Screen</Text>
  </View>
);

// const ProfileScreen = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={PersonalManagementScreen} />
//   </Stack.Navigator>
// );
// const AccountScreen = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Account" component={AccountManagementScreen} />
//   </Stack.Navigator>
// );
// const ProbeScreen = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Probe" component={ProbeManagementScreen} />
//   </Stack.Navigator>
// );

const DrawerContent = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isLightTheme = colorScheme === "light";
  const [country, setCountry] = useState({ cca2: "US", withCallingCode: "1" });
  const onCountrySelect = (selectedCountry) => {
    console.log(selectedCountry);
    setCountry(selectedCountry);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleTheme = () => {
    const newTheme = isLightTheme ? "dark" : "light";
    // Appearance.set("colorScheme", newTheme);
  };

  //const activeTab=useNavigationState(state=>state.activeTab);
  const activeTab = useNavigationState(
    (state) =>
      state?.routes
        ?.find((r) => r.name === "DrawerScreen")
        ?.state?.routes?.find((rr) => rr?.name == "Profile")?.params?.activeTab
  );
  console.log({ activeTab });
  return (
    <View style={{ flexGrow: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Feather name="bell" size={20} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "800",
            color: "#342F20",
            marginLeft: 10,
            //padding: 10,
          }}
        >
          Hi, Jonh
        </Text>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Image
            source={require("../img/cancel.png")}
            style={{ width: 40, height: 40, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", { activeTab: "personal-info" })
          }
          style={{
            backgroundColor:
              activeTab == "personal-info" ? "#F3BD48" : "transparent",
            height: 65,
            width: "100%",
            padding: 20,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
            Personal info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", { activeTab: "account-management" })
          }
          style={{
            backgroundColor:
              activeTab == "account-management" ? "#F3BD48" : "transparent",
            height: 65,
            width: "100%",
            padding: 20,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
            Account Management
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile", { activeTab: "probe-management" })
        }
        style={{
          backgroundColor:
            activeTab == "probe-management" ? "#F3BD48" : "transparent",
          height: 65,
          width: "100%",
          padding: 20,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
          Probe Management
        </Text>
      </TouchableOpacity>
      <View style={{ margin: 30 }}>
        <TouchableOpacity
          onPress={toggleDropdown}
          style={{
            width: "70%",
            height: 44,
            backgroundColor: "#FFFFFF",
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: 200,
            }}
          >
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              withAlphaFilter
              countryCode={country.cca2}
              onSelect={onCountrySelect}
            />
            <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: -140 }}>
              {country.cca2}
            </Text>
            <FontAwesome
              name={isDropdownOpen ? "angle-up" : "angle-down"}
              size={20}
              color={"black"}
            />
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
            <Text style={styles.buttonText}>
              {isLightTheme ? "Switch to Dark Theme" : "Switch to Light Theme"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          // marginTop: 100,
          margin: 30,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: "#FEEEDF",
            padding: 15,
            height: 55,
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              source={require("../img/call.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                marginLeft: 5,
                color: "#F88D2A",
              }}
            >
              Contact Us
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ marginLeft: 30, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              //marginLeft: 5,
              color: "#B6B4AF",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ margin: 30 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            //marginLeft: 5,
            color: "#FF3030",
          }}
        >
          Delete Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        headerStatusBarHeight: StatusBar.currentHeight,
        //drawerActiveBackgroundColor: "orange",
        //drawerType: "slide",
        drawerStyle: {
          paddingTop: insets.top,
          //paddingBottom: insets.bottom,
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        },
      }}
    >
      <Drawer.Screen name="TabScreen" component={TabScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  singleTab: {
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  drawerItem: {
    padding: 16,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  themeButton: {
    backgroundColor: "blue", 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white", 
    textAlign: "center",
  },
});

export default DrawerScreen;
