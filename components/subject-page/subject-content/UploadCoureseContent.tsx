import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity, Alert,useEffect} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import axios from 'axios';
import {useAuth} from '../../../AuthProvider';


type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function UploadCourseContent({navigation}: SectionProps): React.JSX.Element {
    let categories = [
        'Web Security',
        'Cryptography',
       'Reverse Engineering',
      'Forensics',
       'Binary Exploitation',
      'Misc',
    ];
    const [name, setNameCourse] = React.useState('');
    const [category, setCategory] = React.useState('');
    const {user} = useAuth();
    const [author, setAuthor] = React.useState();
    const handleSelect = (index, value) => {
        setCategory(value);
      };
    const GotoEdit = () => {
        navigation.navigate("ModuleEdit");
    };
    React.useEffect(() => {
        if (user && user.id) {
          setAuthor(user.id);
        }
    }, [user]);
    const handleCreate = () => {
    axios.
        post('http://10.0.2.2:8000/api/create-module/',{
            name,
            category,
            author
        })
        .then((response) => {
            console.log(response.data);
            Alert.alert('Course Created Successfully');
            GotoEdit();
        })
        .catch((error) => {
            Alert.alert('Course Created Failed');
            console.log(error);
        });
    console.log(user.token);
    console.log(name);
    console.log(category);
    console.log(author);
    };
    return (
        <SafeAreaView>
        <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={setNameCourse}
                value={name}
                placeholder="Name Course"
              />
              <ModalDropdown
                      options={categories}
                      style={styles.dropdown}
                      textStyle={styles.dropdownText}
                      dropdownStyle={styles.dropdownStyle}
                      onSelect={(index, value) => handleSelect(index, value)}
                    />
                    {category && <Text style={styles.selectedText}>Selected: {category}</Text>}
              <TouchableOpacity
                style={styles.Create}
                onPress={handleCreate}
                >
                  <Text style={styles.text}>Create</Text>
              </TouchableOpacity>
        </View>
            </SafeAreaView>

    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
      },
    Create: {
        backgroundColor: '#87cefa',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: '50%',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
      },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '80%',
    },
    dropdownText: {
       fontSize: 16,
    },
    dropdownStyle: {
        width: 200,
    },
    selectedText: {
        marginTop: 16,
        fontSize: 16,
    },
});

export default UploadCourseContent;