import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppContext } from '../context/AppContext';

const AddTransactionScreen = ({ navigation }) => {
  const { addTransaction } = useAppContext();
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const handleAddTransaction = () => {
    if (!date || !amount || !description || !location || !type || !category) {
      alert('Please fill all fields');
      return;
    }

    addTransaction({ date, amount, description, location, type, category });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput style={styles.input} placeholder="Type (Credit/Debit/Refund)" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Category (Shopping, Travel...)" value={category} onChangeText={setCategory} />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({ /* styling here */ });

export default AddTransactionScreen;
