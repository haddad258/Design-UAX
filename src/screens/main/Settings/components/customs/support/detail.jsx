import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";

import { GlobalStyles } from "@components/styles";

import { filter } from "@components/filter";
import { Header } from "@components/layout/header";
import { Nav } from "@components/layout/nav";
import { LinearMainBox } from "@components/layout/linearMainBox";
import { WelcomeTxt } from "@components/layout/WelcomeTxt";

import { datas } from "@components/datas";

import { Linear } from "@components/common/linear";
import { MainBtn } from "@components/layout/mainBtn";

export const TicketDetail = ({ navigation, detail, setState, setDetail }) => {
    const data = filter(detail, 'support');


    return (
        <>
            <Header
                content={'Ticket Details'}
                navigation={navigation}
                path={
                    () => {
                        setDetail(null);
                        setState('');
                    }
                }
                right={true}
                menu={true}
            />

            <ScrollView>
                <LinearMainBox
                    style={{
                        marginTop: 28,
                        padding: 18,
                        flexDirection: 'column',
                        borderRadius: 8,
                        gap: 10
                    }}
                >
                    <View
                        style={{
                            ...GlobalStyles.flexBetween,
                        }}
                    >
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketKey
                        }}>Requester</Text>
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketValue
                        }}>John Doe</Text>
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween
                        }}
                    >
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketKey
                        }}>Subject</Text>
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketValue
                        }}>{data.submit}</Text>
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween
                        }}
                    >
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketKey
                        }}>Submitted</Text>
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketValue
                        }}>{`${data.date} ${data.time}`}</Text>
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween
                        }}
                    >
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketKey
                        }}>Ticket ID</Text>
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketValue
                        }}>{data.id}</Text>
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween
                        }}
                    >
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketKey
                        }}>Ticket Status</Text>
                        <Text style={{
                            ...styles.ticketTxt,
                            ...styles.ticketValue
                        }}>{data.status}</Text>
                    </View>
                </LinearMainBox>
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#FFFFFF21',
                        marginVertical: 28
                    }}
                />
                {
                    datas.ticketDetail.map((_itm, _idx) => (
                        <Linear
                            style={{
                                paddingVertical: 8,
                                paddingHorizontal: 18,
                                borderRadius: 8,
                                marginBottom: 10
                            }}
                            colors={_itm.color}
                            key={_idx}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: '700',
                                    fontSize: 13,
                                    lineHeight: 30
                                }}
                            >{_itm.title}</Text>
                            <WelcomeTxt
                                txt={_itm.content}
                                style={{
                                    fontWeight: '400',
                                    lineHeight: 20,
                                    color: '#FFFFFF85',
                                    marginVertical: 6
                                }}
                            />
                            <View
                                style={{
                                    ...GlobalStyles.flex,
                                    justifyContent: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: _itm.imageColor,
                                        borderRadius: 4,
                                        padding: 12
                                    }}
                                >
                                    <Image
                                        source={_itm.image}
                                        alt="no"
                                        style={{
                                            width: 24,
                                            height: 24
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    ...GlobalStyles.flex,
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <WelcomeTxt
                                    txt={_itm.time}
                                    style={{
                                        color: '#FFFFFF70',
                                        fontWeight: '400',
                                        lineHeight: 30
                                    }}
                                />
                            </View>
                        </Linear>
                    ))
                }
                <View
                    style={{
                        marginTop: 18
                    }}
                >
                    <MainBtn
                        content={{
                            txt: 'Add Response',
                            icon: 'pluscircleo'
                        }
                        }
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                        }}
                        action={() => setState('add')}
                    />
                </View>
            </ScrollView >
            <Nav place={'Settings'} navigation={navigation} />
        </>
    )

}

const styles = StyleSheet.create({
    ticketTxt: {
        fontSize: 14,
        lineHeight: 30
    },
    ticketKey: {
        color: '#FFFFFFB8',
        fontWeight: '400'
    },
    ticketValue: {
        color: '#fff',
        fontWeight: '600'
    }
})