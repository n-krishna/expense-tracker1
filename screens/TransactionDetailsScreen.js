
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TransactionDetailsScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ /* styling here */ });

export default TransactionDetailsScreen;
