import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CameraIcon from '../components/icons/CameraIcon';
import Loading from '../components/Loading';
import PhotoCard from '../components/PhotoCard';
import UpdateModal from '../components/UpdateModal';
import { useUserPhotos } from '../hooks/useUserPhotos';
import { removeToken } from '../utils/tokenStorage';
import { removeUser } from '../utils/userStorage';

const Home = ({ navigation }: { navigation: any }) => {
  const { loading, userPhotos, reload } = useUserPhotos();

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.layout}>
      {userPhotos.length === 0 && <Text>There is no photos...</Text>}
      {userPhotos && (
        <FlatList
          data={userPhotos}
          renderItem={({ item }) => <PhotoCard data={item} />}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={() => reload()}
          refreshing={loading}
        />
      )}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <CameraIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  actionButton: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#00adb5',
    borderRadius: 30,
    elevation: 8,
  },
});

export default Home;
