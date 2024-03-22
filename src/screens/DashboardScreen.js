import React, { useState } from "react";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  Octicons,
  Ionicons,
  Icon,
} from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { RangeSlider } from "@react-native-assets/slider";
import { LineChart } from "react-native-gifted-charts";
import CustomListItem from "../components/CustomeListItem";
import { Calendar, LocaleConfig } from "react-native-calendars";

const data = [
  {
    id: "1",
    name: "Reminder notes",
    input: "Check Probe ",
    date: "March 2,2022",
    hashtag1: "#batch",
    hashtag2: "#notification",
    hashtag3: "#notification",
    borderLeftColor: "#427CBF",
  },
  {
    id: "2",
    name: "Header notes",
    input: "Change Temperature ",
    date: "March 2,2022",
    hashtag1: "#batch",
    hashtag2: "#notification",
    hashtag3: "#notification",
    borderLeftColor: "#F88D2A",
  },
  {
    id: "3",
    name: "Reminder notes",
    input: "Check Probe ",
    date: "March 2,2022",
    hashtag1: "#batch",
    hashtag2: "#notification",
    hashtag3: "#notification",
    borderLeftColor: "#F88D2A",
  },
  {
    id: "4",
    name: "Reminder notes",
    input: "Check Probe ",
    date: "March 2,2022",
    hashtag1: "#batch",
    hashtag2: "#notification",
    hashtag3: "#notification",
    borderLeftColor: "#427CBF",
  },
  {
    id: "5",
    name: "Reminder notes",
    input: "Check Probe ",
    date: "March 2,2022",
    hashtag1: "#batch",
    hashtag2: "#notification",
    hashtag3: "#notification",
    borderLeftColor: "#427CBF",
  },
];

const ScreenOne = ({ navigation }) => {
  const lcomp = (v) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 14, color: "black", paddingLeft: 25 }}>{v}</Text>
    </View>
  );
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: "white",
          borderWidth: 3,
          borderRadius: 7,
          borderColor: "#07BAD1",
        }}
      />
    );
  };
  const PointerLabel = ({ data }) => (
    <View
      style={{
        paddingHorizontal: 5,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderRadius: 3,
          borderColor: "black",
          backgroundColor: "gray",
          alignSelf: "center",
          padding: 5,
        }}
      >
        <Text style={{ fontSize: 12, color: "white" }}>{data[0]?.label}</Text>
        <Text style={{ fontSize: 12, color: "white" }}>{data[0]?.value}</Text>
      </View>
    </View>
  );

  const latestData = [
    {
      value: 0,
      labelComponent: () => lcomp("2 Nov"),
      //customDataPoint: dPoint,
    },
    {
      value: 0.5,
      hideDataPoint: true,
      labelComponent: () => lcomp("3 Nov"),
    },
    {
      value: 0.62,
      customDataPoint: dPoint,
      labelComponent: () => lcomp("4 Nov"),
      //customDataPoint: dPoint,
    },
    {
      value: 1,
      //hideDataPoint: true,
      labelComponent: () => lcomp("5 Nov"),
      //  customDataPoint: dPoint,
    },
    {
      value: 1.86,
      labelComponent: () => lcomp("6 Nov"),
      //customDataPoint: dPoint,
    },
  ];

  //const [selected, setSelected] = React.useState("");
  const [open, setOpen] = useState(false);
  const [singleValue, setSingleValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Nectarines", value: "nectarines" },
    { label: "Kiwis", value: "kiwis" },
    { label: "Raspberries", value: "raspberries" },
    { label: "Pears", value: "pears" },
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [isnewDatePickerVisible, setnewDatePickerVisibility] = useState(false);
  const [isnewTimePickerVisible, setnewTimePickerVisibility] = useState(false);
  const [newselectedDate, setnewSelectedDate] = useState(null);
  const [newselectedTime, setnewSelectedTime] = useState(null);

  //Time1

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
    setnewTimePickerVisibility(false);
  };
  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  // Time2

  const shownewDatePicker = () => {
    setnewDatePickerVisibility(true);
  };
  const hidenewDatePicker = () => {
    setnewDatePickerVisibility(false);
  };
  const handlenewDateConfirm = (date) => {
    setnewSelectedDate(date);
    hidenewDatePicker();
  };
  const shownewTimePicker = () => {
    setnewTimePickerVisibility(true);
  };
  const hidenewTimePicker = () => {
    setnewTimePickerVisibility(false);
  };
  const handlenewTimeConfirm = (time) => {
    setnewSelectedTime(time);
    hidenewTimePicker();
  };

  const CustomMark = ({ value, active }) => {
    return (
      <View style={[styles.mark, { justifyContent: "space-between" }]}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[styles.markText, { color: active ? "#B6B4AF" : "#B6B4AF" }]}
          >
            {value}
          </Text>
        </View>
      </View>
    );
  };

  //CalenderWork
  const [selectedCalenderDate, setSelectedCalenderDate] = useState("");
  LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  LocaleConfig.defaultLocale = "en";
  const handleDayPress = (day) => {
    setSelectedCalenderDate(day.dateString);
  };
  return (
    <View style={styles.container}>
      {/* View */}

      <View
        style={[styles.specificView, { paddingHorizontal: 20, marginTop: 60 }]}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image source={require("../img/icon.png")} style={styles.logo} />
        </View>
        <View style={styles.specificView}>
          <Feather name="search" size={20} color="black" style={styles.icon} />
          <Feather
            name="bell"
            size={20}
            color="black"
            style={{ marginLeft: 10, padding: 7.5 }}
          />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.heading}>Dashboard</Text>
      </View>
      {/* View1 */}
      <ScrollView>
        <View style={[styles.innercontainer, { zIndex: 1 }]}>
          <View style={styles.specificView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="signal-cellular-alt"
                size={20}
                color="black"
              />
              <FontAwesome
                name="battery"
                size={20}
                color="green"
                style={styles.icon}
              />
              <Feather
                name="info"
                size={20}
                color="black"
                style={styles.icon}
              />
            </View>
            <Image source={require("../img/add.png")} style={styles.logo} />
          </View>
          <View style={[styles.specificView, { marginTop: 10 }]}>
            <View style={{ width: "85%" }}>
              <DropDownPicker
                open={open}
                value={singleValue}
                items={items}
                setOpen={setOpen}
                setValue={setSingleValue}
                setItems={setItems}
                placeholder="2b00...23330/Name_Test1"
                multiple={false}
                dropDownContainerStyle={{
                  borderColor: "#B6B4AF",
                  paddingLeft: 20,
                }}
                style={{
                  borderColor: "#B6B4AF",
                  paddingLeft: 25,
                  paddingRight: 25,
                }}
              />
            </View>

            <Feather
              name="settings"
              size={20}
              color="black"
              style={{ marginRight: 15 }}
            />
          </View>
        </View>

        {/* View2 */}

        <View style={[styles.innercontainer, { zIndex: -0 }]}>
          <View style={[styles.specificView, { marginBottom: 10 }]}>
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#858279" }}>
              Notify On Completion:
            </Text>
            <Feather name="bell" size={20} color="black" />
          </View>
          <View style={[styles.specificView, { marginTop: 10 }]}>
            <View style={styles.timeContainer}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={showDatePicker}>
                  <Feather name="calendar" size={20} color="#B6B4AF" />
                </TouchableOpacity>
                {selectedDate && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginLeft: 5,
                      color: "#B6B4AF",
                    }}
                  >
                    {selectedDate.toDateString()}
                  </Text>
                )}
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity onPress={showTimePicker}>
                  <Feather name="clock" size={20} color="#B6B4AF" />
                </TouchableOpacity>

                {selectedTime && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginLeft: 5,
                      color: "#B6B4AF",
                    }}
                  >
                    {selectedTime.toLocaleTimeString()}
                  </Text>
                )}
              </View>

              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />

              <DateTimePicker
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
            <View style={styles.timeContainer}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={shownewDatePicker}>
                  <Feather name="calendar" size={20} color="#B6B4AF" />
                </TouchableOpacity>
                {newselectedDate && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginLeft: 5,
                      color: "#B6B4AF",
                    }}
                  >
                    {newselectedDate.toDateString()}
                  </Text>
                )}
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity onPress={shownewTimePicker}>
                  <Feather name="clock" size={20} color="#B6B4AF" />
                </TouchableOpacity>

                {newselectedTime && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginLeft: 5,
                      color: "#B6B4AF",
                    }}
                  >
                    {newselectedTime.toLocaleTimeString()}
                  </Text>
                )}
              </View>

              <DateTimePicker
                isVisible={isnewDatePickerVisible}
                mode="date"
                onConfirm={handlenewDateConfirm}
                onCancel={hidenewDatePicker}
              />

              <DateTimePicker
                isVisible={isnewTimePickerVisible}
                mode="time"
                onConfirm={handlenewTimeConfirm}
                onCancel={hidenewTimePicker}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text style={styles.textstyle}>Specific Gravity</Text>
            <Text style={styles.innerText}>714</Text>
            <RangeSlider
              onSlidingStart={(value) => console.log("start:", value)}
              onSlidingComplete={(value) => console.log("complete:", value)}
              onValueChange={(low, high) => console.log("change:", low, high)}
              style={styles.slider}
              CustomMark={CustomMark}
              minimumValue={-100}
              maximumValue={100}
              //CustomThumb={CustomThumb}
              outboundColor="lightgray"
              inboundColor="#3EAE2B"
              thumbStyle={styles.thumbStyle}
              step={50}
            />
          </View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text style={styles.textstyle}>Fermentaion</Text>
            <Text style={styles.innerText}>0,714</Text>
            <RangeSlider
              onSlidingStart={(value) => console.log("start:", value)}
              onSlidingComplete={(value) => console.log("complete:", value)}
              onValueChange={(low, high) => console.log("change:", low, high)}
              style={styles.slider2}
              CustomMark={CustomMark}
              minimumValue={-100}
              maximumValue={100}
              outboundColor="lightgray"
              inboundColor="#427CBF"
              thumbStyle={styles.thumbStyle}
              step={50}
            />
          </View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text style={styles.textstyle}>Clarity</Text>
            <Text style={styles.innerText}>91</Text>
            <RangeSlider
              onSlidingStart={(value) => console.log("start:", value)}
              onSlidingComplete={(value) => console.log("complete:", value)}
              onValueChange={(value) => console.log("change:", value)}
              style={styles.slider3}
              CustomMark={CustomMark}
              minimumValue={-100}
              maximumValue={100}
              step={50}
              outboundColor="lightgray"
              inboundColor="#EAB5FF"
              thumbStyle={styles.thumbStyle}
            />
          </View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text style={styles.textstyle}>Temeprature</Text>
            <Text style={styles.innerText}>74,36F</Text>
            <RangeSlider
              onSlidingStart={(value) => console.log("start:", value)}
              onSlidingComplete={(value) => console.log("complete:", value)}
              onValueChange={(value) => console.log("change:", value)}
              style={styles.slider}
              CustomMark={CustomMark}
              minimumValue={-100}
              maximumValue={100}
              step={50}
              outboundColor="lightgray"
              inboundColor="#FFE08F"
              thumbStyle={styles.thumbStyle}
            />
          </View>
          <View
            style={[
              styles.specificView,
              {
                marginTop: 30,
              },
            ]}
          >
            <TouchableOpacity
              style={{
                width: "20%",
                backgroundColor: "#EAEAEA",
                borderRadius: 5,
                padding: 10,
              }}
            >
              <Feather
                name="pause"
                size={20}
                color="black"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                //height: 50,
                width: "75%",
                backgroundColor: "#FEEEDF",
                borderRadius: 5,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "800",
                  color: "#F88D2A",
                  alignSelf: "center",
                }}
              >
                View charts
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //justifyContent:'space-between',
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#342F20",
                alignSelf: "center",
              }}
            >
              Signal LED
            </Text>
            <Image source={require("../img/toggle.png")} style={styles.icon1} />
          </View>
        </View>

        {/* View3 */}

        <View style={styles.innercontainer}>
          <View style={styles.specificView}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#342F20" }}>
              Chart
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="upload-cloud"
                size={15}
                color="#F88D2A"
                style={{
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "#FEEEDF",
                }}
              />
              <Octicons
                name="screen-full"
                size={15}
                color="#342F20"
                style={[
                  styles.icon,
                  {
                    marginLeft: 15,
                    borderRadius: 5,
                    padding: 10,
                    backgroundColor: "#EAEAEA",
                  },
                ]}
              />
            </View>
          </View>

          <View style={[styles.specificView, { marginTop: 15 }]}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#342F20" }}>
              Fermentation Profile
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="chevron-back-sharp"
                size={15}
                color="#342F20"
                style={[
                  styles.icon,
                  {
                    borderRadius: 5,
                    padding: 10,
                  },
                ]}
              />
              <Ionicons
                name="chevron-forward-sharp"
                size={15}
                color="black"
                style={[
                  styles.icon,
                  {
                    borderRadius: 5,
                    padding: 10,
                  },
                ]}
              />
            </View>
          </View>

          {/* grapgh1 */}

          <View style={[styles.specificView, { marginTop: 15 }]}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#B6B4AF" }}>
              Last reading:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                color: "black",
              }}
            >
              0.714
            </Text>
            <TouchableOpacity
              style={{
                width: "auto",
                backgroundColor: "#E7EEF7",
                alignSelf: "center",
                borderRadius: 6,
                marginLeft: 80,
                padding: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "#427CBF", fontWeight: "400" }}
              >
                Change:0,9%
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, backgroundColor: "#F9F9F9C7" }}>
            <View style={{ marginTop: 20 }}>
              <LineChart
                isAnimated
                thickness={2}
                color="#427CBF"
                maxValue={3}
                noOfSections={3}
                animateOnDataChange
                animationDuration={1000}
                onDataChangeAnimationDuration={300}
                areaChart
                yAxisTextStyle={{ color: "black", fontSize: 14 }}
                data={latestData}
                hideDataPoints
                scrollAnimation={true}
                pointerConfig={{
                  radius: 8,
                  pointerStripWidth: 6,
                  pointerLabelWidth: 60,
                  activatePointersOnLongPress: true,
                  autoAdjustPointerLabelPosition: true,
                  pointerColor: "#427CBF",
                  pointerStripColor: "#427CBF",
                  pointerLabelComponent: (data) => <PointerLabel data={data} />,
                }}
                startFillColor={"red"}
                endFillColor={"#427CBF"}
                startOpacity={0.1}
                endOpacity={0.4}
                spacing={60}
                backgroundColor="white"
                rulesColor="grey"
                //barheight={500}
                //adjustToWidth

                borderWidth={5}
                //rulesType={ruleTypes.SOLID}
                initialSpacing={0}
                yAxisColor="black"
                xAxisColor="black"
              />
            </View>
          </View>

          {/* grapgh2 */}

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#342F20" }}>
              Clarity Profile
            </Text>
            <View style={[styles.specificView, { marginTop: 15 }]}>
              <Text
                style={{ fontSize: 16, fontWeight: "400", color: "#B6B4AF" }}
              >
                Last reading:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "800",
                  color: "black",
                }}
              >
                91
              </Text>
              <TouchableOpacity
                style={{
                  width: "auto",
                  backgroundColor: "#F7E5FF",
                  alignSelf: "center",
                  borderRadius: 6,
                  marginLeft: 100,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#AB14F2", fontWeight: "400" }}
                >
                  Change:0,9%
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, backgroundColor: "#F9F9F9C7" }}>
              <View style={{ marginTop: 20 }}>
                <LineChart
                  isAnimated
                  thickness={2}
                  color="#AB14F2"
                  maxValue={3}
                  noOfSections={3}
                  animateOnDataChange
                  animationDuration={1000}
                  onDataChangeAnimationDuration={300}
                  areaChart
                  yAxisTextStyle={{ color: "black", fontSize: 14 }}
                  data={latestData}
                  hideDataPoints
                  scrollAnimation={true}
                  pointerConfig={{
                    radius: 8,
                    pointerStripWidth: 6,
                    pointerLabelWidth: 60,
                    activatePointersOnLongPress: true,
                    autoAdjustPointerLabelPosition: true,
                    pointerColor: "#427CBF",
                    pointerStripColor: "#427CBF",
                    pointerLabelComponent: (data) => (
                      <PointerLabel data={data} />
                    ),
                  }}
                  startFillColor={"red"}
                  endFillColor={"#AB14F2"}
                  startOpacity={0.1}
                  endOpacity={0.4}
                  spacing={60}
                  backgroundColor="white"
                  rulesColor="grey"
                  //barheight={500}
                  //adjustToWidth
                  borderWidth={5}
                  //rulesType={ruleTypes.SOLID}
                  initialSpacing={0}
                  yAxisColor="black"
                  xAxisColor="black"
                />
              </View>
            </View>
          </View>

          {/* grapgh3 */}

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#342F20" }}>
              Temeprature
            </Text>
            <View style={[styles.specificView, { marginTop: 15 }]}>
              <Text
                style={{ fontSize: 16, fontWeight: "400", color: "#B6B4AF" }}
              >
                Last reading:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "800",
                  color: "black",
                }}
              >
                74,36 F
              </Text>
              <TouchableOpacity
                style={{
                  width: "auto",
                  backgroundColor: "#FFE8E8",
                  alignSelf: "center",
                  borderRadius: 6,
                  marginLeft: 70,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#FA3B3B", fontWeight: "400" }}
                >
                  Change:0,9%
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, backgroundColor: "#F9F9F9C7" }}>
              <View style={{ marginTop: 20 }}>
                <LineChart
                  isAnimated
                  thickness={2}
                  color="#FA3B3B"
                  maxValue={3}
                  noOfSections={3}
                  animateOnDataChange
                  animationDuration={1000}
                  onDataChangeAnimationDuration={300}
                  areaChart
                  yAxisTextStyle={{ color: "black", fontSize: 14 }}
                  data={latestData}
                  hideDataPoints
                  scrollAnimation={true}
                  pointerConfig={{
                    radius: 8,
                    pointerStripWidth: 6,
                    pointerLabelWidth: 60,
                    activatePointersOnLongPress: true,
                    autoAdjustPointerLabelPosition: true,
                    pointerColor: "#427CBF",
                    pointerStripColor: "#427CBF",
                    pointerLabelComponent: (data) => (
                      <PointerLabel data={data} />
                    ),
                  }}
                  startFillColor={"red"}
                  endFillColor={"#FA3B3B"}
                  startOpacity={0.1}
                  endOpacity={0.4}
                  spacing={60}
                  backgroundColor="white"
                  rulesColor="grey"
                  //barheight={500}
                  //adjustToWidth
                  borderWidth={5}
                  initialSpacing={0}
                  yAxisColor="black"
                  xAxisColor="black"
                />
              </View>
            </View>
          </View>
        </View>

        {/* View4 */}

        <View style={styles.innercontainer}>
          <View style={styles.specificView}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#342F20" }}>
              Notes
            </Text>
            <Image source={require("../img/add.png")} style={styles.logo} />
          </View>
          <View style={{ flex: 1, marginTop: 15 }}>
            <View style={{ height: 350, overflow: "scroll" }}>
              <FlatList
                nestedScrollEnabled={true}
                ListFooterComponent={
                  <TouchableOpacity style={{ marginTop: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#F88D2A",
                      }}
                    >
                      View all
                    </Text>
                  </TouchableOpacity>
                }
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CustomListItem item={item} />}
              />
            </View>
          </View>
        </View>

        {/* View5 */}

        <View style={styles.innercontainer}>
          <View style={styles.specificView}>
            <Text style={{ fontSize: 24, fontWeight: "800", color: "#342F20" }}>
              Calender
            </Text>
          </View>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedCalenderDate]: {
                selected: true,
                marked: true,
                selectedColor: "#F3BD48",
                selectedTextColor: "red",
              },
            }}
          />
          {/* <Text style={styles.selectedDateText}>
            Selected Date: {selectedCalenderDate}
          </Text> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9C7",
    //padding:50
  },
  specificView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedDateText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  logo: {
    width: 35,
    height: 35,
  },
  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#342F20",
    // marginLeft: 20,
    //marginTop:12
  },

  icon: {
    marginLeft: 15,
  },
  icon1: {
    height: 24,
    width: 48,
    marginLeft: 15,
  },
  innercontainer: {
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
  },
  timeContainer: {
    width: "49%",
    alignItems: "flex-start",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#B6B4AF",
    padding: 10,
  },
  mark: {
    width: 2,
    height: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "grey",
  },
  markText: {
    position: "absolute",
    fontSize: 14,
    marginTop: 15,
    //justifyContent:'space-between'
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "400",
    fontWeight: "bold",
    color: "#B6B4AF",
    padding: 5,
  },
  innerText: {
    fontSize: 16,
    fontWeight: "800",
    color: "black",
    paddingLeft: 5,
  },
  slider: {
    height: 21,
    borderWidth: 1,
    borderColor: "rgba(62, 174, 43, 0.4)",
    borderRadius: 21,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    //padding:5,
    backgroundColor: "rgba(233, 255, 230, 0.4)",
  },
  slider2: {
    height: 21,
    borderWidth: 1,
    borderColor: "#427CBF",
    borderRadius: 21,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "rgba(66, 124, 191, 0.09)",
  },
  slider3: {
    height: 21,
    borderWidth: 1,
    borderColor: "rgba(234, 181, 255, 0.4)",
    borderRadius: 21,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "rgba(248, 238, 252, 0.4)",
  },
  slider4: {
    height: 21,
    borderWidth: 1,
    borderColor: "rgba(255, 224, 143, 0.4)",
    borderRadius: 21,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 251, 228, 0.4)",
  },
  thumbStyle: {
    height: 20,
    width: 3,
    //padding:3,
    backgroundColor: "green",
  },
  headerContainer: {
    backgroundColor: "red",
    padding: 30,
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ScreenOne;
