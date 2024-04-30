import { createStackNavigator } from "@react-navigation/stack";
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DeudasScreen } from '../screens/deudas/DeudasScreen';
import { LoginScreen } from "../screens/auth/LoginScreen";

export type RootStackParams = {
    LoginScreen: undefined;
    LoadingScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    DeudasScreen: {deudaId: string};


}
 
 const Stack = createStackNavigator<RootStackParams>()

 export const StackNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DeudasScreen" component={DeudasScreen} />

        </Stack.Navigator>
    );
 }