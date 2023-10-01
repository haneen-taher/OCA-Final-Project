import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TherapistScreen from "../screens/TherapistScreen";
import TherapistProfileScreen from "../screens/TherapistProfileScreen";
import SpecialistsScreen from "../screens/SpecialistsScreen";

const Stack = createStackNavigator();

const TherapistStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TherapistHome">
      <Stack.Screen
        name="TherapistHome"
        component={SpecialistsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Therapist"
        component={TherapistScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TherapistProfile"
        component={TherapistProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TherapistStackNavigation;
