import { Colors } from '@/constants/Colors'
import GlobalApi from '@/services/GlobalApi'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'

function TopHeadlineSlider({ newsList } : any) {

    return (
        <View
            style={styles.topHeadline}
        >
            <FlatList
                data={newsList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ width: Dimensions.get('screen').width*0.80, marginRight: 15 }}
                    >
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.headlineImage}
                        />
                        <Text numberOfLines={3} style={styles.textTile}>{item?.title}</Text>
                        <Text style={styles.textSource}>{item?.source?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topHeadline: {
        marginTop: 15,
    },
    headlineImage: {
        height: Dimensions.get('screen').width*0.77,
        borderRadius: 10,
    },
    textTile: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '800',
    },
    textSource: {
        marginTop: 5,
        color: Colors.primary,
    },
})

export default TopHeadlineSlider