import Utils from "../assets/js/utils";

function sum(data){
	return Utils.sum(data.TravelExpense) + Utils.sum(data.MaterialsExpense);
}

export default {
	subtotalTravelExpense(state) {
		return Utils.sum(state.data.TravelExpense);
	},
	subtotalMaterialsExpense(state) {
		return Utils.sum(state.data.MaterialsExpense);
	},
	max(state){
		var maxTravelExpense = Utils.max(state.data.TravelExpense);
		var maxMaterialsExpense = Utils.max(state.data.MaterialsExpense);
		return maxTravelExpense > maxMaterialsExpense ? maxTravelExpense : maxMaterialsExpense;
	},
	min(state){
		var minTravelExpense = Utils.min(state.data.TravelExpense);
		var minMaterialsExpense = Utils.min(state.data.MaterialsExpense);
		return minTravelExpense < minMaterialsExpense ? minTravelExpense : minMaterialsExpense;
	},
	sum(state){
		return sum(state.data);
	},
	average(state){
		return sum(state.data) / (state.data.TravelExpense.length + state.data.MaterialsExpense.length);
	}
}