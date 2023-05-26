import "./App.css";
const Child=(props)=> {

    return (
      <>
        <h1 className="second">EMPLOYEE FEEDBACK DATA</h1>
      <div className="array">
        {props.value.map((item) => {
          return (
            <h3 className="box">Name:{item.name} | Department:{item.department} | Rating:{item.rating}</h3>
          )
        })}
      </div>
      <div className="btn5">
      <button onClick={props.set}>Go Back</button>
      </div>
      </>
    )
  }

export default Child
