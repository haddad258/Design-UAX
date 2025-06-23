import { GlobalStyles } from "@components/styles";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MainBtn } from "@components/layout/mainBtn";

export const SendConfirm = ({ address, amount, setState, navigation }) => {
    return (
        <View
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFFAD',
                zIndex: 10,
            }}
        >
            <View
                style={{
                    backgroundColor: '#261E2A',
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }}
            >
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#FFFFFF1C',
                        paddingTop: 36,
                        paddingBottom: 26
                    }}
                >
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            fontWeight: '500',
                            fontSize: 16
                        }}
                    >
                        Confirm Payment
                    </Text>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 26,
                            top: 40,
                        }}
                        onPress={() => setState(prev => !prev)}
                    >
                        <FontAwesome5
                            name="times"
                            size={16}
                            color="#D9D9D9"
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingVertical: 25,
                        paddingHorizontal: 12
                    }}
                >
                    <View
                        style={{
                            ...GlobalStyles.flexCenter,
                            gap: 4,
                            marginVertical: 6
                        }}
                    >
                        <Text
                            style={{
                                color: '#DF16FF',
                                fontWeight: '400',
                                fontSize: 32
                            }}
                        >
                            196.21
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: '#FFFFFFB2',
                                marginTop: 6
                            }}
                        >UAXN</Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#FFFFFFB2',
                            marginTop: 6,
                            textAlign: 'center'
                        }}
                    >~ $1.21</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: '#FFFFFF12',
                            borderRadius: 6,
                            backgroundColor: '#2D2033',
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                            marginTop: 28
                        }}
                    >
                        <View
                            style={{
                                ...GlobalStyles.flexBetween
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#FFFFFFB8',
                                    lineHeight: 30
                                }}
                            >To Address:</Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#fff',
                                    lineHeight: 30
                                }}
                            >{address}</Text>
                        </View>
                        <View
                            style={{
                                ...GlobalStyles.flexBetween
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#FFFFFFB8',
                                    lineHeight: 30
                                }}
                            >Amount to send: </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#fff',
                                    lineHeight: 30
                                }}
                            >{amount} UAXN</Text>
                        </View>
                    </View>
                    <MainBtn
                        content={{ txt: 'Send' }}
                        style={{
                            backgroundColor: '#DF16FF',
                            borderColor: '#DF16FF',
                            marginVertical: 22
                        }}
                        navigation={navigation}
                        action={'Transfer'}
                    />
                </View>
            </View>
        </View>
    )
}