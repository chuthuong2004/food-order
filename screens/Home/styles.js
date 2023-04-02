import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 24,
    backgroundColor: COLORS.background,
  },
  box: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#0eaf79",
    borderRadius: 10,
    marginBottom: 20,
  },
});
export default styles;
