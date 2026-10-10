import { Text, TouchableOpacity } from "react-native";

type AppButtonProps = {
  titulo: string;
  onPress: () => void;
};

function AppButton({ titulo, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}
export default AppButton;
