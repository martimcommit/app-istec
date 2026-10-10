import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  titulo: string;
  destaque: boolean;
};

function Card({ titulo, destaque = false }: CardProps) {
  return (
    <View style={[styles.card, destaque && styles.destaque]}>
      <Text>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#de0000",
    borderRadius: 8,
  },
  destaque: {
    backgroundColor: "#fff9c4",
    borderColor: "#fbc02d",
    borderWidth: 1,
  },
});
export default Card;
