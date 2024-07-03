import { Colors } from '@/constants/Colors'
import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

function CategoryTextSlider() {

    const [active, setActive] = useState(1)
    const onCategoryClick = (id: any) => {
        setActive(id)
    }
    const categoryList = [
        {
            id: 1,
            name: 'Latest'
        },
        {
            id: 2,
            name: 'World'
        },
        {
            id: 3,
            name: 'Music'
        },
        {
            id: 4,
            name: 'Sport'
        },
        {
            id: 5,
            name: 'Life'
        },
        {
            id: 6,
            name: 'Movies'
        },
        {
            id: 7,
            name: 'Business'
        },
    ]
    return (
        <View
            style={styles.topSlider}
        >
            <FlatList
                data={categoryList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => onCategoryClick(item.id)}
                    >
                        <Text
                            style={
                                item.id == active ? styles.selected : styles.unselected
                            }
                        >{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topSlider: {
    },
    unselected: {
        marginRight: 14,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        color: Colors.gray,
    },
    selected: {
        marginRight: 14,
        fontSize: 20,
        fontWeight: '800',
        marginTop: 10,
        color: Colors.primary,
    },
})

export default CategoryTextSlider