import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import Font from "./constants/Font";

const Stack = createNativeStackNavigator();
export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Bienvenido" component={Login} options={{
                  title: "ITSQMET",
                  headerStyle: {
                    backgroundColor: "#fff",
                    
                  },
                  headerTintColor: "#061c2f",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  },
                  headerTitleAlign: 'center'
                }} />
                <Stack.Screen name="QR" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}