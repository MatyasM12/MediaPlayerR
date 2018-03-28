import React from 'react';
import { View, Button, Icon, Text } from 'native-base';
import { TextInput } from 'react-native';

import styles from './style';
//todo change this with what I already have from mobile applicationa
//todo add nice styles from what I already have
export default Login = ({handleLogin, buttonDisabled}) => (
    <View style={styles.container}>
        <TextInput editable={true} value={'Username'}/>
        <TextInput editable={true} value={'Password'}/>

        <Button iconLeft
                dark
                style={styles.button}
                onPress={handleLogin}
                disabled={buttonDisabled}
        >
            <Icon name='person'/>
            <Text>Login</Text>
        </Button>
    </View>
);
