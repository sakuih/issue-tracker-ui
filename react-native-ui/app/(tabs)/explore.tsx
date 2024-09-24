import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, TextInput, View, SafeAreaView, Button, Pressable, Text} from 'react-native';
import {useState} from "react";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {indexPointerFor} from "@zxing/text-encoding/es2015/encoding/indexes";

let [infoSent, setInfoSent] = useState(false);

export default function TabTwoScreen() {
  // @ts-ignore
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <View>
        <TextInput style={styles.inputform} placeholder={"Issue title"}/>
        <TextInput style={styles.inputform} placeholder={"Issue description"}/>
        <TextInput style={styles.inputform} placeholder={"Severity"}/>

        <Button title={"Push me"} onPress={() => alert('pressed')  } />

      </View>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  inputform: {
    padding: 10,
    marginBottom: 5,
  }
});
