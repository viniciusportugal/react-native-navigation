import React from 'react'
import { View, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => (
    <View style={{flex: 1}}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button
                title='abrir'
                onPress={() => props.navigation.openDrawer()}
            />
        </View>
        <View style={{ flex: 1 }}>
            <TextoCentral corFundo='#33fa72' corTexto="#000">
                Tela D
            </TextoCentral>
        </View>
    </View>
)