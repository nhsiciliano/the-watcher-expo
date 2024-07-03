import React from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'

function HeadlineList({ newsList } : any) {
    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.listImage}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listImage: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },
})

export default HeadlineList