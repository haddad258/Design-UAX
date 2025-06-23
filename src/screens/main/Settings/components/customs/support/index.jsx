import React from "react";
import { ScrollView, Text, View } from "react-native";
import { GlobalStyles } from "@components/styles";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Header } from "@components/layout/header";
import { Nav } from "@components/layout/nav";
import { LinearMainBox } from "@components/layout/linearMainBox";
import { MainBtn } from "@components/layout/mainBtn";
import { WelcomeTxt } from "@components/layout/WelcomeTxt";
import { TouchableOpacity } from "react-native";

import { datas } from "@components/datas";


export const SupportHome = ({ navigation, setState, setDetail }) => {
    return (
        <>
            <Header
                content={'Support Ticket'}
                navigation={navigation}
                path="Settings"
                right={true}
            />
            <ScrollView>
                <LinearMainBox style={{
                    marginTop: 28,
                    paddingVertical: 25,
                    paddingHorizontal: 22,
                    borderRadius: 8
                }}>
                    <Text
                        style={{
                            color: '#DF16FF',
                            textAlign: 'center',
                            fontSize: 14,
                            lineHeight: 24,
                            fontWeight: 700
                        }}
                    >Welcome to UAX Support Ticket System!</Text>
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 12,
                            lineHeight: 20,
                            color: '#FFFFFFE5',
                            marginTop: 14
                        }}
                    >Looks like you are not logged in. You can still submit a ticket, but you need to login later if you want to see your submitted tickets.</Text>
                </LinearMainBox>
                <View style={{
                    ...GlobalStyles.flexBetween,
                    paddingVertical: 20
                }}>
                    <Text style={{
                        ...GlobalStyles.minTitle,
                        fontWeight: '700'
                    }}>All Raised Tickets</Text>
                    <MainBtn
                        content={{
                            txt: 'Filter',
                            icon: 'filter-plus-outline'
                        }}
                        position={true}
                        other={1}
                        style={{
                            paddingHorizontal: 18,
                            paddingVertical: 12,
                            borderRadius: 200
                        }}
                    />
                </View>
                <View>
                    {
                        datas.support.map((_itm, _idx) => (
                            <TouchableOpacity
                                key={_idx}
                                onPress={() => {
                                    setDetail(_itm.id);
                                    setState('detail')
                                }}
                            >
                                <LinearMainBox
                                    style={{
                                        ...GlobalStyles.flexBetween,
                                        paddingHorizontal: 20,
                                        paddingVertical: 14,
                                        borderRadius: 8,
                                        marginBottom: 10,

                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                ...GlobalStyles.minTitle,
                                                fontWeight: '700',
                                                fontSize: 14,
                                                textAlign: 'left',
                                                lineHeight: 30
                                            }}
                                        >{`${_itm.submit}...`}</Text>
                                        <WelcomeTxt
                                            txt={_itm.date}
                                            style={{
                                                lineHeight: 30,
                                                color: '#899095',
                                                fontWeight: 400
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween,
                                            gap: 10,
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: '#32473C',
                                                paddingVertical: 4,
                                                paddingHorizontal: 16,
                                                borderRadius: 100
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: '#28F9B7',
                                                    fontSize: 12,
                                                    lineHeight: 20,
                                                    fontWeight: '700'
                                                }}
                                            >{_itm.status.toUpperCase()}</Text>
                                        </View>
                                        <MaterialIcons name="arrow-forward-ios" size={24} color="#6D6D6D" />
                                    </View>
                                </LinearMainBox>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View
                    style={{
                        marginTop: 18
                    }}
                >
                    <MainBtn
                        content={{
                            txt: 'Create New Ticket',
                            icon: 'pluscircleo'
                        }
                        }
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                        }}
                        action={() => setState('create')}
                    />
                </View>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </>
    )
}