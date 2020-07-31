import React, { memo, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import colors from "../constants/colors";
import ConversionInput from "../components/ConversionInput";
import Button from "../components/Button";
import KeyboardSpacer from "../components/KeyboardSpacer";
import { ConversionContext } from '../util/ConversionContext';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

const Home = ({ navigation }) => {
  const [value, setValue] = useState("100");
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const convertionRate = 1.02;
  const date = new Date();

  const { baseCurrency, quoteCurrency, swapCurrencies, setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text={baseCurrency}
            value={value}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                activeCurrency: baseCurrency,
                onChange: (currency) => setBaseCurrency(currency)
              })
            }
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={value && `${(parseFloat(value) * convertionRate).toFixed(2)}`}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                activeCurrency: quoteCurrency,
                onChange: (currency) => setQuoteCurrency(currency)
              })
            }
            editable={false}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${convertionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />

          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Home);
