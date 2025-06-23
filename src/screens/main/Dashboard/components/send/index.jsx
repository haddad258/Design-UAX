import React, { useState } from 'react';

import { Template } from '@components/layout/Template';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';

import { Header } from '@components/layout/header';
import { Nav } from '@components/layout/nav';

import { WelcomeTxt } from '@components/layout/WelcomeTxt';
import { GlobalStyles } from '@components/styles';
import { LinearMainBox } from '@components/layout/linearMainBox';

import { MainBtn } from '@components/layout/mainBtn';
import { Input } from '@components/common/Input';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { SendConfirm } from './confirm';

export const Send = ({ navigation }) => {
    const [state, setState] = useState({
        amount: '',
        address: '',
    });

    const [confirm, setConfirm] = useState(false);

    const children = (
        <>
            <Header
                content={'Send UAXN'}
                navigation={navigation}
                right={true}
            />
            <ScrollView style={{ margin: - 16 }}>
                <View style={{ padding: 16 }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <WelcomeTxt
                            txt={'Enter the recipient\'s UAXN account address for transfer'}
                            style={{
                                fontSize: 12,
                                color: '#FFFFFFB2',
                                marginTop: 6,
                                marginBottom: 36,
                                maxWidth: 202,
                                textAlign: 'center'
                            }}
                        />
                    </View>
                </View>
                <LinearMainBox
                    style={{
                        paddingVertical: 24,
                        borderRadius: 16,
                        marginHorizontal: 16
                    }}
                >
                    <View style={{
                        flexDirection: 'column',
                        paddingVertical: 22,
                        paddingHorizontal: 15
                    }}>
                        <View>
                            <Text
                                style={{
                                    ...GlobalStyles.minTitle,
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}
                            >Amount to send</Text>
                            <View>
                                <Input
                                    placeholder={'Enter amount'}
                                    style={{
                                        back: {
                                            backgroundColor: '',
                                            padding: 0,
                                            borderRadius: 6
                                        },
                                        input: {
                                            paddingVertical: 10,
                                            paddingRight: 70
                                        }
                                    }}
                                    value={state.amount}
                                    onChangeText={(e) => setState(prev => ({
                                        ...prev, amount: e
                                    }))}
                                />
                                <MainBtn
                                    content={{ txt: 'MAX' }}
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#DF16FF',
                                        borderColor: '#DF16FF',
                                        right: 10,
                                        top: '50%',
                                        transform: 'translate(0, -50%)',
                                        paddingVertical: 6
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    ...GlobalStyles.flex,
                                    paddingBottom: 26
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        color: '#FFFFFFB2',
                                        lineHeight: 36
                                    }}
                                >Available Balance:{'  '}
                                    <Text
                                        style={{
                                            color: '#fff'
                                        }}
                                    > 122.50 UAXN</Text>
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    ...GlobalStyles.minTitle,
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}
                            >To Address</Text>
                            <View>
                                <Input
                                    placeholder={'Enter wallet address'}
                                    style={{
                                        back: {
                                            backgroundColor: '',
                                            padding: 0,
                                            borderRadius: 6
                                        },
                                        input: {
                                            paddingVertical: 10,
                                            paddingRight: 70
                                        }
                                    }}
                                    value={state.address}
                                    onChangeText={(e) => setState(prev => ({
                                        ...prev, address: e
                                    }))}
                                />
                                <MaterialCommunityIcons
                                    name="line-scan"
                                    size={24}
                                    color="#FFF"
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: '50%',
                                        transform: 'translate(0, -50%)',
                                        paddingVertical: 6,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    ...GlobalStyles.flex,
                                    paddingBottom: 26
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        color: '#FFFFFFB2',
                                        lineHeight: 36
                                    }}
                                >Estimated Fee:{'  '}
                                    <Text
                                        style={{
                                            color: '#fff'
                                        }}
                                    > 212 BANDWIDTH</Text>
                                </Text>
                                <AntDesign
                                    name="questioncircle"
                                    size={12}
                                    color="#FFFFFFB2"
                                    style={{
                                        marginLeft: 6
                                    }}
                                />
                            </View>
                        </View>
                        <MainBtn
                            content={{ txt: 'Continue' }}
                            style={{
                                backgroundColor: '#DA23F8',
                                borderColor: 'transparent',
                                borderRadius: 12,
                                borderRadius: 6
                            }}
                            action={() => setConfirm(prev => !prev)}
                        />
                    </View>
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Dashboard'} navigation={navigation} />
        </>
    );

    return (
        <>
            <Template
                children={children}
                style={{
                    padding: 16,
                    paddingVertical: 0
                }}
            />
            {
                confirm &&
                <SendConfirm
                    setState={setConfirm}
                    address={state.address}
                    amount={state.amount}
                    navigation={navigation}
                />
            }
        </>
    )
};