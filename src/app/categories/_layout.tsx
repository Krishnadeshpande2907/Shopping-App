import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CategoryLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="[slug]"
                options={({ navigation }) => ({
                    headerShown: true, // Hides the header for the orders index screen
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='arrow-back' size={24} color='black' />
                        </TouchableOpacity> // Hides the left header button
                    )
                })}
            />
        </Stack> // This is a placeholder for the orders layout component.
    );
}