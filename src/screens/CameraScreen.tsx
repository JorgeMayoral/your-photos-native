import { Camera } from 'expo-camera';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CaptureIcon from '../components/icons/CaptureIcon';
import FlashOffIcon from '../components/icons/FlashOffIcon';
import FlashOnIcon from '../components/icons/FlashOnIcon';
import FlipIcon from '../components/icons/FlipIcon';

let camera: Camera;

const CameraScreen = ({ navigation }: any) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleTakePicture = async () => {
    const photo = await camera.takePictureAsync();
    navigation.replace('PreviewScreen', { photo });
  };

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        style={styles.camera}
        ratio="16:9"
        flashMode={isFlashOn ? 'on' : 'off'}
        ref={(r) => {
          camera = r!;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <FlipIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <CaptureIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsFlashOn(!isFlashOn);
            }}
          >
            {isFlashOn ? <FlashOnIcon /> : <FlashOffIcon />}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#44444499',
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraScreen;
