import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { GlobalStyles } from "@components/styles";

import { Nav } from "@components/layout/nav";
import { WelcomeTxt } from "@components/layout/WelcomeTxt";
import { MainBtn } from "@components/layout/mainBtn";

import Ticket from '@assets/ticket.png';

export const TicketSuccess = ({ navigation, setState }) => {
    return (
        <>
            <ScrollView>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    top: '100%'
                }}>
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            lineHeight: 30,
                            fontSize: 18,
                            fontWeight: '700'
                        }}
                    >Ticket Submitted!</Text>
                    <Image
                        source={Ticket}
                        alt="No Ticket"
                        style={{
                            width: 72,
                            height: 72,
                            marginVertical: 22
                        }}
                    />
                    <WelcomeTxt
                        txt={'Please wait a minute, our awesome helper will be with you shortly:)'}
                        style={{
                            fontWeight: '400',
                            fontSize: 14,
                            lineHeight: 24,
                            color: '#FFFFFFB2',
                            textAlign: 'center',
                            paddingHorizontal: 48
                        }}
                    />
                    <MainBtn
                        content={{
                            txt: 'Got it, thanks!',
                        }
                        }
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                            width: '100%',
                            marginTop: 36
                        }}
                        action={() => setState('')}
                    />
                </View>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </>
    )
}