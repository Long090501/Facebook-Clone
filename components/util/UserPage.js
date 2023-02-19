import React from 'react'
import {ScrollView, View, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import variables from '../Long/BaseStyles/Variables'

const test = [1, 2, 3, 4, 5, 6]

const FriendInfo = () => {
    return (
        <View>
            <Image source={require('../../../expo-test/components/Long/assets/image/default_avatar.png')}
            style={{width: '30%', height: 60, borderRadius: 60, marginLeft: 48}}></Image>
            <Text>Nguyễn Đức Long</Text>
        </View>
    )
}

const UserPage = () => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{paddingBottom: 40, borderBottomColor: variables.lightGray, borderBottomWidth: 1}}>
                <Image source={require('../../../expo-test/components/Long/assets/image/default_avatar.png')}
                style={{width: 300, height: 300, borderRadius: 150, marginLeft: 48}}></Image>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>Nguyễn Đức Long</Text>
            </View>
            <View>
                <FlatList data={test} renderItem={(item) => <FriendInfo></FriendInfo>}>
                </FlatList>
            </View>
        </ScrollView>
    )
}

export default UserPage