import { Colors } from '@/constants/Colors'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function HeadlineList({ newsList } : any) {
    return (
        <View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ height: 1, backgroundColor: Colors.lightGray, marginTop: 10 }}></View>
                        <TouchableOpacity
                            style={{ marginTop: 15, display: "flex", flexDirection: "row" }}
                        >
                            <Image
                                source={{ uri: item.urlToImage }}
                                style={styles.listImage}
                            />
                            <View
                                style={{ marginRight: 130, marginLeft: 10 }}
                            >
                                <Text numberOfLines={4} style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                                <Text style={{ color: Colors.primary, marginTop: 6 }}>{item?.source?.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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