import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  AccountManagementScreen,
  PersonalManagementScreen,
  ProbeManagementScreen,
} from "../nestedNavigator/DrawerScreen";

export function Profile({ route, navigation }) {
  const { activeTab } = route?.params;
  return (
    <>
      <ScrollView>
        <Text>Profile</Text>

        {activeTab === "personal-info" && (
          <PersonalManagementScreen navigation={navigation} />
        )}
        {activeTab === "account-management" && (
          <AccountManagementScreen navigation={navigation} />
        )}
        {activeTab === "probe-management" && (
          <ProbeManagementScreen navigation={navigation} />
        )}

        <SafeAreaView edges={["bottom"]} />
      </ScrollView>
    </>
  );
}
