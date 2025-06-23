import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

import { Header } from "@components/layout/header";
import { Nav } from "@components/layout/nav";
import { LinearMainBox } from "@components/layout/linearMainBox";
import { Input } from "@components/common/Input";
import { GlobalStyles } from "@components/styles";
import { TouchableOpacity } from "react-native";

import { Upload } from '@components/upload';
import { State } from "react-native-gesture-handler";
import { MainBtn } from "@components/layout/mainBtn";

const datas = [
    {
        label: 'Subject',
        place: 'Password reset not working'
    },
    {
        label: 'Issue',
        place: 'Please Help'
    },
    {
        label: 'Upload',
        place: 'Password reset not working'
    },
    {
        label: 'Email',
        place: 'johndoe@example.com'
    },
]

export const TicketCreate = ({ navigation, setState }) => {
    const [images, setImages] = useState(null);

    return (
        <>
            <View style={{ marginBottom: 18 }}>
                <Header
                    content={'Create New Ticket'}
                    navigation={navigation}
                    path="Settings"
                    right={true}
                    menu={true}
                />
            </View>
            <ScrollView>
                <LinearMainBox
                    style={{
                        paddingVertical: 24,
                        paddingHorizontal: 16,
                        borderRadius: 6,
                        flexDirection: 'column',
                        gap: 25
                    }}
                >
                    {
                        datas.map((_itm, _idx) => (
                            <View
                                key={_idx}
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontWeight: '500',
                                        fontSize: 14,
                                        marginBottom: 15,
                                        lineHeight: 14
                                    }}
                                >{_itm.label}</Text>
                                {
                                    _itm.label === "Upload" ?
                                        <View
                                            style={{
                                                ...GlobalStyles.flex,
                                                justifyContent: 'flex-start'
                                            }}
                                        >
                                            {
                                                images && (
                                                    <Image
                                                        source={{ uri: images.path }}
                                                        style={{
                                                            width: 64,
                                                            height: 64,
                                                            borderRadius: 16,
                                                            marginRight: 10
                                                        }}
                                                    />
                                                )
                                            }
                                            <TouchableOpacity
                                                style={{
                                                    padding: 24,
                                                    borderWidth: 1,
                                                    borderColor: '#FDFEFF1C',
                                                    borderRadius: 16
                                                }}
                                                onPress={() => Upload(setImages)}
                                            >
                                                <AntDesign name="plus" size={16} color="#FFFFFF85" />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <Input
                                            style={{
                                                back: {
                                                    paddingVertical: 4,
                                                    paddingHorizontal: 12,
                                                    borderColor: '#FFFFFF1F',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    backgroundColor: '#75408100',
                                                    flex: 1
                                                },
                                                input: {
                                                    fontSize: 12,
                                                    color: '#FFFFFFC2'
                                                }
                                            }}
                                            placeholder={_itm.place}
                                        />
                                }
                            </View>
                        ))
                    }
                    <MainBtn
                        content={{
                            txt: 'Submit',
                        }
                        }
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                        }}
                        action={() => setState('success')}
                    />
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </>
    )
}