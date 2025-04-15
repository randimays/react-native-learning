import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text>Account Screen</Text>
      <View style={styles.signOutButton}>
        <Button title="Sign Out" onPress={signout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
});

export default AccountScreen;