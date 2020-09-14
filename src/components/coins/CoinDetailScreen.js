import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, SectionList } from 'react-native'

export const CoinDetailScreen = ({navigation, route}) => {
  const [coin, setCoin] = useState({})

  useEffect(() => {
    const { coin } = route.params
    navigation.setOptions({ title: coin.symbol })
    setCoin(coin)
  }, [])

  const getSymbolIcon = (name) => {
    if( name ) {
      const symbol = name.toLowerCase().replace(' ', '-')
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`
    }
  }

  const getSections = (coin) => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd]
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24]
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h]
      },
    ]

    return sections;
  }

  return (
    <View style={ style.container }>
      <View style={ style.subHeader }>
        <Image style={ style.iconImg } source={{ uri: getSymbolIcon(coin.name) }} />
        <Text style={ style.titleText }>{ coin.name }</Text>
      </View>
      <SectionList 
        sections = { getSections(coin) } 
        keyExtractor = {(item) => item}
        renderItem = {({ item }) => 
          <View style={ style.sectionItem }>
            <Text style={ style.itemText }>{ item }</Text>
          </View>
        }
        renderSectionHeader = { ({ section }) => 
          <View style={ style.sectionHeader }>
            <Text style={ style.sectionText }>{ section.title }</Text> 
          </View>
        }  
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35'
  },
  subHeader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    flexDirection: 'row'
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  },  
  iconImg: {
    width: 25,
    height: 25
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  sectionItem: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  itemText: {
    color: '#fff',
    fontSize: 14
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
})