import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  header: {
    marginTop: 50,
    marginHorizontal: 10,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  signOutButton: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  signUpButton: {
    margin: 10,
  },
  error: {
    margin: 10,
    fontSize: 16,
    color: 'red',
  },
  existingAccount: {
    margin: 10,
  },
  existingAccountText: {
    color: 'blue',
  },
  map: {
    height: 300
  }
});