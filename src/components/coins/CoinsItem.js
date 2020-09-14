import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export const CoinsItem = ({ item, onPress }) => {

  const getImgArrow = () => {
    if( item.percent_change_1h > 0 ) {
      return require('../../assets/arrow_up.png')
    } else {
      return require('../../assets/arrow_down.png')
    }
  }

  return (
    <Pressable onPress={ onPress } style={ styles.container }>
      <View style={ styles.row }>
        <Text style={ styles.symbol }>{ item.symbol }</Text>
        <Text style={ styles.nameText }>{ item.name }</Text>
        <Text style={ styles.priceText }>{`$${ item.price_usd }`}</Text>
      </View>

      <View style={ styles.row }>
        <Text style={ styles.percentText }>{ item.percent_change_1h }</Text>
        <Image style={ styles.img } source={ getImgArrow() } />
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#3a4049',
    borderBottomWidth: 1
  },  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  item: {
    color: '#fff'
  },
  img: {
    width: 22,
    height: 22
  },
  symbol: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 16
  }, 
  priceText: {
    fontSize: 14
  },
  percentText: {
    color: "#fff",
    fontSize: 12,
    marginRight: 8
  },
})