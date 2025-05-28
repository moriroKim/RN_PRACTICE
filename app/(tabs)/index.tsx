import { Text, View } from "react-native";
import "../globals.css";
import { Link } from "expo-router";

// 초기 index 페이지
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-bold text-accent">Hello World</Text>
    </View>
  );
}
