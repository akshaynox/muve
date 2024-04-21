import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text className="text-3xl font-pblack">muve</Text>
    //   <StatusBar style="auto" />
    //   <Link href="/home" className="font-blue">
    //     Go to Home
    //   </Link>
    // </View>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless {"\n"} Possibilities with{" "}
              <Text className="text-secondary-200">Muve</Text>
            </Text>

            <Image
              source={images.path}
              className="h-[15] w-[136px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity means innovation: embark on a journey of limitless
            exploration with Muve
          </Text>
        </View>
        <Link href="/home" className="font-blue">
          Go to Home
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
