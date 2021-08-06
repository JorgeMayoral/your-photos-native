import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { deleteUserPhoto } from '../services/deleteUserPhoto';
import DeleteIcon from './icons/DeleteIcon';
import EditIcon from './icons/EditIcon';

interface PhotoCardProps {
  data: Photo;
}

const PhotoCard = ({ data }: PhotoCardProps) => {
  const time = new Date(data.createdAt);

  const handleDeleteButton = (id: number) => {
    Alert.alert(
      'Confirm delete',
      'Do you want to delete this photo?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deleteUserPhoto(id),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {data.filename !== null ? (
          <Image
            style={styles.image}
            source={{ uri: `http://192.168.0.163:5000/${data.filename}.jpg` }}
          />
        ) : null}
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.date}>{time.toLocaleDateString('en-GB')}</Text>
        <View style={styles.buttonContainer}>
          {/*
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <EditIcon />
          </TouchableOpacity>
          */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDeleteButton(data.id)}
          >
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    marginBottom: 10,
    padding: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 75,
    alignSelf: 'center',
    marginVertical: 10,
  },
  date: {
    fontSize: 10,
    color: 'gray',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default PhotoCard;
