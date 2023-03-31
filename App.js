import * as React from 'react';
import {
    Button,
    View,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                style={styles.button}
                title="To-Do List"
                onPress={() => navigation.navigate('To-do List')}
            />
            <Button
                style={styles.button}
                title="Diary"
                onPress={() => navigation.navigate('Diary')}
            />
            <Button
                style={styles.button}
                title="Graph"
                onPress={() => navigation.navigate('Graph')}
            />
            <Button
                style={styles.button}
                title="Rewards"
                onPress={() => navigation.navigate('Graph')}
            />
            <Button
                style={styles.button}
                title="Goals"
                onPress={() => navigation.navigate('Graph')}
            />
            <Button
                style={styles.button}
                title="Settings"
                onPress={() => navigation.navigate('Graph')}
            />
        </View>
    );
}
function ToDoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
function DiaryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
function GraphScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
function RewardsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
function GoalsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Home</Text>
            </View>
            <View>
                Hei! jeg er en setting screen
            </View>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator /*screenOptions={{headerShown: false}}*/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="To-do List" component={ToDoScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Rewards" component={RewardsScreen} />
            <Stack.Screen name="Goals" component={GoalsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

    );
}



// installs:
//https://reactnavigation.org/docs/stack-navigator/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        paddingTop: 20,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    container2: {
        flexDirection: "row",
        backgroundColor: "lightblue",
        justifyContent: "space-between",
        padding: 10,
        //alignItems: "center",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: 0,
    },
    header: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    heading: {
        fontSize: 30,
        //backgroundColor: "red",
        fontWeight: "500",
        flex: 1,
    },
    button: {
        color: "black",
        //fontSize: 17,
        backgroundColor: "transparent",
        padding: 7,
        margin: 20,
        width: "70%",
        alignSelf: "center",
        borderRadius: 0,
        flexDirection: "row",
        borderStyle: "solid",
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    }
});
