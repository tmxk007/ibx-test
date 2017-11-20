export default {
	initData(state,data){
		state.data = data;
	},
	addMaterialsExpense(state) {
		var data=state.data.MaterialsExpense;
		data.push({
			type: '',
			value: 0
		})
	},
	addTravelExpense(state) {
		var data=state.data.TravelExpense;
		data.push({
			type: '',
			value: 0
		})
	}
}