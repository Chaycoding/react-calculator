import React from "react";

function Test() {

  const [state, UpState] = React.useState({
    num1: Math.round(Math.random()*10),
    num2: Math.round(Math.random()*10),
    response: "",
    wins: 0,
    loses: 0,
    incorrect: false
  });


  function checkevent(event){
    
    if(event.key === 'Enter'){
      const ans = parseInt(state.response)
      if(state.wins === 9){
        UpState({...state, num1: "YOU", num2: "WIN!"})
      }
      else if(state.num1 + state.num2 === ans){
       UpState({...state, response: "", wins: state.wins + 1,num1: Math.round(Math.random()*10),
        num2: Math.round(Math.random()*10), incorrect: false});
        }else{
          UpState({...state, loses: state.loses + 1, incorrect: true});
        }
    }
  }

  function updateResponse(event){
    UpState({
      ...state,
      response: event.target.value
    });
  }

  return (
    <div className="MainDiv ">
      <h1 className={state.incorrect ? "incorrect" : ""} id="numz">{state.num1} + {state.num2}</h1>
      <input autoFocus={true} onKeyPress={checkevent} onChange={updateResponse} value={state.response} placeholder="Your answer"></input>
      <h1>Score: {state.wins}</h1>
      <h1>Losses: {state.loses}</h1>
    </div>
  );
}

export default Test;
