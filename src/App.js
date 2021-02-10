import React from "react";
import "./styles.css";
import Count from "./components/Counts";
import Button from "./components/Button";
import { connect } from "react-redux";
import { actionIncrement, actionDecrement } from "./actios/mainAction";

// React의 처음 실행 순서
// Reducer -> mapStateToProps -> Store -> mapDispatchToProps
// Reducer에서 먼저 state를 초기화 한 후 이를 mapStateToProps에 넘긴다.
// 이후 Store에 전달시켜 등록된 Component상태와 state를 저장한다.
// 이후 mapDispatchToProps를 호출해 mapDispatchToProps에서 생성한 함수를 Redux에 연결된
// Component에게 props로 전달한다.
// 따라서 App component는 Reducer의 State와 ampDispatchToProps의 함수를 자신의 prop에 받아와
// 자식 Component에게 해당 기능을 전달할 수 있게 된다.
function App(props) {
  return (
    <div className="App">
      <Count value={props.value} />
      <Button
        onClickIncrease={props.onClickIncrease}
        onClickDecrease={props.onClickDecrease}
      />
    </div>
  );
}

/* mapDispatchToProps */
// Action에서 생성한 ACtion Creator를 Dispatch 하기 위한 함수
// Action에서 생성한 Action Creator를 가져와서 사용한다.
// Action을 Dispatch하면 Action은 Reducer에게 신호를 준다.
const mapDispatchToProps = (dispatch) => ({
  onClickIncrease: () => {
    dispatch(actionIncrement());
  },
  onClickDecrease: () => {
    dispatch(actionDecrement());
  }
});

const mapStateToProps = (state) => {
  return {
    value: state.reducerCount.value
  };
};

// Component에 Redux를 연결하기 위해 Connect를 호출해야 한다.
export default connect(mapStateToProps, mapDispatchToProps)(App);
