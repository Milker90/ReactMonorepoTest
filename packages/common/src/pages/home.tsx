import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Button, Divider, Paragraph, Dialog} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import LocationCheckBox from '../components/LocationCheckBox';
import TimeLabel from '../components/TimeLabel';
import {HomeStackNavProps} from '../navigator/HomeStack';

const Home = ({navigation}: HomeStackNavProps<'Home'>) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [datePickerVisiable, setDatePickerVisiable] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('CN');
  const [dialogVisiable, setDialogVisiable] = useState(false);
  const countries = [
    {title: 'China', country: 'CN'},
    {title: 'Australia', country: 'AU'},
  ];

  const onDatePicerDismiss = useCallback(() => {
    setDatePickerVisiable(false);
  }, [setDatePickerVisiable]);

  const onDatePicerConfirm = useCallback(
    params => {
      console.log(params);

      setDatePickerVisiable(false);
      setCurrentDate(params.date);
    },
    [setDatePickerVisiable, setCurrentDate],
  );

  const dismissDialog = () => setDialogVisiable(false);

  const onChecked = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationBox}>
        {countries.map(item => (
          <LocationCheckBox
            key={item.country}
            checked={item.country === selectedCountry}
            {...item}
            onChecked={onChecked}
          />
        ))}
      </View>
      <Divider />

      <View style={styles.topBox}>
        <TimeLabel
          title="UTC Time: "
          value={currentDate ? currentDate.toISOString() : 'None'}
        />
        <TimeLabel
          title="Local Time: "
          value={currentDate ? currentDate.toLocaleDateString() : 'None'}
        />
        <View style={styles.buttonBox}>
          <Button
            style={styles.selectDateBt}
            icon="clock-outline"
            onPress={() => setDatePickerVisiable(true)}
            uppercase={false}
            mode="text">
            Select Date
          </Button>
          <Button
            style={styles.selectDateBt}
            onPress={() => {
              if (currentDate) {
                navigation.navigate('Result', {
                  currentDate,
                  country: selectedCountry,
                });
              } else {
                setDialogVisiable(true);
              }
            }}
            uppercase={false}
            mode="text">
            Next Business Day
          </Button>
        </View>
        <DatePickerModal
          locale={'en'}
          mode="single"
          visible={datePickerVisiable}
          onDismiss={onDatePicerDismiss}
          date={currentDate}
          onConfirm={onDatePicerConfirm}
          // validRange={{
          //   startDate: new Date(2021, 1, 2),  // optional
          //   endDate: new Date(), // optional
          // }}
          // onChange={} // same props as onConfirm but triggered without confirmed by user
          // saveLabel="Save" // optional
          // label="Select date" // optional
          // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
        />
      </View>
      <Dialog visible={dialogVisiable} onDismiss={dismissDialog}>
        <Dialog.Content>
          <Paragraph>Please select date first.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={dismissDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({native: {flex: 1}, web: {height: '100vh'}}),
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
  },
  locationBox: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectDateBt: {
    marginTop: 50,
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
