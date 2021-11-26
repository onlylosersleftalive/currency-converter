import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Введите текст в формате '15 usd in rub'"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
