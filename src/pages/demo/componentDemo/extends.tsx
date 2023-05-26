import React from 'react';
class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello,i am person');
  }
  componentDidMount() {
    console.log('Person componentDidMount');
  }
  eat() {
    console.log('吃饭');
  }
  sleep() {
    console.log('睡觉');
  }
  ddd() {
    console.log('打豆豆');
  }
  render(e) {
    console.log(e, 'Person render');
    return <div>我是person</div>;
  }
}

class Programmer extends Person {
  constructor(props) {
    super(props);
    console.log('hello,i am programmer');
  }
  componentDidMount() {
    console.log(this, 'Programmer componentDidMount');
  }
  code() {
    console.log('写代码');
  }
  render() {
    return (
      <div>
        <div>{super.render('888')}</div>
        <div>我是programmer</div>
      </div>
    );
  }
}
export default Programmer;
