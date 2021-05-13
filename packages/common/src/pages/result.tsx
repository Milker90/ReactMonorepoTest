import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import {HomeStackNavProps} from '../navigator/HomeStack';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {workOutNextBusinessDay} from '../redux/actions/businessDay';
import {AppState} from '../redux/reducers/rootReducer';
import TimeLabel from '../components/TimeLabel';

const Result = ({route, navigation}: HomeStackNavProps<'Result'>) => {
  const dispatch = useDispatch();
  const {currentDate, country, state, region} = route.params;
  const {isLoading, error, nextBusinessDay, nextBusinessDayLocal} = useSelector(
    (state: AppState) => state.businessDay,
  );
  //console.log(currentDate);
  //console.log(currentDate.toISOString());

  useEffect(() => {
    dispatch(
      workOutNextBusinessDay(currentDate.toISOString(), country, state, region),
    );
  }, []);

  return (
    <>
      {isLoading && (
        <View style={[styles.container, styles.centerContent]}>
          <ActivityIndicator animating={true} />
        </View>
      )}

      {error && (
        <View style={[styles.container, styles.centerContent]}>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                workOutNextBusinessDay(
                  currentDate.toISOString(),
                  country,
                  state,
                  region,
                ),
              );
            }}>
            <Text>Network Error</Text>
          </TouchableOpacity>
        </View>
      )}

      {nextBusinessDay && nextBusinessDayLocal && (
        <View style={styles.container}>
          <TimeLabel title="UTC Time: " value={nextBusinessDay} />
          <TimeLabel title="Local Time: " value={nextBusinessDayLocal} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({native: {flex: 1}, web: {height: '100vh'}}),
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
  },
  centerContent: {justifyContent: 'center', alignItems: 'center'},
});

export default Result;
