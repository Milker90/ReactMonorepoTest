import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { HomeStackNavProps } from '@universal/common/src/navigator/types'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import './index.css'

const TestTextField = ({
  route,
  navigation,
}: HomeStackNavProps<'TestTextField'>) => {
  return (
    <View style={styles.container}>
      <form className="inputBox">
        <TextField
          fullWidth
          variant="outlined"
          autoComplete="off"
          label="Full name"
        />
        <Box m={2}></Box>
        <TextField
          label="Email Address"
          variant="outlined"
          autoComplete="off"
        />
        <Box m={2}></Box>
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          autoComplete="current-password"
        />
      </form>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({ native: { flex: 1 }, web: { height: '100vh' } }),
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
  },
})

export default TestTextField
