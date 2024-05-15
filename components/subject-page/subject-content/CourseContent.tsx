import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Content from './Content';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function CourseContents({navigation}: SectionProps): React.JSX.Element {
  const navigateToModuleScreen = () => {
    navigation.navigate('ModuleScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 16}}>
        <Text style={styles.headerTxt}>Danh sách các modules</Text>
      </View>
      {/* Sau khi lấy được các modules từ course trong database thì nên đổ vào 1 const state array2D [[number, time, moduleName]]
      để chứa và dùng vòng for để tạo các <Content>...<Content> tương ứng với từng module */}
      <Content
        number={'01'}
        text={{
          time: 'Thời gian đọc, VD: 30m reading',
          moduleName: 'Tên Module 01, ví dụ: SQL Injection',
        }}
        NewScr={navigateToModuleScreen}
      />
      <Content
        number={'02'}
        text={{time: '1h reading', moduleName: 'Tên Module 02'}}
        NewScr={navigateToModuleScreen}
      />
      <Content
        number={'03'}
        text={{time: '2h reading', moduleName: 'Tên Module 03'}}
        NewScr={navigateToModuleScreen}
      />
      <Content
        number={'04'}
        text={{time: '1,5h reading', moduleName: 'Tên Module 04'}}
        NewScr={navigateToModuleScreen}
      />
      {/* Thêm vào để có khoảng trống phía dưới */}
      <View style={{width: '100%', height: 200}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  headerTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
});

export default CourseContents;
