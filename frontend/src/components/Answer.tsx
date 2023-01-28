import "./Answer.css";

const Answer = () => {
  const ans_arr = ["first", "Second", "Third"];

  return (
    <div className="results">
      <div className="res_ans">
        <p>All Results</p>
        <button>EDIT ANSWER</button>
      </div>
      <div className="each_ele">Question:</div>
      {ans_arr?.map((ele) => {
        return <div className="each_ele">{ele}</div>;
      })}
    </div>
  );
};

export default Answer;
