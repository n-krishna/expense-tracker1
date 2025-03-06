
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../context/AppContext';

const DashboardScreen = ({ navigation }) => {
  const { transactions, logout } = useAppContext();

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => { logout(); navigation.replace('SignIn'); }} />
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}>
            <View style={styles.transactionItem}>
              <Text>{item.description} - ${item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({ /* styling here */ });

export default DashboardScreen;
