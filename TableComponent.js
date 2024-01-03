// import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const TableComponent = () => {
  const [breakfastChecked, setBreakfastChecked] = useState(false);
  const [lunchChecked, setLunchChecked] = useState(false);

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log('Logout clicked');
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Priya</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text>Date</Text>
      <Text>Breakfast</Text>
      <Text>Lunch</Text>
    </View>
  );

  const renderTableRow = () => (
    <View style={styles.tableRow}>
      <Text>{getCurrentDate()}</Text>
      <Text>{getCurrentDate()}</Text>
      <Text>{getCurrentDate()}</Text>
      {/* <CheckBox value={breakfastChecked} onValueChange={setBreakfastChecked} />
      <CheckBox value={lunchChecked} onValueChange={setLunchChecked} /> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Magesh</Text>
      {renderHeader()}
      <FlatList
        ListHeaderComponent={renderTableHeader}
        data={[{key: 'row1'}]}
        renderItem={() => renderTableRow()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    fontSize: 16,
    color: 'blue',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default TableComponent;
