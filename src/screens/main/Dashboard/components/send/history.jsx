import React from 'react';

import { Template } from '@components/layout/Template';
import { Header } from '@components/layout/header';
import { Image, ScrollView, Text, View } from 'react-native';
import { Input } from '@components/common/Input';
import { MainBtn } from '@components/layout/mainBtn';
import { GlobalStyles } from '@components/styles';

import AntDesign from '@expo/vector-icons/AntDesign';
import { WelcomeTxt } from '@components/layout/WelcomeTxt';
import { Nav } from '@components/layout/nav';

import { datas } from '@components/datas';

const truncateString = (str, firstChars = 8, lastChars = 6) => {
    if (str.length <= firstChars + lastChars) return str;
    return `${str.slice(0, firstChars)}...${str.slice(-lastChars)}`;
};

export const TxHistory = ({ navigation }) => {
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <View style={{ marginBottom: 18 }}>
                <Header
                    content={'Transactions History'}
                    navigation={navigation}
                    right={true}
                    menu={true}
                    path='Send'
                />
            </View>
            <ScrollView>
                <View
                    style={{
                        ...GlobalStyles.flexBetween,
                        gap: 10,
                        padding: 12
                    }}
                >
                    <Input
                        style={{
                            back: {
                                paddingVertical: 4,
                                paddingHorizontal: 13,
                                borderColor: '#FFFFFF0F',
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: '#2A1A2E',
                                flex: 1
                            },
                            input: {
                                fontSize: 12
                            }
                        }}
                        icons={{
                            front: 'search'
                        }}
                        placeholder={'Search by date'}
                    />
                    <MainBtn
                        content={{ txt: 'Filters', icon: 'filter-list' }}
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                            paddingVertical: 12
                        }}
                        other={2}
                        position={true}
                    />
                </View>
                <View
                    style={{
                        padding: 12,
                    }}
                >
                    {
                        datas.txs.map((_itm, _idx) => (
                            <View
                                style={{
                                    ...GlobalStyles.flexBetween,
                                    borderBottomColor: '#37143F',
                                    borderBottomWidth: 1,
                                    paddingBottom: 10,
                                    marginTop: 16
                                }}
                                key={_idx}
                            >
                                <View style={{
                                    padding: 8,
                                    marginRight: 12
                                }}>
                                    <Image
                                        source={_itm.icon}
                                        alt='main icon'
                                    />
                                    <AntDesign
                                        name={_itm.state ? 'arrowup' : 'arrowdown'}
                                        size={14}
                                        color={_itm.state ? '#27D07A' : '#FF4245'}
                                        style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: 0
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ flex: 1 }}
                                >
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween,
                                        }}
                                    >
                                        <View
                                            style={{
                                                ...GlobalStyles.flex
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontSize: 13,
                                                    fontWeight: '600',
                                                    lineHeight: 22
                                                }}
                                            >
                                                UAXN
                                            </Text>
                                            {
                                                _itm.state ? (
                                                    <Text
                                                        style={{
                                                            color: '#27D07A',
                                                            fontSize: 12,
                                                            marginLeft: 6,
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        (Deposit)
                                                    </Text>) : (
                                                    <Text
                                                        style={{
                                                            color: '#FF4245',
                                                            fontSize: 12,
                                                            marginLeft: 6,
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        (Withdraw)
                                                    </Text>
                                                )
                                            }
                                        </View>
                                        <View
                                            style={{
                                                ...GlobalStyles.flex
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontWeight: '600',
                                                    fontSize: 14,
                                                    lineHeight: 22,
                                                    color: '#DF16FF'
                                                }}
                                            >{_itm.amount.toFixed(2)}</Text>
                                            <WelcomeTxt
                                                txt={`$${(_itm.usd).toFixed(2)}`}
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontWeight: '600',
                                                    marginLeft: 4
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween
                                        }}
                                    >
                                        <WelcomeTxt
                                            txt={`Txid: ${truncateString(_itm.txid)}`}
                                            style={{
                                                color: '#A8A8A8',
                                                fontWeight: '400',
                                                fontSize: 11,
                                                lineHeight: 22
                                            }}
                                        />
                                        <WelcomeTxt
                                            txt={`${_itm.date} ${_itm.time}`}
                                            style={{
                                                color: '#A8A8A8',
                                                fontWeight: '400',
                                                fontSize: 11,
                                                lineHeight: 22
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <Nav place={'Dashboard'} navigation={navigation} />
        </Template>
    )
};