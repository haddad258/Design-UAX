import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { IconBtn } from '@components/common/IconBtn'
import { filter } from "@components/filter";
import { GlobalStyles } from "@components/styles";
import { MainBtn } from "@components/layout/mainBtn";

// import images
import Bottom from '@assets/nft-bg-bottom.png';
import Top from '@assets/nft-bg-top.png';

export const Complete = ({ state, setState }) => {
    const data = filter(state, 'markplace');

    return (
        <>
            <View style={{ paddingTop: 40 }}>
                <IconBtn
                    icon={'keyboard-arrow-left'}
                    path={() => setState(null)}
                />
            </View>
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        minHeight: '100%',
                        ...GlobalStyles.flexCenter,
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <View style={{
                        width: '100%',
                        transform: 'translate(0, -40%)'
                    }}>
                        <LinearGradient
                            colors={['#DE20FD', '#8B1B9D']}
                            style={{
                                ...GlobalStyles.flexCenter,
                                flexDirection: 'row !important',
                                borderRadius: 14,
                                overflow: 'hidden',
                                maxWidth: 300,
                                width: '100%',
                                margin: 'auto'
                            }}
                        >
                            <Image
                                source={Top}
                                alt="nft-top-back"
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0
                                }}
                            />
                            <Image
                                source={Bottom}
                                alt="nft-bottom-back"
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 0
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    ...GlobalStyles.flexCenter,
                                    gap: 10,
                                    paddingHorizontal: 24,
                                    top: -8
                                }}
                            >
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                                <View style={{ ...styles.dot }} />
                            </View>
                            <View
                                style={{
                                    ...GlobalStyles.flexCenter,
                                    flexDirection: 'row !important',
                                    padding: 24
                                }}
                            >
                                <View style={{
                                    marginTop: 24,
                                    marginBottom: 4
                                }}>
                                    <Image
                                        source={data.image}
                                        alt="no"
                                        style={{
                                            width: 81,
                                            height: 81,
                                            borderRadius: 14
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    ...GlobalStyles.minTitle,
                                    fontSize: 14,
                                    marginVertical: 12
                                }}>Congrats!</Text>
                                <Text style={{
                                    ...GlobalStyles.minTitle,
                                    fontSize: 12
                                }}>The highest bid is yours</Text>
                                <View
                                    style={{ marginTop: 32 }}
                                >
                                    <View style={{
                                        ...GlobalStyles.flexBetween,
                                        width: '100%',
                                        marginBottom: 12
                                    }}>
                                        <Text style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 12,
                                        }}>
                                            NFT Name
                                        </Text>
                                        <Text style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 12,
                                            fontWeight: '700'
                                        }}>
                                            {`${data.art} Art`}
                                        </Text>
                                    </View>
                                    <View style={{
                                        ...GlobalStyles.flexBetween,
                                        width: '100%'
                                    }}>
                                        <Text style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 12,
                                        }}>
                                            Due Date
                                        </Text>
                                        <Text style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 12,
                                            fontWeight: '700'
                                        }}>
                                            August 21. 2024
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    height: 1,
                                    borderBottomWidth: 1,
                                    borderStyle: 'dashed',
                                    borderColor: '#fff',
                                    position: 'relative'
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.dot,
                                        position: 'absolute',
                                        left: -8,
                                        transform: 'translate(0, -50%)'
                                    }} />
                                <View
                                    style={{
                                        ...styles.dot,
                                        position: 'absolute',
                                        right: -8,
                                        transform: 'translate(0, -50%)'
                                    }} />
                            </View>
                            <View
                                style={{
                                    ...GlobalStyles.flexCenter,
                                    flexDirection: 'row !important',
                                    padding: 24
                                }}
                            >
                                <Text style={{
                                    ...GlobalStyles.minTitle,
                                    fontSize: 12,
                                    // paddingTop: 24
                                }}>
                                    Total Bid
                                </Text>
                                <Text style={{
                                    fontStyle: 14,
                                    fontWeight: 500,
                                    color: '#0DF469',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}>
                                    10 UAXN
                                    <Text style={{ color: '#CECECE' }}>
                                        ($7.70)
                                    </Text>
                                </Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{
                        marginTop: 28,
                        maxWidth: 300,
                        width: '100%',
                        marginHorizontal: 'auto',
                        position: 'absolute',
                        bottom: 64
                    }}>
                        <MainBtn content={{
                            txt: 'Continue',
                        }}
                            style={{
                                backgroundColor: '#DF16FF',
                                borderColor: 'transparent'
                            }}
                            action={() => setState(null)} />
                    </View>
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#0D0211',
    }
})