import React from 'react';
import { Icon } from 'native-base';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import {login} from "../actions/login";
//todo change this with what I already have from mobile applicationa
//todo add nice styles from what I already have
// export default Login = ({handleLogin, buttonDisabled}) => (
//     <View style={styles.container}>
//         <TextInput editable={true} value={'Username'}/>
//         <TextInput editable={true} value={'Password'}/>
//
//         <Button iconLeft
//                 dark
//                 style={styles.button}
//                 onPress={handleLogin}
//                 disabled={buttonDisabled}
//         >
//             <Icon name='person'/>
//             <Text>Login</Text>
//         </Button>
//     </View>
// );

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
    }

    userLogin(e) {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }

    toggleRoute(e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({route: alt});
        e.preventDefault();
    }

    render() {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>{this.state.route}</Text>
                <TextInput
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}/>
                <TextInput
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
                <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
            </ScrollView>
        );
    }
}
    const mapStateToProps = (state, ownProps) => {
        return {
            isLoggedIn: state.login.loggedIn
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onLogin: (username, password) => {
                dispatch(login(username, password));
            },
            onSignUp: (username, password) => {
                dispatch(signup(username, password));
            }
        }
            ;
    };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
