import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from '../styles';

const NavLink = ({ navigation, text, routeName}) => {
  return (
    <TouchableOpacity style={styles.existingAccount} onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.existingAccountText}>{text}</Text>
    </TouchableOpacity>
  )
};

export default withNavigation(NavLink);