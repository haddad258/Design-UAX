import React from 'react';

import { View } from 'react-native';

import { Template } from '@components/layout/Template';
import { IconBtn } from '@components/common/IconBtn';
import { WelcomeWord } from '@components/layout/welcomeWord';
import { WelcomeTxt } from '@components/layout/WelcomeTxt';
import { WelcomeBtn } from '@components/layout/WelcomeBtn';
import { NrInput } from '@components/layout/Nrinput';
import { GlobalStyles } from '@components/styles';

export const LoginAuth = ({ navigation }) => {
    const children = (
        <>
            <IconBtn navigation={navigation} path={'Login'} icon={"keyboard-arrow-left"} />
            <WelcomeWord
                first={'Login'}
                second={'Authentication'}
                style={{
                    marginBottom: 12
                }}
            />
            <WelcomeTxt
                txt={'We will send you a message to set or reset your new passwordWe sent a one-time code to your registered email  address. Please enter it to verify your identity'}
            />
            <View style={{ ...GlobalStyles.flex, marginTop: 32, gap: 6 }}>
                <NrInput />
                <NrInput />
                <NrInput />
                <NrInput />
            </View>
            <WelcomeBtn
                content={'Continue'}
                action={'Dashboard'}
                navigation={navigation}
            />
        </>
    );

    return (
        <Template children={children} />
    )
};