import "./form.css";

export default function Form({ addTheme }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(e.target);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);

    const primary = [data.primary, ...data]
    console.log(data);
    addTheme(data);

    e.target.reset();
    document.getElementById("color-role").focus();
  }

  return (
    <form action="" method="get" className="theme-form" onSubmit={handleSubmit}>
      <h3>Add a Theme</h3>

      <div className="entry-form-fields">
        <div className="entry-form__field">
          <label htmlFor="color-role"></label>
          <input id="color-role" type="text" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="add-color__primary"></label>
          <input id="add-color__primary" name="primary" type="color" />

          <label htmlFor="add-color__secondary"></label>
          <input id="add-color__secondary" name="secondary" type="color" />

          <label htmlFor="add-color__surface"></label>
          <input id="add-color__surface" name="surface" type="color" />

          <label htmlFor="add-color__surface-on"></label>
          <input id="add-color__surface-on" name="surface-on" type="color" />
        </div>

        <div className="entry-form__button-wrapper">
          <button id="submit" type="submit">
            Add Theme
          </button>
        </div>
      </div>
    </form>
  );
}
