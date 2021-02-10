import { combineReducers } from "redux";
import { INCREMENT, DECREMENT } from "../actios/mainAction";

const initState = {
  value: 0,
  diff: 1
};

// Redux에 대한 기본 State는 Reducer에서 초기화 시킨다.
// 이후 reducerCount에서 지속적으로 갱신한다.
// Action이 Dispatch되면 Reducer에게 처리가 넘어온다.
// Dispatch로 넘어온 actions의 Type에 따라 분기해 처리를 다르게 만든다.
/* 리듀서 */
const reducerCount = (state = initState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return (state = {
        ...state,
        value: state.value + state.diff
      });
    case DECREMENT:
      return (state = {
        ...state,
        value: state.value - state.diff
      });
    default:
      return state;
  }
};

// combinReducers는 여러개의 Reducer를 병합해 Store에 전달할 수 있다.
export const reducer = combineReducers({
  reducerCount
});
