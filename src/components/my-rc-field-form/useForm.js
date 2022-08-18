import { useRef } from 'react'

// 定义状态管理库
class FormStore {
  constructor() {
    this.store = {} // fieldName: value
    this.fieldInstances = []
    this.callbacks = {}
  }
  getFieldValue = (name) => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return { ...this.store }
  }
  setCallbacks = (newCallbacks) => {
    this.callbacks = Object.assign(this.callbacks, newCallbacks)
  }
  validate = () => {
    const err = []
    return err
  }
  submit = () => {
    const err = this.validate()
    const { onFinish, onFinishFailed } = this.callbacks
    if (err.length) {
      // 验证不通过
      onFinishFailed(err)
    } else {
      // 验证通过
      onFinish(this.getFieldsValue())
    }
  }
  setFieldValue = (newStore) => {
    // 1 更新store
    this.store = Object.assign(this.store, newStore)
    // 2 更新Field组件
    this.fieldInstances.forEach(instance => {
      if (instance.props.name in newStore) {
        instance.onStoreChange()
      }
    })
  }
  pushInstance = (instance) => {
    // 注册实例
    this.fieldInstances.push(instance)
    // 取消注册
    return () => {
      this.fieldInstances = this.fieldInstances.filter(ins => ins !== instance)
      delete this.store[instance.props.name]
    }
  }
}

export default function useForm() {
  const formRef = useRef()
  if (!formRef.current) {
    formRef.current = new FormStore()
  }
  return [formRef.current]
}
