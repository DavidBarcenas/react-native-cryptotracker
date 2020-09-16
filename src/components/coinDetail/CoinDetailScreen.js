import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, SectionList, Pressable, Alert } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Http } from '../../libs/http'
import { StorageLib } from '../../libs/storage'
import { CoinMarketItem } from './CoinMarketItem'

export const CoinDetailScreen = ({navigation, route}) => {
  const [coin, setCoin] = useState({})
  const [markets, setMarkets] = useState([])
  const [favorite, setFavorite] = useState(false)

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

  const getMarkets = async (coindId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coindId}`
    const markets = await Http.instance.get(url) 
    setMarkets(markets)
  }

  const toggleFavorite = () => {
    if(favorite) {
      removeFavorite()
    } else {
      addFavorite()
    }
  }

  const addFavorite = async () => {
    const saveCoin = JSON.stringify(coin);
    const key = `favorite-${coin.id}`

    const store = await StorageLib.instance.store(key, saveCoin)
    if(store) {
      setFavorite(true)
    }
  }

  const getFavorite = async (coin) => {
    try {
      const key = `favorite-${coin.id}`
      const favStr = await StorageLib.instance.get(key)

      if(favStr) {
        setFavorite(true)
      }
    } 
    catch (error) {
      console.error('get favorite err', error)
    }
  } 

  const removeFavorite = () => {
    Alert.alert('Remove favorite', 'Are you sure?', [  
      {
        text: 'Remove',
        onPress: async () => {
          const key = `favorite-${coin.id}`
          await StorageLib.instance.remove(key)
          setFavorite(false)
        },
        style: 'destructive'
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel'
      },
    ] )
  }

  useEffect(() => {
    const { coin } = route.params
    navigation.setOptions({ title: coin.symbol })
    getFavorite(coin)
    getMarkets(coin.id)
    setCoin(coin)
  }, [])

  return (
    <View style={ style.container }>
      <View style={ style.row }>
        <View style={ style.subHeader }>
          <Image style={ style.iconImg } source={{ uri: getSymbolIcon(coin.name) }} />
          <Text style={ style.titleText }>{ coin.name }</Text>
        </View>

        <Pressable style={[ style.btnFavorite, favorite ? style.btnFavoriteRemove : style.btnFavoriteAdd ]} onPress={ toggleFavorite }>
          <Text style={ style.btnFavoriteText }>{ favorite ? 'Remove favorite' : 'Add favorite' }</Text>
        </Pressable>
      </View>
      <SectionList style={ style.section }
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

      <Text style={ style.titleMerket }>Markets</Text>
      {/* <FlatList 
        style={ style.list }
        horizontal={ true } 
        data={ markets } 
        keyExtractor={(item) => item.price}
        renderItem={({item}) => <CoinMarketItem item={ item } />} 
      /> */}
      <ScrollView style={ style.marketsView }>
        <View style={style.list}>
        {markets.map(item => <CoinMarketItem item={ item } />)}
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
  },
  subHeader: {
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
  section: {
    maxHeight: 220,
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
  },
  titleMerket: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16
  },
  marketsView: {
    height: 300,
  } , 
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteText: {
    color: '#fff'
  },  
  btnFavoriteAdd: {
    backgroundColor: '#3c6fc8'
  },
  btnFavoriteRemove: {
    backgroundColor: '#ef6372'
  }
})