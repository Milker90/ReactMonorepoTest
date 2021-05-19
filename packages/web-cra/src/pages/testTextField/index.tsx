import React, { useState } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { HomeStackNavProps } from '@universal/common/src/navigator/types'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import UnFillTextField from '../../components/UnFillTextField'
import './index.css'

const TestTextField = ({
  route,
  navigation,
}: HomeStackNavProps<'TestTextField'>) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handelSubmit = (e: any) => {
    e.preventDefault()
    console.log(`1${fullName} ${email} ${password}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <UnFillTextField
          fullWidth
          name="name"
          type="text"
          label="Full Name"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setFullName(e.target.value)}
        />
        <Box m={2}></Box>
        <UnFillTextField
          fullWidth
          name="email"
          type="email"
          label="Email Address"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box m={2}></Box>
        <UnFillTextField
          fullWidth
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box m={5}></Box>
        <Button type="submit" onClick={handelSubmit}>
          Commit
        </Button>
      </View>
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
  inputBox: {
    maxWidth: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
})

export default TestTextField
