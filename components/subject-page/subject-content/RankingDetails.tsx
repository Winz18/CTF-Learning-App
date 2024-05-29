import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RankingIndex from './RankingIndex.tsx';
import axios from 'axios';
import {useAuth} from '../../../AuthProvider';



function RankingDetails(): React.JSX.Element {
  const {user} = useAuth();
  const [ListRanking, setListRanking] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://10.0.2.2:8000/api/custom-users/', {
        headers: {
          Authorization: `token ${user.token}`,
        },
      })
       .then((response) => {
            setListRanking(response.data);
       })
         .catch((error) => {
                console.log(error);
         });
   }, []);
   const sortedItems = ListRanking.sort((a, b) => {
     return a.score !== b.score ? b.score - a.score : a.contribution - b.contribution;
   });
  return (
    <View style={styles.container}>
      {/* Tạo khoảng trống */}
      <View>
        <Text />
      </View>
      {ListRanking.map((item, index) => (
              <RankingIndex
                key={index}
                rank={(index + 1).toString()}
                text={{ username: item.user.username }}
                score={item.score}
              />
      ))}
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
});

export default RankingDetails;
