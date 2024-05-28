import React, {type PropsWithChildren, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function MainHeader({navigation}: SectionProps): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  // Xử lý logout ở đây
  // Ví dụ: đăng xuất người dùng, xóa token, vv.
  const handleLogout = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  // Show help message
  const handleHelp = () => {
    Alert.alert(
      'Version: 1.0.0',
      'Our website: \n    winzdayne.me\nAuthors:\n    Nguyễn Thắng Lợi - 22162023\n    Lê Anh Khoa - 22162016',
    );
  };

  // Show email, update mail, change password
  const handleProfile = () => {
    setModalVisible(false);
    navigation.navigate('Profile');
  };

  // Show scoreboard
  const handleRanking = () => {
    setModalVisible(false);
    navigation.navigate('Ranking');
  };

  const handleUpload = () => {
    setModalVisible(false);
    navigation.navigate('Upload');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHelp}>
        <View style={styles.item}>
          <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>
            Cần hỗ trợ ?
          </Text>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.option} onPress={handleRanking}>
            <Text style={{color: 'black', fontSize: 16}}>Bảng Xếp Hạng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleLogout}>
            <Text style={{color: 'black', fontSize: 16}}>Đăng Xuất</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleProfile}>
            <Text style={{color: 'black', fontSize: 16}}>Xem Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleUpload}>
             <Text style={{color: 'black', fontSize: 16}}>Create Module</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(false)}>
            <Text style={{color: 'black', fontSize: 16}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.item}>
          <Image style={styles.img} source={require('./img/list.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginTop: 10,
  },

  item: {
    padding: 10,
  },

  img: {
    width: 20,
    height: 20,
  },

  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 80,
    marginTop: 150,
  },

  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },

  cancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default MainHeader;
