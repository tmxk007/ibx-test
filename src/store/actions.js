import webApi from '../assets/js/webApi';

export default {
	initData(context){
		webApi.get('../static/data/data.json',function(response){
			context.commit("initData",response.data);
		});
	},
	addMaterialsExpense(context) {
		context.commit("addMaterialsExpense");
	},
	addTravelExpense(context) {
		context.commit("addTravelExpense");
	}
}