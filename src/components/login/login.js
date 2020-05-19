import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button} from 'beeshell';

const height = Dimensions.get('window').height;

export default class LoginScreen extends Component {
  state = {
    password: true,
    countdown: false,
    time: 60,
    btnDisable: false,
  };

  _handleToCAPT = () => {
    this.setState(() => {
      return {
        password: !this.state.password,
        countdown: false,
        btnDisable: false,
      };
    });
  };

  _handleClickSendCode = () => {
    this.setState(() => {
      return {
        countdown: !this.state.countdown,
        btnDisable: true,
      };
    });
    this.countdownFunc();
  };

  countdownFunc = () => {
    let timer = setInterval(() => {
      this.setState(
        {
          time: this.state.time - 1,
        },
        () => {
          if (this.state.time === 0) {
            clearInterval(timer);
            this.setState({
              time: 60,
              btnDisable: false,
              countdown: false,
            });
          }
        },
      );
    }, 1 * 1000);
  };

  render() {
    return (
      <View style={{backgroundColor: '#fff', height: height}}>
        <Text style={styles.h1Style}>登陆后更精彩</Text>
        <Text style={styles.boldStyle}>实现每个人对于家的梦</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="请输入手机号"
          keyboardType="number-pad"
        />
        {this.state.password ? (
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={true}
            placeholder="请输入密码"
          />
        ) : (
          <View style={styles.inputCodeView}>
            <TextInput
              style={styles.inputCodeStyle}
              keyboardType="number-pad"
              placeholder="请输入6位数验证码"
            />
            <Button
              style={styles.codeText}
              type="primary"
              size="sm"
              disabled={this.state.btnDisable}
              onPress={this._handleClickSendCode}>
              <Text>
                {this.state.countdown
                  ? `重新发送${this.state.time}s`
                  : '发送验证码'}
              </Text>
            </Button>
          </View>
        )}
        <Button
          type="primary"
          size="md"
          style={styles.buttonStyle}
          textStyle={{fontWeight: 'bold'}}>
          登陆
        </Button>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={this._handleToCAPT}>
            <Text style={{marginLeft: 15}}>
              {this.state.password ? '手机验证码登陆' : '密码登陆'}
            </Text>
          </TouchableOpacity>
          <Text style={{marginRight: 15}}>忘记密码</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1Style: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 10,
  },
  boldStyle: {
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
  },
  inputStyle: {
    height: 50,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#22C993',
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
  },
  bottomView: {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputCodeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputCodeStyle: {
    height: 50,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
    flex: 1,
  },
  codeText: {
    width: 130,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    marginTop: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
});
