import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "@components/styles";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { WelcomeTxt } from "@components/layout/WelcomeTxt";
import { NoData } from "@components/common/noData";
import { LinearMainBox } from "@components/layout/linearMainBox";

import { datas } from "@components/datas";


export const Collections = () => {
    return (
        <View>
            <Text style={{ ...GlobalStyles.minTitle, textAlign: 'left', marginBottom: 6 }}>
                My Collections
            </Text>
            <View style={{
                ...GlobalStyles.flex,
                flexWrap: 'wrap',
                paddingBottom: 38
            }}>
                {
                    datas.collections.length ?
                        datas.collections.map((_itm, _idx) => (
                            <View key={_idx} style={{
                                width: '50%',
                                padding: 5
                            }}>
                                <View style={{
                                    backgroundColor: '#2A162F',
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF17',
                                    borderRadius: 6
                                }}>
                                    <Image
                                        source={_itm.image}
                                        alt="collections"
                                        style={{
                                            width: '100%',
                                            borderRadius: 6
                                        }}
                                    />
                                    <View style={{
                                        padding: 14
                                    }}>
                                        <View style={{ ...GlobalStyles.flexBetween }}>
                                            <Text style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 13
                                            }}>
                                                {`Art ${_itm.art}`}
                                            </Text>
                                            <MaterialCommunityIcons
                                                name="dots-horizontal"
                                                size={18}
                                                color="white" />
                                        </View>
                                        <View style={{
                                            ...GlobalStyles.flex
                                        }}>
                                            <Text style={{
                                                ...GlobalStyles.GreenTxt,
                                                fontSize: 14
                                            }}>
                                                {`${_itm.uaxn} UAXN`}
                                            </Text>
                                            <WelcomeTxt
                                                txt={'($7.70)'}
                                                style={{ fontSize: 12, marginLeft: 4 }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )) :
                        <LinearMainBox
                            style={{
                                ...GlobalStyles.flexCenter,
                                flexDirection: 'row !important',
                                width: '100%',
                                height: 220,
                                borderRadius: 10
                            }}
                            children={<NoData type={'Collections'} />}
                        />
                }
            </View>
        </View>
    )
}