import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import CustomButton from '../components/custombutton';
import FModalWin from '../components/fmodalwin'; // Import the modal window component

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [modalStep, setModalStep] = useState(1); // State to control the step in the modal
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
    setModalStep(1);
  };

  const handleCloseModal = () => {
    setShowForgotPasswordModal(false);
  };

  const handleContinue = () => {
    if (modalStep === 1) {
      // Proceed to step 2 (Enter verification code)
      setModalStep(2);
    } else if (modalStep === 2) {
      // Proceed to step 3 (Reset Password)
      if (verificationCode.length === 4) {
        setModalStep(3);
      }
    } else if (modalStep === 3) {
      // Handle password reset
      if (newPassword === confirmPassword && newPassword.length >= 6) {
        setShowForgotPasswordModal(false);
        // Reset password in backend
      }
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/mainbg.jpg')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome back to Mediscan</Text>
        <Text style={styles.subtitle}>Access your secure medical profile now.</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/google-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/X-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or</Text>

        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={handleEmailChange}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.toggleButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Log In" onPress={() => { /* Handle log-in */ }} />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Modal for Forgot Password */}
        <FModalWin
          visible={showForgotPasswordModal}
          onClose={handleCloseModal}
          onContinue={handleContinue}
          modalStep={modalStep}
          email={email}
          setVerificationCode={setVerificationCode}
          verificationCode={verificationCode}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconButton: {
    marginHorizontal: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  orText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  toggleButton: {
    marginLeft: 10,
  },
  toggleButtonText: {
    color: '#0EBE7F',
    fontWeight: '600',
  },
  forgotPasswordText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#0EBE7F',
    fontWeight: '600',
  },
});

export default LogInScreen;
