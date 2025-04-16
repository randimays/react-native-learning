import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { styles } from '../styles';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container} forceInset={{ top: 'always' }}>
      <Text style={styles.header}>Account Screen</Text>
      <View style={styles.signOutButton}>
        <Button title="Sign Out" onPress={signout} />
      </View>
    </View>
  );
};

export default AccountScreen;