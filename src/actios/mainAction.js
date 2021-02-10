export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// action의 구조는 type이 기본적으로 붙는다.
// 이후 추가적으로 key를 설정해 추가 인자를 받을 수 있따.

/* 액션 생성 함수 */
export const actionIncrement = () => {
  return {
    type: INCREMENT
  };
};

export const actionDecrement = () => {
  return {
    type: DECREMENT
  };
};
