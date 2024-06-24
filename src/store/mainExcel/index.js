export default {
  namespace: true,
  state: {
    invioceNumer: null,
    user: {},
    company: {},
    building: {},
    startDate: "",
    endDate: "",
    lastId: 0,
    totalAmount: 0,
    items: [
      /*{
        id: 1,
        date: "14/07/1996",
        room: "91",
        type: "prueba 1",
        description: "Test 1",
        time: "20",
        amount: "600",
      },
      {
        id: 2,
        date: "01/02/2024",
        room: "122",
        type: "prueba 2",
        description: "Test 2",
        time: "10",
        amount: "300",
      },*/
    ],
  },
  mutations: {
    // Mutaciones para modificar el state del módulo principal
    setInvoiceNumber(state, newNumber) {
      state.invioceNumber = newNumber;
    },
    setUser(state, newUser) {
      state.user = newUser;
    },
    setCompany(state, newCompany) {
      state.company = newCompany;
    },
    setBuilding(state, newBuilding) {
      state.building = newBuilding;
    },
    setStartDate(state, newStartDate) {
      state.startDate = newStartDate;
    },
    setEndDate(state, newEndDate) {
      state.endDate = newEndDate;
    },
    setItems(state, newItems) {
      state.items = newItems;
    },
    SetNewItem(state, newItem) {
      const item = JSON.parse(JSON.stringify(newItem));
      if (item.id === null || item.id === undefined) {
        item.id = ++state.lastId;
        state.items.push(item);
      } else {
        const index = state.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          state.items[index] = item;
        } else {
          state.items.push(item);
        }
      }
    },
    DeleteItemKitchen(state) {
      let updatedItems = JSON.parse(JSON.stringify(state.items));
      for (let i = updatedItems.length - 1; i >= 0; i--) {
        if (updatedItems[i].type === 1) {
          updatedItems.splice(i, 1);
        }
      }
      state.items = updatedItems;
    },
    REMOVE_ITEM(state, itemId) {
      console.log(itemId);
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    CALCULATE_TOTAL(state) {
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
  },
  actions: {
    actionRemoveItemsKitchen({ commit }) {
      commit("DeleteItemKitchen");
    },
    calculateTotal({ commit }) {
      commit("CALCULATE_TOTAL");
    },
  },
  getters: {
    getInvoiceNumber: (state) => state.invioceNumber,
    getUser: (state) => state.user,
    getCompany: (state) => state.company,
    getBuilding: (state) => state.building,
    getStartDate: (state) => state.startDate,
    getEndDate: (state) => state.endDate,
    getItems: (state) => state.items,
    getTotalAmount: (state) => state.totalAmount,
  },
};
