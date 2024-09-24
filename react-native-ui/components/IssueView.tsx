import {View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import { StyleSheet, useColorScheme } from 'react-native';

interface props {
   title: string,
   severity: number,
}
export function IssueView({title, severity} : props) {

   return (
       <View>
           <ThemedText style={styles.issueTitle}>Issue</ThemedText>
           <ThemedText>{title}</ThemedText>
           <ThemedText>{severity}</ThemedText>
       </View>
   )
}

const styles = StyleSheet.create({
    issueTitle: {
        fontSize: 30,
        lineHeight: 24,
        marginBottom: 20,
        marginTop: 20

    }

})