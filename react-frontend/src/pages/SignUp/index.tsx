import React, { useState, useCallback, VFC } from 'react';
import axios from 'axios';
import { Form, Label, Success, Error, Input, LinkContainer, Button, Header } from './styles';
import { Link } from 'react-router-dom';
// import useInput from '../../hooks/useInput';
import useInput from '@hooks/useInput';

const SignUp = (): JSX.Element => {
  const [email, onChangeEmail] = useInput<string>('');
  const [nickname, onChangeNickname] = useInput<string>('');

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState<boolean>(false);
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);

  // const [signUpError, setSignUpError] = useState<boolean>(false);
  /**
   * @param signUpError 서버보내주는 에러메세지 처리
   */
  const [signUpError, setSignUpError] = useState<string>('');

  // const onChangeEmail = useCallback((evt) => {
  //   setEmail(evt.target.value);
  // }, []);
  // const onChangeNickname = useCallback((evt) => {
  //   setNickName(evt.target.value);
  // }, []);

  const onChangePassword = useCallback(
    (evt) => {
      setPassword(evt.target.value);
      setMismatchError(evt.target.value !== passwordCheck);
    },
    [passwordCheck],
  );
  const onChangePasswordCheck = useCallback(
    (evt) => {
      setPasswordCheck(evt.target.value);
      setMismatchError(evt.target.value !== password);
    },
    [password],
  );
  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      console.log(email, nickname, password, passwordCheck);
      if (!mismatchError) {
        console.log('서버로 회원가입 하기');

        setSignUpError('');
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
      // try { } catch (err) {

      // } finally {}
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <div id="container">
      <Header>Sleaku</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일주소</span>
          <div>
            <Input type="text" id="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {!email && <Error>이메일을 입력하지 않았습니다. </Error>}
          {!nickname && <Error>닉네임을 입력하지 않았습니다.</Error>}
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다!</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        {/* <Link to="/login">로그인하기</Link> */}
      </LinkContainer>
    </div>
  );
};

export default SignUp;

// export default function SignUp2() {
//   return (
//     <div id="container">
//       <Header>Sleaku</Header>
//       <Form onSubmit={onSubmit}>
//         <Label id="email-label">
//           <span>이메일주소</span>
//           <div>
//             <Input type="text" id="email" value={email} onChange={onChangeEmail} />
//           </div>
//         </Label>
//         <Label id="nickname-label">
//           <span>닉네임</span>
//           <div>
//             <Input type="text" id="nickname" vlaue={nickname} onChange={onChangeNickname} />
//           </div>
//         </Label>
//         <Label id="password-label">
//           <span>비밀번호</span>
//           <div>
//             <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
//           </div>
//         </Label>
//         <Label id="password-check-label">
//           <span>비밀번호 확인</span>
//           <div>
//             <Input
//               type="password"
//               id="password-check"
//               name="password-check"
//               value={passwordCheck}
//               onChange={onChangePasswordCheck}
//             />
//           </div>
//         </Label>
//         <Button type="submit">회원가입</Button>
//       </Form>
//       <LinkContainer>
//         이미 회원이신가요?&nbsp;
//         <Link to="/login">로그인하기</Link>
//       </LinkContainer>
//     </div>
//   );
// }
