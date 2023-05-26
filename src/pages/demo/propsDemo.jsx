import React from 'react';
export default () => {
  const form = React.useRef(null);
  const submit = () => {
    /* 表单提交 */
    console.log(form);
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };
  const reset = () => {
    /* 表单重置 */
    form.current.resetForm();
  };
  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input />
        </FormItem>
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="concellbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
};
class Form extends React.Component {
  state = { formData: {} };
  submitForm = (callback) => {
    callback(this.state.formData);
  };
  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach((item) => {
      formData[item] = '';
    });
    this.setState({ formData });
  };
  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };
  render() {
    const { children } = this.props;
    const renderChildren = [];
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props;
        const Children = React.cloneElement(
          child,
          {
            key: name,
            handleChange: this.setValue,
            value: this.state.formData[name] || '',
          },
          child.props.children,
        );
        renderChildren.push(Children);
      }
    });
    return renderChildren;
  }
}
Form.displayName = 'form';

function FormItem(props) {
  const { label, children, name, handleChange, value } = props;
  const onChange = (val) => {
    handleChange(name, val);
  };
  return (
    <div className="form">
      <span className="label">{label}:</span>
      {React.isValidElement(children) && children.type.displayName === 'input'
        ? React.cloneElement(children, { onChange, value })
        : null}
    </div>
  );
}
FormItem.displayName = 'formItem';

/* Input 组件, 负责回传value值 */
function Input({ onChange, value }) {
  return (
    <input
      className="input"
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
    />
  );
}
/* 给Component 增加标签 */
Input.displayName = 'input';
