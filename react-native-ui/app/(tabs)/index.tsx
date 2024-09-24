import {Image, StyleSheet, Platform, FlatList, Text, Animated} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ScrollView = Animated.ScrollView;
import {IssueView} from "@/components/IssueView";
import {useEffect} from "react";

const issueList = [
    {
        title : "Bug in the website" ,
        severity: 3,
    },
    {
        title : "Terminal app crashes error code 104",
        severity: 4,
    },
    {
        title : "Button does not work!!!",
        severity : 1,
    },
    {
        title : "form is broken",
        severity : 2,
    },
    {
        title : "Massive vulnerability in the website!!! URGENT",
        severity : 5,
    },
]

export default function HomeScreen() {

    //useEffect( () => {

    //}, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">List</ThemedText>
          <ScrollView>
              <IssueView title={issueList[3].title} severity={issueList[3].severity}></IssueView>
              <Text>{ issueList[0].title }</Text>
              <Text>{ issueList[2].title }</Text>
              <Text>{ issueList[1].title }</Text>
          </ScrollView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
