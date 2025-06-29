import { Stack } from "expo-router";

export default function ordersLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false, // Hides the header for the orders index screen
                }}
            />
        </Stack> // This is a placeholder for the orders layout component.
    );
}