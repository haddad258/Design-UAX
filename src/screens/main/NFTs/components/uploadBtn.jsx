import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GlobalStyles } from '@components/styles';
import { LinearMainBox } from '@components/layout/linearMainBox';

import { Upload } from '@components/upload';

const UploadBtn = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <LinearMainBox
            style={{
                ...styles.uploadButton,
                marginVertical: 28
            }}
            children={<View style={styles.container}>
                <TouchableOpacity
                    onPress={() => Upload(setSelectedFile)}
                    style={{ ...GlobalStyles.flex, flexDirection: 'column' }}
                >
                    <FontAwesome
                        name="upload"
                        size={34}
                        color="white"
                        style={{ marginBottom: 18 }}
                    />
                    <View style={{ ...GlobalStyles.flex }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 13
                        }}>
                            PNG, JPG, GIF, MP4, <Text style={{ color: '#E12DFF' }}>Max 5MB</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                {selectedFile && (
                    <Text style={styles.fileInfo}>
                        {selectedFile.name} • {selectedFile.size}
                    </Text>
                )}
            </View>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    uploadButton: {
        width: '100%', // Adjust width to match your design
        borderWidth: 0.5,
        borderColor: '#FFFFFF24',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonSubtext: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    fileInfo: {
        marginTop: 8,
        fontSize: 12,
        color: '#555',
    },
});

export default UploadBtn;