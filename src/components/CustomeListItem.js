import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
const CustomListItem = ({ item }) => {
  return (
    
      <View style={styles.container}>
        <View style={[styles.innercontainer,{borderLeftColor:item.borderLeftColor}]}>
          <View style={styles.specificView}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>
                <FontAwesome name="pencil-square-o" size={20} color="#427CBF" />
              </Text>
              <Text style={styles.icon}>
                <MaterialIcons
                  name="delete-outline"
                  size={20}
                  color="#B6B4AF"
                />
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.input}>{item.input}</Text>
            <Text style={styles.date}> {item.date}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-betweens",
            }}
          >
            <TouchableHighlight style={styles.highlight}>
              <Text style={styles.hashtag}>{item.hashtag1}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.highlight, { marginLeft: 10 }]}>
              <Text style={[styles.hashtag]}>{item.hashtag2}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.highlight,, { marginLeft: 10 } ]}>
              <Text style={[styles.hashtag]}>{item.hashtag3}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //padding:15,
    marginTop: 15,
  },
  innercontainer: {
    borderRadius: 5,
    borderLeftWidth: 4,
    padding: 15,
  },
  specificView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    //marginTop: 13,
  },
  name: {
    fontSize: 14,
    fontWeight: "800",
    color: "#342F20",
  },
  input: {
    fontSize: 14,
    color: "#B6B4AF",
    fontWeight: "400",
  },
  date: {
    fontSize: 12,
    color: "#B6B4AF",
    fontWeight: "400",
    marginTop: 7,
  },
  hashtag: {
    fontSize: 14,
    color: "#427CBF",
    fontWeight: "400",
  },
  highlight: {
    width: "auto",
    backgroundColor: "#E7EEF7",
    borderRadius: 15,
    // paddingTop: 6,
    // paddingBottom: 6,
    // paddingLeft:9,
    // paddingRight:9
    padding:8
  },
});
export default CustomListItem;
