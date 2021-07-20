import axios from '../../../services/Config/axios';
import {store} from './../../../redux/store';
import { setCategories } from '../../../redux/reducers/category/actions';

export const catServices = {
  getCategoryList: async () => {
    axios.get('categories')
    .then(function (response) {
      store.dispatch(setCategories(response.data))
    })
    .catch(function (error) {

    });
  },

}