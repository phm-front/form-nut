import FieldContext from "./FieldContext";
export default function Form({ children, form, onFinish, onFinishFailed }) {
  form.setCallbacks({
    onFinish,
    onFinishFailed
  })
  const submit = (e) => {
    e.preventDefault()
    form.submit()
  }
  return (
    <form onSubmit={submit}>
      <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
    </form>
  );
}
