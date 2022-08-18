import React, { Component } from 'react';
import FieldContext from './FieldContext';

class Field extends Component {
  static contextType = FieldContext
  componentDidMount() {
    const { pushInstance } = this.context
    this.cancelSubscribe = pushInstance(this)
  }
  componentWillUnmount() {
    this.cancelSubscribe()
  }
  // 订阅store更新
  onStoreChange() {
    this.forceUpdate()
  }
  getControlled() {
    const { getFieldValue, setFieldValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newVal = e.target.value
        setFieldValue({
          [name]: newVal
        })
        this.forceUpdate()
      }
    }
  }
  render() {
    const { children } = this.props
    const returnChildNode = React.cloneElement(children, this.getControlled())
    return returnChildNode
  }
}

export default Field;

