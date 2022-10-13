export const save = (data) => {
  return {
    type: "SAVE",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const delete_cards = (id) => {
  return {
    type: "DELETE_CARDS",
    id,
  };
};

export const Delete_all_card = (data) => {
  return {
    type: "DELETE_ALL_CARDS",
    payload: {
      data: data,
    },
  };
};
