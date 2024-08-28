import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';

const VideoCapture = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [videoUri, setVideoUri] = useState(null); // State to store video URI
    const cameraRef = useRef(null);

    const startRecording = async () => {
        if (cameraRef.current) {
            try {
                setIsRecording(true);
                const videoData = await cameraRef.current.recordAsync();
                setVideoUri(videoData.uri); // Store the video URI
                console.log('Video recorded: ', videoData);
            } catch (error) {
                console.error('Error while recording video: ', error);
            } finally {
                setIsRecording(false);
            }
        }
    };

    const stopRecording = () => {
        if (cameraRef.current) {
            cameraRef.current.stopRecording();
            setIsRecording(false);
        }
    };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                captureAudio={true}
            />
            <View style={styles.buttonsContainer}>
                <Button
                    title={isRecording ? 'Stop Recording' : 'Start Recording'}
                    onPress={isRecording ? stopRecording : startRecording}
                />
            </View>
            {videoUri && ( // If videoUri is not null, display the video
                <Video
                    source={{ uri: videoUri }}
                    style={styles.videoPlayer}
                    controls={true} // Optional: to show video controls like play, pause, etc.
                    resizeMode="contain"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    videoPlayer: {
        flex: 1,
        width: '100%',
        height: 300,
    },
});

export default VideoCapture;


