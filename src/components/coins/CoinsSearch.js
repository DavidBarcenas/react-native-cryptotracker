import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export const CoinsSearch = (props) => {

  const [query, setQuery] = useState('')

  const handleText = (text) => {
    setQuery(text)
    if(props.onChange) {
      props.onChange(text)
    }
  }

  return (
    <View>
      <TextInput style={ style.textInput } onChangeText={ handleText } value={ query } placeholder='Search coin' placeholderTextColor='grey' />
    </View>
  )
}


const style = StyleSheet.create({
  textInput: {
    height: 46,
    color: '#fff',
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingLeft: 16
  }
})