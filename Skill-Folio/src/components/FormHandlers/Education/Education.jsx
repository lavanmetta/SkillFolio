import "../FormHandler.css";

// eslint-disable-next-line react/prop-types
export default function Education({ index, onRemoveEducation }) {
  const handleRemove = () => {
    onRemoveEducation(index);
  };
  return (
    <div className="edu">
      <div className="input-section">
        <div>
          <label htmlFor="institute">Instituation</label>
          <input id="institute" type="text" />
        </div>

        <div>
          <label htmlFor="degree">Degree</label>
          <input id="degree" type="text" />
        </div>
      </div>

      <div className="input-section">
        <div>
          <label htmlFor="date">Start & End date</label>
          <div className="se-date">
            <input id="date" type="date" />
            <input id="date" type="date" />
          </div>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
        </div>
      </div>
      <button onClick={handleRemove} id="del">
        <i className="ri-close-circle-line"></i>
      </button>
    </div>
  );
}
