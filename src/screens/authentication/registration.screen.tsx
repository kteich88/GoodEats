import React, { useContext, useState } from "react";
import { ImageBackground, View, Text, TextInput } from "react-native";
import { AuthenticationContext } from "contexts/authentication.context";
import Button from "components/Button/Button";
import LoadingScreen from "screens/loading/loading.screen";
import { theme } from "infrastructure/theme";
import { styles } from "./index.styles";

const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authenticatePassword, setAuthenticatePassword] = useState<string>("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={require("assets/backgrounds/good-eats.jpeg")}
    >
      <View style={styles.overlay} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          {error && <Text>{error}</Text>}

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            selectionColor={theme.colors.brand.primary}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            selectionColor={theme.colors.brand.primary}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Authenticate Password"
            selectionColor={theme.colors.brand.primary}
            value={authenticatePassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setAuthenticatePassword(p)}
          />
          <Button
            text="Register"
            onPress={() => onRegister(email, password, authenticatePassword)}
            isDisabled={false}
            customStyles={styles.loginButton}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default RegistrationScreen;
