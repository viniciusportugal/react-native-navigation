import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" options={{title: 'Tela A'}}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB" options={{ title: 'Tela B' }}>
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC" options={{ title: 'Tela C' }}>
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)