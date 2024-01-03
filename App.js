import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Linking,
} from 'react-native';
import {instance} from './Config/AppConfig';
import {CheckBox} from '@rneui/themed';
import unchecked from './Images/unchecked.png';
import checked from './Images/checked.png';
import logo from './Images/surflogo.jpg';
import surflogo from './Images/logosurf.png';
// import moment from 'moment/moment';
import moment from 'moment-timezone';

const App = () => {
  const [username, setUsername] = useState('');
  const [empName, setEmpName] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [breakfastChecked, setBreakfastChecked] = useState(true);
  const [lunchChecked, setLunchChecked] = useState(false);
  const [tableView, setTableView] = useState(false);
  const [showSuccessMsg, setSuccessMsg] = useState(false);
  const [isChecked, setIsChecked] = useState(unchecked);
  const [breakfast, setbreakfast] = useState(unchecked);
  const [lunch, setLunch] = useState(unchecked);
  const [Snacks, setSnacks] = useState(unchecked);
  const [gridData, setGridData] = useState([]);
  const [showEvent, setShowEvent] = useState(false);
  const [imageData, setImageData] = useState('');
  const handleLogout = () => {
    setTableView(false);
    console.log('Logout clicked');
  };

  const renderHeader = () => (
    <>
      {/* <View style={styles.navbar}>
        <Image
          style={styles.logo}
          source={require('./Images/tsi.png')}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={handleLogout}>
          <Image
            style={styles.logoutButton}
            color="black"
            source={require('./Images/logout.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <Text
          style={{color: '#02061c'}}
          onPress={() =>
            Linking.openURL('https://sway.office.com/03HtNF4d6xWA1DOk?ref=Link')
          }>
          Food Menu
        </Text>
        <Text
          style={{color: '#02061c'}}
          onPress={() =>
            Linking.openURL('https://sway.office.com/03HtNF4d6xWA1DOk?ref=Link')
          }>
          Review
        </Text>
        <Text
          style={{color: '#02061c'}}
          onPress={() =>
            Linking.openURL('https://sway.office.com/03HtNF4d6xWA1DOk?ref=Link')
          }>
          Cancel
        </Text>
      </View> */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Hi, {empName} !</Text>
      </View>
    </>
  );

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Date</Text>
      <Text style={styles.headerText}>Breakfast</Text>
      <Text style={styles.headerText}>Lunch</Text>
      <Text style={styles.headerText}>Snacks</Text>
      <Text style={styles.headerText}>Actions</Text>
    </View>
  );
  // const handleDelete = () => {
  //   console.log(`Deleted item with ID: ${item.id}`);
  // };

  const handleCheckBox = (rowIndex, columnName) => {
    const updatedGridData = [...gridData];
    const currentRow = updatedGridData[rowIndex];

    console.log('column name', currentRow[columnName]);
    if (!currentRow[columnName]) {
      currentRow[columnName] = columnName;
    } else {
      currentRow[columnName] = '';
    }

    setGridData(updatedGridData);
  };

  moment().tz('America/Los_Angeles').format();

  const date = new Date();
  // const time = new Time();
  console.log('date', moment().tz('Asia/Kolkata').format());
  const chennaiTime = moment.tz('Asia/Kolkata');

  // Get the current time in Chennai
  const currentTimeInChennai = chennaiTime.format('HH');
  const shouldAllowBooking = currentTimeInChennai < '18';
  console.log('Current time in Chennai:', currentTimeInChennai);
  const renderTableRow = () => {
    return (
      <View>
        {gridData.map((rowData, index) => (
          <View key={index}>
            {rowData.date === moment(date).format('YYYY-MM-DD') && (
              <View style={styles.tableRow}>
                <Text disabled style={styles.headerText}>
                  {moment(rowData.date).format('DD-MMM-YY')}
                </Text>
                <TouchableOpacity
                  disabled={true}
                  // onPress={() => handleCheckBox(index, 'breakfast')}
                >
                  <Image
                    style={styles.logoutButton}
                    source={rowData.breakfast ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={true}
                  // onPress={() => handleCheckBox(index, 'lunch')}
                >
                  <Image
                    style={styles.logoutButton}
                    source={rowData.lunch ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={true}
                  // onPress={() => handleCheckBox(index, 'snacks')}
                >
                  <Image
                    style={styles.logoutButton}
                    source={rowData.snacks ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={true}
                  // onPress={() => handleDelete(index, rowData.date)}
                >
                  <Image
                    style={styles.logoutButton}
                    source={require('./Images/deleteDisabled.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
            {!(rowData.date === moment(date).format('YYYY-MM-DD')) && (
              <View style={styles.tableRow}>
                <Text disabled style={styles.headerText}>
                  {moment(rowData.date).format('DD-MMM-YY')}
                </Text>
                <TouchableOpacity
                  onPress={() => handleCheckBox(index, 'breakfast')}>
                  <Image
                    style={styles.logoutButton}
                    source={rowData.breakfast ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCheckBox(index, 'lunch')}>
                  <Image
                    style={styles.logoutButton}
                    source={rowData.lunch ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCheckBox(index, 'snacks')}>
                  <Image
                    style={styles.logoutButton}
                    source={rowData.snacks ? checked : unchecked}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDelete(index, rowData.date)}>
                  <Image
                    style={styles.logoutButton}
                    source={require('./Images/delete.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };

  const handleLogin = async () => {
    setShowEvent(false);
    getImage();
    console.log('Dimensions ===>', Dimensions.get('window').height);
    await instance
      .get('/fetchUserDetails/' + username)
      .then(async function (response) {
        if (response.data) {
          let empValues = {
            employeeNumber: username,
            datesList: [response.data.nextDay],
          };
          console.log('Emp Values', empValues);
          await instance.post('/updateDates', empValues);
          let res = await instance.get('/getGridData/' + username);
          setGridData(res.data);
          console.log('Ressssss===>', res.data);
          // setTableValues(response.data, res.data);
          setTableView(true);
          setEmpName(response.data.employeeName);
          setNextDay(response.data.nextDay);
        }
        // setGridData(...res.data, response.data.nextDay);
        console.log('Resp of user  ', response.data);
      })
      .catch(function (error) {
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
        console.log(error);
      });
  };

  const setTableValues = (values, gridValue) => {
    setTableView(true);
    setEmpName(values.employeeName);
    setNextDay(values.nextDay);

    if (gridValue && values.nextDay) {
      const updatedRow = {
        date: values.nextDay,
        breakfast: '',
        lunch: '',
        snacks: '',
      };

      const updatedGridData = [...gridValue]; // Create a copy of the original array

      updatedGridData.push(updatedRow); // Add the updated row to the end of the array
      setGridData(updatedGridData); // Update the state with the updated grid data
      console.log('Updated grid==>', updatedGridData);
      setTableView(true);
      // console.log('Updated grid==>', updatedGridData);
    }
  };

  const handleDelete = async (index, date) => {
    const newList = gridData.filter(val => val.date !== date);
    console.log('Index', date);
    console.log('new list', newList);
    setGridData(newList);
    let deleteValue = {employeeNumber: username, date: date};
    await instance.post('/deleteDate', deleteValue);
  };
  const handleSubmit = async () => {
    console.log('Grid data ======>', gridData);
    let foodDatas = [];
    for (var i = 0; i < gridData.length; i++) {
      foodDatas[i] = {
        employeeNumber: username,
        date: gridData[i].date,
        breakfast: gridData[i].breakfast,
        lunch: gridData[i].lunch,
        snacks: gridData[i].snacks,
      };
    }
    console.log('updated food data', foodDatas);
    await instance.post('/updateFoods', foodDatas);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
    console.log('Saved successfully');
  };
  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };
  const getImage = async () => {
    await fetch('http://192.168.1.11:8080/tpfSoftware/images/Event')
      .then(response => response.blob())
      .then(data => {
        console.log('resssss', data);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImageData(reader.result);
        };
        reader.readAsDataURL(data);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  };

  return (
    <View style={styles.Hcontainer}>
      {tableView && (
        <>
          <View style={styles.navbar}>
            <Image
              style={styles.logo}
              source={require('./Images/tsi.png')}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={handleLogout}>
              <Image
                style={styles.logoutButton}
                color="black"
                source={require('./Images/logout.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <Text
              style={{color: '#02061c'}}
              onPress={() =>
                Linking.openURL(
                  'https://sway.office.com/03HtNF4d6xWA1DOk?ref=Link',
                )
              }>
              Food Menu
            </Text>
            <Text
              style={{color: '#02061c'}}
              onPress={() =>
                Linking.openURL('https://forms.office.com/r/tJcnaBaypM')
              }>
              Review
            </Text>
            <Text
              style={{color: '#02061c'}}
              onPress={() =>
                Linking.openURL('https://forms.office.com/r/XidmG2RxQu')
              }>
              Cancel
            </Text>
            <Text
              style={{color: '#02061c'}}
              onPress={() =>
                Linking.openURL(
                  'https://forms.office.com/pages/responsepage.aspx?id=phSM5KQbC0-cMgN3zzIP1fSDs3yXvURIjEljv7nda01UM1ZJS0VRWUVPNDZDNjdNRkk2NTREV09KNS4u',
                )
              }>
              Vehicle Info
            </Text>
          </View>
        </>
      )}
      {!tableView && (
        <View style={styles.logincontainer}>
          <ImageBackground
            source={logo}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.logocontainer}>
              <Image style={styles.logo} source={surflogo}></Image>
              <View style={styles.minicontainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setUsername(text)}
                  value={username}
                  placeholder="Enter your empId"
                  autoCapitalize="none"
                />
                <View style={styles.btnContainer}>
                  <Button
                    color="#b71b1b"
                    backgroundColor="#b71b1b"
                    title="Submit"
                    onPress={handleLogin}
                  />
                </View>
              </View>
              {showSuccessMsg && (
                <View style={styles.successDiv}>
                  <Text style={styles.successMsg}>
                    Employee Id is not valid
                  </Text>
                </View>
              )}
            </View>

            {/* <View style={styles.minicontainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Enter your empId"
                autoCapitalize="none"
              />

              <Button title="Submit" onPress={handleLogin} />

              {showSuccessMsg && (
                <View style={styles.successDiv}>
                  <Text style={styles.successMsg}>Emp Id is not valid</Text>
                </View>
              )}
            </View> */}
          </ImageBackground>
        </View>
      )}
      {shouldAllowBooking ? (
        tableView && (
          <View style={{margin: 20}}>
            {renderHeader()}
            <FlatList
              ListHeaderComponent={renderTableHeader}
              data={[{key: 'row1'}]}
              renderItem={() => renderTableRow()}
            />
            <Button
              color="#b71b1b"
              // style={styles.saveBtn}
              title="Save"
              onPress={handleSubmit}
            />
          </View>
        )
      ) : (
        <View style={styles.bookedMsg}>
          <Text style={styles.successMsg}>
            Booking closed for {moment(nextDay).format('DD-MMM-YY')}
          </Text>
          {gridData.length > 0 && (
            <Text style={styles.successMsg}>
              {'\n'} Last booked on {gridData[0].date}
            </Text>
          )}
        </View>
      )}

      <View style={{margin: 20}}>
        <Button
          color="#b71b1b"
          marginTop="10"
          style={styles.eventBtn}
          title="Event"
          onPress={handleShowEvent}
        />
      </View>
      {showSuccessMsg && (
        <View style={styles.successDiv}>
          <Text style={styles.successMsg}>
            {' '}
            Food booked successfully for {moment(nextDay).format(
              'DD-MMM-YY',
            )}{' '}
            !!
          </Text>

          {/* <Button title="Fetch Image" onPress={getImage} /> */}
        </View>
      )}

      {showEvent && (
        <View style={styles.successDiv}>
          <Image
            source={{uri: imageData}}
            style={{width: 400, height: 500, marginBottom: 10}}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Hcontainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },

  logincontainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  minicontainer: {
    width: 300,
    // height: 300,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    elevation: 10,
  },
  btnContainer: {
    marginTop: 13,
    marginLeft: 10,
    height: 45,
  },
  logocontainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 300,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 10,
  },
  container: {
    // fontFamily: 'ROCK',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    marginTop: 200,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width - 200,
    borderColor: '#cbd0e1',
    borderWidth: 5,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  buttonSubmit: {
    backgroundColor: '#00ff4c',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
    margin: 20,
  },
  successDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 10,
  },
  bookedMsg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 10,
    display: 'flex',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    height: 70,
    backgroundColor: '#7d2828',
  },
  headerText: {
    fontFamily: 'ROCK',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  successMsg: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  logoutButton: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    // paddingVertical: 10,
    paddingBottom: 5,
  },
  logo: {
    width: 250,
    height: 100,
    display: 'flex',
    alignItems: 'center',

    marginRight: 10, // Adjust spacing as needed
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  actionCell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  saveBtn: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },

  image: {
    height: Dimensions.get('window').height,
  },
});
export default App;
