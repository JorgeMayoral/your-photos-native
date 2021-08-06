import React from 'react';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from './CustomTextInput';

interface UpdateModalProps {
  show: boolean;
}

const UpdateModal = ({ show }: UpdateModalProps) => {
  const [showModal, setShowModal] = useState(show);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={showModal} transparent={false}>
        <View style={styles.container}>
          <Text>Write a new description for your photo...</Text>
          <CustomTextInput placeholder="New description" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalView: {
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00adb5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default UpdateModal;
