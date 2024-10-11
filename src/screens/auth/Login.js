import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import HeadingText from '../../components/common/layout/HeadingText';
import CustomButton from '../../components/common/button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/common/TextInput/TextInput';
import Password from '../../components/common/TextInput/Password';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('Splash');
  };
  const handleclick = () => {
    navigation.navigate('Register');
  };

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Clear error after 3 seconds
    const clearError = () => {
      setTimeout(() => {
        setError('');
      }, 3000); // 3 seconds timeout
    };

    if (!mobile) {
      setError('Enter Mobile No');
      clearError();
      return;
    }

    if (mobile.length !== 10) {
      setError('Mobile number must be 10 digits');
      clearError();
      return;
    }

    if (!password) {
      setError('Password cannot be empty');
      clearError();
      return;
    }

    // If everything is fine, navigate to the next screen
    setError('');
  };

  return (
    <View style={{backgroundColor: '#FAFAFA', height: '100%'}}>
      <HeadingText handleBack={handleBack} />
      <Text style={styles.text}>Sign In to your account !</Text>
      <View>
        <CustomTextInput
          label={'Enter mobile no'}
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          maxLength={10}
          margin={25}
        />
        <Password
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        {error && (
          <View style={styles.errorContainer}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={20}
              color="#8C1823"
            />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <CustomButton
          label="Sign In"
          marginTop={50}
          width="90%"
          handleClick={handleLogin}
        />
      </View>
      <Text style={styles.signUpText}>Do not have account</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={{alignSelf: 'center'}}>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 30,
    backgroundColor: '#FAFAFA',
    fontSize: 16,
    paddingLeft: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#8C1823', // Error color
    textAlign: 'center',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
  signUpText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 60,
    textAlign: 'center',
  },
  signUpButton: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#3C5FDD',
    textAlign: 'center',
  },
});

export default Login;
