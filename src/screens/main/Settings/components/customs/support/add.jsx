import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Upload } from "@components/upload";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { GlobalStyles } from "@components/styles";
import { WelcomeTxt } from "@components/layout/WelcomeTxt";

export const TicketAdd = ({ navigation, setState }) => {
    const [image, setImage] = useState(null);
    return (
        <>
            <ScrollView
                style={{
                    backgroundColor: "#808080",
                    margin: -16,
                    marginTop: -24,
                    paddingHorizontal: 50
                }}
            >
                <View
                    style={{
                        ...GlobalStyles.flexCenter,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#29212D',
                            borderRadius: 12,
                            position: "relative",
                            top: '50%'
                        }}
                    >
                        <View
                            style={{
                                ...GlobalStyles.flexBetween,
                                padding: 24,
                                minWidth: 272
                            }}
                        >
                            <Text
                                style={{
                                    color: '#FFFFFF75',
                                    fontWeight: '700',
                                    fontSize: 18,
                                    lineHeight: 30
                                }}
                            >
                                Add Response
                            </Text>
                            <TouchableOpacity
                                style={{
                                    ...GlobalStyles.flexCenter,
                                    backgroundColor: '#FFFFFF75',
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10
                                }}
                                onPress={() => setState('detail')}
                            >
                                <FontAwesome5 name="times" size={12} color="#29212D" />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                padding: 24
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: '700',
                                    fontSize: 16,
                                    lineHeight: 24,
                                    color: '#fff',
                                    marginBottom: 12
                                }}
                            >Response</Text>
                            <WelcomeTxt
                                txt={'Hi, I can’t seem to update the app. It says “Error checking updates” when I tried to update the app via Google Play. Pls help.'}
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    fontWeight: '400',
                                    fontSize: 14,
                                    lineHeight: 30,
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF1C',
                                    borderRadius: 8,
                                    color: '#FFFFFF99'
                                }}
                            />
                            <View>
                                <TouchableOpacity
                                    style={{
                                        ...GlobalStyles.flexCenter,
                                        borderWidth: 1,
                                        borderColor: "#DF16FF",
                                        paddingVertical: 10,
                                        borderRadius: 70,
                                        marginVertical: 16
                                    }}
                                    onPress={() => Upload(setImage)}
                                >
                                    <Text
                                        style={{
                                            color: '#DF16FF',
                                            fontWeight: '500',
                                            fontSize: 14,
                                            lineHeight: 30
                                        }}
                                    >Add Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        ...GlobalStyles.flexCenter,
                                        borderWidth: 1,
                                        borderColor: "#DF16FF",
                                        paddingVertical: 10,
                                        borderRadius: 70,
                                        backgroundColor: '#DF16FF'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontWeight: '500',
                                            fontSize: 14,
                                            lineHeight: 30
                                        }}
                                    >Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}