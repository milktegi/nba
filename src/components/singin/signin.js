import React, { Component } from 'react';
import styles from './signin.css';
import FormField from '../widgets/FormFields/formfields';

class SignIn extends Component {
  state = {
    registerError: '',
    loading: false,
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    // 기존 상태 카피
    const newFormdata = {
      ...this.state.formdata
    };
    // 유저 상태 카피
    const newElement = {
      ...newFormdata[element.id]
    };
    // 유저 상태의 value 속성에
    // 유저입력값을 저장
    newElement.value = element.event.target.value;

   
    if (element.blur) {
      let validData = this.validate(newElement);
      // console.log(validData);
			newElement.valid = validData[0];
			newElement.validationMessage = validData[1];
    }
		 // 해당 유저에
    // 업데이트 엘리먼트를 대입
		newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    // 상태 업데이트
    this.setState({
      formdata: newFormdata
    });
  };

  validate = element => {
    let error = [true, ''];

		if (element.validation.email) {
      const valid = /\S+@\S+\.\S+/.test(element.value)
      const message = ` ${!valid ? '유효한 이메일을' : ''}
			`;
      error = !valid ? [valid, message] : error;
    }

    if (element.validation.password) {
      const valid = element.value.length >= 5;
      const message = ` ${!valid ? '5자 이상 입력ㄱㄱ' : ''}
			`;
      error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = ` ${!valid ? '바르게 입력해줘 ㅇㅇ' : ''}
			`;
      error = !valid ? [valid, message] : error;
    }
    return error;
  };

  render() {
    return (
      <div className={styles.logContainer}>
        <form>
          <h2>회원가입 / 로그인 </h2>
          <FormField
            id={'email'}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={'password'}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
