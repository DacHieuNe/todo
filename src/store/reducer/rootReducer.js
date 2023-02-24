// Todo app with Redux
const initState = [
  { id: 1, name: "Hãy thương anh đi", author: "Match Job" },
  { id: 2, name: "Đếm ngày xa em", author: "Lou Hoàng - Only C" },
  { id: 3, name: "Mình Yêu Nhau Từ Kiếp Nào", author: "Quang Trung" },
];

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      let stateTamp = [...state, action.payload];
      return stateTamp;
    }
    case "DELETE_USER": {
      let stateTamp = state.filter((e, i) => i != action.payload);
      return stateTamp;
    }
    case "EDIT_USER": {
      let { index, value } = action.payload;
      let stateTamp = [...state];
      stateTamp[index].name = value;
      console.log(stateTamp);
      return stateTamp;
    }
    default:
      return state;
  }
};

export default rootReducer;
