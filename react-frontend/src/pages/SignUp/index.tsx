import React, { useState, useCallback, VFC } from 'react';
import { Form, Label, Error, Input, LinkContainer, Button, Header } from './styles';
import { Link } from 'react-router-dom';

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState<boolean>(false);

  const onChangeEmail = useCallback((evt) => {
    setEmail(evt.target.value);
  }, []);
  const onChangeNickName = useCallback((evt) => {
    setNickName(evt.target.value);
  }, []);
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
      console.log(email, nickName, password, passwordCheck);
      if (!mismatchError) {
        console.log('서버로 회원가입 하기');
      }
    },
    [email, nickName, password, passwordCheck, mismatchError],
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
            <Input type="text" id="nickname" value={nickName} onChange={onChangeNickName} />
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
          {!nickName && <Error>닉네임을 입력하지 않았습니다.</Error>}
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
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
//             <Input type="text" id="nickname" vlaue={nickName} onChange={onChangeNickName} />
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