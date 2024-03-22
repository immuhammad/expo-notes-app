import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import ForgotPasswordModal from "../components/ForgotPasswordModel";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isInputValid, setInputValid] = useState(true);
  const handlePasswordChange = (text) => {
    setPassword(text);
    const isValid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(text);
    setInputValid(isValid);
  };
  const handlePasswordSubmit = () => {
    navigation.navigate("DrawerScreen");
    return;
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    //navigation.navigate("VerificationScreen");
    alert("screen is not implemented yet");
  };

  const [country, setCountry] = useState({ cca2: "US", withCallingCode: "1" });
  const onCountrySelect = (selectedCountry) => {
    console.log(selectedCountry);
    setCountry(selectedCountry);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleIconPress = () => {
    const url = "https://www.gmail.com";

    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL:", err)
    );
  };
  const [checkBox, setCheckBox] = useState("false");
  const handleRemember = () => {
    setCheckBox(!checkBox);
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.specificView, { paddingHorizontal: 25, marginTop: 60 }]}
      >
        <View style={[styles.specificView, { marginRight: 20 }]}>
          <Image source={require("../img/icon.png")} style={styles.logo} />
        </View>
        <View
          style={[
            styles.specificView,
            {
              marginTop: 15,
            },
          ]}
        >
          <TouchableOpacity onPress={toggleDropdown} style={styles.buttonleft}>
            <View style={{ flexDirection: "row" }}>
              <CountryPicker
                withFlag
                withCallingCode
                withFilter
                withAlphaFilter
                countryCode={country.cca2}
                onSelect={onCountrySelect}
              />
              <FontAwesome
                name={isDropdownOpen ? "angle-up" : "angle-down"}
                size={20}
                color={"black"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={styles.buttonUp}
          >
            <Text style={styles.buttonUptext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* View */}
      <ScrollView>
        <View style={[styles.innercontainer, { marginTop: 20, padding: 20 }]}>
          <Text style={styles.opentext}>Hi, welcome!</Text>
          <TouchableOpacity
            style={[styles.iconbutton, { backgroundColor: "#FEEEDF" }]}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Ionicons
                name="logo-google"
                size={20}
                color="#F88D2A"
                onPress={handleIconPress}
              />
              <Text style={[styles.buttontext, { color: "#F88D2A" }]}>
                Google
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.specificView, { marginTop: 15, height: 20 }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.line, { marginRight: 5 }]}></Text>
              <Text style={styles.linetext}>or</Text>
              <Text style={[styles.line, { marginLeft: 5 }]}></Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View>
              <Text style={styles.inputheader}>Email</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="email"
                placeholderTextColor={"#B6B4AF"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={[styles.inputheader, { marginTop: 5 }]}>
                Password
              </Text>
              <View style={[styles.inputBox, { flexDirection: "row" }]}>
                <TextInput
                  style={[
                    styles.inputBox1,
                    isInputValid ? {} : styles.invalidInput,
                  ]}
                  placeholder="password"
                  placeholderTextColor={"#B6B4AF"}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={handlePasswordChange}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text>
                    {showPassword ? (
                      <AntDesign name="eye" size={20} color="black" />
                    ) : (
                      <Ionicons name="ios-eye-off" size={20} color="black" />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
              {!isInputValid && (
                <Text style={styles.errorText}>
                  Password must be 8 characters or more
                </Text>
              )}
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={openModal}>
                <Text style={styles.outertext}>Forgot your password?</Text>
              </TouchableOpacity>
              <ForgotPasswordModal
                isVisible={isModalVisible}
                closeModal={closeModal}
              />
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TouchableOpacity onPress={handleRemember}>
                  <Text>
                    {checkBox ? (
                      <Ionicons
                        name="checkbox-outline"
                        size={22}
                        color="#B6B4AF"
                        style={styles.iconstyle}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="checkbox-blank-outline"
                        size={22}
                        color="#B6B4AF"
                        style={styles.iconstyle}
                      />
                    )}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.rembtext}>Remember me</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <TouchableOpacity
              onPress={handlePasswordSubmit}
              style={[
                styles.iconbutton,
                { backgroundColor: "#F88D2A", marginBottom: 20 },
              ]}
            >
              <Text style={styles.buttontext2}>Sign In to Accubrew</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.outerendtext, { marginTop: 20 }]}>
          2022 accubrew.io
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={styles.outerendtext}>Private Policy</Text>
          <Text style={[styles.outerendtext, { marginRight: 20 }]}>
            Terms of use
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9C7",
    //padding:20
  },
  specificView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 34,
    height: 49,
  },
  icon: {
    marginLeft: 15,
  },
  innercontainer: {
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
  },
  inputBox: {
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 6,
    borderColor: "#B6B4AF",
  },
  inputBox1: {
    width: "90%",
    marginRight: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  buttonUp: {
    width: 127,
    height: 45,
    backgroundColor: "#FEEEDF",
    borderRadius: 6,
    padding: 14,
  },
  buttonleft: {
    width: 78,
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonUptext: {
    fontSize: 14,
    fontWeight: "900",
    color: "#F88D2A",
    alignSelf: "center",
  },
  opentext: {
    fontSize: 24,
    fontWeight: "900",
    color: "#342F20",
    marginTop: 15,
  },
  iconbutton: {
    width: "100%",
    height: 55,
    borderRadius: 6,
    padding: 15,
    marginTop: 15,
  },
  buttontext: {
    fontSize: 18,
    fontWeight: "900",
    marginLeft: 5,
  },
  line: {
    width: 147,
    borderTopWidth: 1,
    marginTop: 10,
    borderTopColor: "#EDEDED",
  },
  linetext: {
    fontSize: 14,
    fontWeight: "500",
    alignItems: "center",
    color: "#B6B4AF",
  },
  inputheader: {
    fontSize: 14,
    fontWeight: "900",
    color: "#B6B4AF",
  },
  outertext: {
    position: "relative",
    color: "#F88D2A",
    fontSize: 14,
    fontWeight: "900",
  },
  iconstyle: { borderRadius: 10 },
  rembtext: {
    position: "relative",
    color: "#342F20",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
  buttontext2: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  outerendtext: {
    fontSize: 16,
    fontWeight: "400",
    color: "#858279",
    marginLeft: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  invalidInput: {
    borderColor: "red",
  },
});
export default SignInScreen;
