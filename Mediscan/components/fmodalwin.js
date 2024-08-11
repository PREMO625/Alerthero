// components/fmodalwin.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import CustomButton from './custombutton';

const FModalWin = ({ visible, onClose, onContinue, navigation }) => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const codeRefs = useRef([]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example password validation
  };

  const handleContinue = () => {
    if (step === 1 && validateEmail(email)) {
      onContinue(email);
      setStep(2);
      setEmailError('');
    } else if (step === 1) {
      setEmailError('Please enter a valid email address.');
    } else if (step === 2 && code.length === 4) {
      setStep(3);
    } else if (step === 3) {
      if (validatePassword(newPassword) && newPassword === confirmPassword) {
        // Handle password reset logic here
        setStep(1);
        setEmail('');
        setCode('');
        setNewPassword('');
        setConfirmPassword('');
        onClose();
        if (navigation) {
          navigation.navigate('login');
        }
      } else {
        setPasswordError('Passwords must match and be at least 6 characters long.');
      }
    }
  };

  const handleCodeChange = (text, index) => {
    let newCode = code.split('');
    newCode[index] = text;
    setCode(newCode.join(''));

    if (text && index < 3) {
      codeRefs.current[index + 1].focus();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.swipeLine} />
          {step === 1 && (
            <>
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subtitle}>
                Enter your email for the verification process. We will send a 4-digit code to your email.
              </Text>
              <TextInput
                style={[styles.input, emailError ? styles.inputError : null]}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (!validateEmail(text)) {
                    setEmailError('Please enter a valid email address.');
                  } else {
                    setEmailError('');
                  }
                }}
              />
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </>
          )}
          {step === 2 && (
            <>
              <Text style={styles.title}>Enter 4 Digits Code</Text>
              <Text style={styles.subtitle}>
                Enter the 4 digits code that you received on your email.
              </Text>
              <View style={styles.codeContainer}>
                {[0, 1, 2, 3].map((_, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => codeRefs.current[index] = ref}
                    style={styles.codeInput}
                    maxLength={1}
                    keyboardType="numeric"
                    value={code[index] || ''}
                    onChangeText={(text) => handleCodeChange(text, index)}
                  />
                ))}
              </View>
            </>
          )}
          {step === 3 && (
            <>
              <Text style={styles.title}>Reset Password</Text>
              <Text style={styles.subtitle}>
                Set the new password for your account so you can log in and access all the features.
              </Text>
              <TextInput
                style={[styles.input, passwordError ? styles.inputError : null]}
                placeholder="New Password"
                placeholderTextColor="#888"
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={(text) => {
                  setNewPassword(text);
                  if (!validatePassword(text)) {
                    setPasswordError('Password must be at least 6 characters long.');
                  } else {
                    setPasswordError('');
                  }
                }}
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setShowNewPassword(!showNewPassword)}
              >
                <Text style={styles.toggleButtonText}>{showNewPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
              <TextInput
                style={[styles.input, passwordError ? styles.inputError : null]}
                placeholder="Confirm Password"
                placeholderTextColor="#888"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (text !== newPassword) {
                    setPasswordError('Passwords do not match.');
                  } else {
                    setPasswordError('');
                  }
                }}
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Text style={styles.toggleButtonText}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </>
          )}
          <CustomButton title="Continue" onPress={handleContinue} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 375,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  swipeLine: {
    width: 130,
    height: 5,
    borderRadius: 6,
    backgroundColor: '#C4C4C4',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  codeInput: {
    width: 54.17,
    height: 54.17,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 24,
    color: '#0EBE7F',
    textAlign: 'center',
  },
  toggleButton: {
    marginVertical: 10,
  },
  toggleButtonText: {
    color: '#0EBE7F',
    fontWeight: '600',
  },
});

export default FModalWin;
