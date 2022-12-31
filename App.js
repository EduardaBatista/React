import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, alignItems: 'center', paddingTop: 8 }} >
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://img.freepik.com/fotos-premium/cao-beagle-bonito-com-uma-coroa-de-flores-sobre-fundo-branco-retrato-de-primavera-de-um-cachorro_598835-625.jpg',
          }}
        />

      </View>
      <View style={{ flex: 2 }} >
        <Input
          placeholder='EMAIL'
        />

        <Input
          placeholder='SENHA'
        />
        <Button
          title="ENTRAR"
          
        />
        <Button
          title="Redefinir senha"
          type="clear"
        />

      </View>
      <View style={{ flex: 1 }} >
        <Button
          title="CADASTRE-SE"
          type="outline"
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;