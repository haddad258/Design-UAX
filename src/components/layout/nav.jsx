import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles";


import { datas } from "../datas";

// const Tab = createBottomTabNavigator();

export const Nav = ({ navigation, place }) => {
    return (
        <View
            style={{
                ...GlobalStyles.flexBetween,
                backgroundColor: '#321C3F',
                paddingVertical: 70,
                paddingHorizontal: 32,
            }}>
            {
                datas.nav.datas.map((_itm, _idx) => (
                    <View
                        key={_idx}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate(_itm.path)}
                            style={{
                                opacity: (
                                    _itm.path === place ?
                                        0 : 1
                                ),
                                // marginHorizontal: (
                                //     _itm.path === place ?
                                //         8 : 0
                                // ),
                            }}
                        >
                            <Image
                                source={datas.nav.images[_itm.image]}
                                alt={_itm.image}
                                width={20}
                            />
                        </TouchableOpacity>
                        <View
                            key={_idx}
                            style={{
                                position: 'absolute',
                                top: -48,
                                left: -18,
                                display: (
                                    _itm.path === place ?
                                        'flex' : 'none'
                                ),
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: 60,
                            }}
                        >
                            <View style={{
                                ...GlobalStyles.flexCenter,
                                backgroundColor: '#DF16FF',
                                position: 'relative',
                                padding: 15,
                                borderRadius: '50%',
                                borderWidth: 8,
                                borderColor: '#321C3F'

                            }}>
                                <Image
                                    source={datas.nav.images[_itm.image + 'Active']}
                                    alt={_itm.image}
                                    width={20}
                                />
                            </View>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}>{_itm.path}</Text>
                        </View>
                    </View>
                ))
            }
        </View >
    )
}