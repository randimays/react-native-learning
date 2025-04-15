import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName}) => {
  return (
    <TouchableOpacity style={styles.existingAccount} onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.existingAccountText}>{text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    existingAccount: {
    margin: 10,
  },
  existingAccountText: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);