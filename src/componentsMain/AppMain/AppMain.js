import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addValues } from '../redux/Actions/Actions';

const AppMain = () => {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch()
  const values = useSelector(state => state.val.values);
  const [data, setData] = useState(values);
  const add = () => {
    let arr = !!values.length ? values : [];
    console.log(arr)
    arr.push({ values: inputVal })
    dispatch(addValues(arr));
  }

  useEffect(() => {
    setData(values)
    console.log('test')
  }, [data])

  return (
    <View>
      <View style={styles.inputAndAddButton}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="text" value={inputVal} onChangeText={text => setInputVal(text)} />
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButtonTouchAble} onPress={() => add()}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {
          data.map((arr) => {
            return (
              <View><Text>{arr.values}</Text></View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    height: 50,
    width: 300,
  },
  inputAndAddButton: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  addButtonTouchAble: {
    backgroundColor: 'red',
    height: 50,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AppMain
