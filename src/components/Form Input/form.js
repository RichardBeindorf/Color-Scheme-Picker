import "./form.css";

export default function Form({ addTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.themeName,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };
    console.log(newTheme);

    addTheme(newTheme);

    event.target.reset();
    document.getElementById("color-role").focus();
  }

  return (
    <form action="" method="get" className="theme-form" onSubmit={handleSubmit}>
      <h3>Add a Theme</h3>

      <div className="entry-form-fields">
        <div className="entry-form__field">
          <label htmlFor="color-role"></label>
          <input id="color-role" name="themeName" type="text" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="add-color__primary"></label>
          <input
            id="add-color__primary"
            className="color"
            name="primary"
            type="color"
            defaultValue="#36ABF4"
          />

          <label htmlFor="add-color__secondary"></label>
          <input
            id="add-color__secondary"
            name="secondary"
            type="color"
            defaultValue="#36ABF4"
          />

          <label htmlFor="add-color__surface"></label>
          <input
            id="add-color__surface"
            name="surface"
            type="color"
            defaultValue="#36ABF4"
          />

          <label htmlFor="add-color__surface-on"></label>
          <input
            id="add-color__surface-on"
            name="surface-on"
            type="color"
            defaultValue="#36ABF4"
          />
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
