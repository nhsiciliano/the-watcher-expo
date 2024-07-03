import { Colors } from "@/constants/Colors";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react'
import TopHeadlineSlider from "@/components/home/TopHeadlineSlider";
import CategoryTextSlider from "@/components/home/CategoryTextSlider";
import HeadlineList from "@/components/home/HeadlineList";
import GlobalApi from "@/services/GlobalApi";

export default function Index() {

  const [newsList, setNewsList] = useState([] as any[])

  useEffect(() => {
      getHeadlineInfo();
  }, [])

  const getHeadlineInfo = async () => {
      const result: any = (await GlobalApi.getTopHeadline).data;
      setNewsList(result.articles)
  }

  return (
    <SafeAreaView
      style={styles.area}
    >
      <View
        style={styles.header}
      >
        <Text style={styles.appName}>The Watcher News</Text>
        <Ionicons name="notifications-outline" size={24} color='black' />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider newsList={newsList}/>
      <HeadlineList newsList={newsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  area: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 42,
    paddingHorizontal: 15,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  }
})
