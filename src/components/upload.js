import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';


export const Upload = async (setState) => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert("Permission required", "Allow access to upload files.");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only images (adjust for videos)
        allowsEditing: false,
        quality: 0.7,
    });

    if (!result.canceled) {
        const file = result.assets[0];
        const fileInfo = await FileSystem.getInfoAsync(file.uri);

        // Check file type (PNG/JPG) and size (5MB)
        if (!file.uri.match(/\.(jpg|jpeg|png)$/i)) {
            Alert.alert("Invalid format", "Only PNG/JPG allowed.");
            return;
        }

        if (fileInfo.size > 5 * 1024 * 1024) {
            Alert.alert("File too large", "Max 5MB allowed.");
            return;
        }

        setState({
            name: file.uri.split('/').pop(),
            size: (fileInfo.size / (1024 * 1024)).toFixed(2) + 'MB',
            path: file.uri
        });
    }

};
