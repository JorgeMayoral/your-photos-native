import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import UploadIcon from '../components/icons/UploadIcon';
import { useUserPhotos } from '../hooks/useUserPhotos';
import { uploadPhoto } from '../services/uploadPhoto';

const PreviewScreen = ({ route, navigation }: any) => {
  const [description, setDescription] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');

  const { reload } = useUserPhotos();

  const { photo } = route.params;

  useEffect(() => {
    setPhotoPreview(photo.uri);
  }, []);

  const handlePublishButton = async () => {
    const photoFile = photoPreview.replace('file://', '');
    const result = await uploadPhoto(description, photoFile);

    if (result) {
      await reload();
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photoPreview }} />
      <CustomTextInput
        placeholder="Write a description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePublishButton}>
        <View style={styles.row}>
          <UploadIcon />
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 600,
    width: 390,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#00adb5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
    justifyContent: 'center',
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    paddingLeft: 10,
  },
});

export default PreviewScreen;
