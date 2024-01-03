// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform login logic here (e.g., validate credentials, API calls, etc.)
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // Add your logic for authentication
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Username or Email</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setUsername(text)}
//         value={username}
//         placeholder="Enter your username or email"
//         autoCapitalize="none"
//       />
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setPassword(text)}
//         value={password}
//         placeholder="Enter your password"
//         secureTextEntry={true}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default LoginScreen;
