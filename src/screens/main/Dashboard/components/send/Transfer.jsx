import React from "react";
import { Linear } from "@components/common/linear";
import { Text, View, ScrollView } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';
import { GlobalStyles } from "@components/styles";
import { WelcomeTxt } from "@components/layout/WelcomeTxt";
import { MainBtn } from "@components/layout/mainBtn";
import { Link } from "@components/layout/link";

export const Transfer = ({ navigation }) => {
    return (
        <Linear
            colors={['#2D2531', '#2218260F']}
            children={
                <ScrollView>
                    <View style={{
                        minHeight: '100%',
                        paddingHorizontal: 16,
                        ...GlobalStyles.flexCenter
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                ...GlobalStyles.flexCenter,
                                width: 120,
                                height: 120,
                                backgroundColor: '#DF16FF',
                                borderRadius: 60,
                                borderWidth: 20,
                                borderColor: '#DF16FF66'
                            }}>
                                <Entypo name="check" size={56} color="white" />
                            </View>
                            <View style={{ paddingVertical: 32 }}>
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 22
                                    }}>Transfer Success</Text>
                                <WelcomeTxt
                                    txt={'The recipient can check the balance.'}
                                    style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        marginTop: 6
                                    }}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 28
                            }}
                        >
                            <Link
                                navigation={navigation}
                                path={'TxHistory'}
                                text={'View History'}
                                style={{
                                    textDecorationLine: 'underline'
                                }}
                            />
                        </View>
                    </View>
                    <Text
                        style={{
                            textDecorationLine: 'underline',
                            position: 'absolute'
                        }}
                    ></Text>
                </ScrollView>
            }
            style={{
                flex: 1,
                backgroundColor: '#000',
                padding: 16
            }}
        />
    )
};