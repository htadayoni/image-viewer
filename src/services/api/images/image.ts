import axios from '../../../services/Config/axios';
import {store} from './../../../redux/store';
import { setImages, resetImages } from '../../../redux/reducers/images/actions';

export const imgServices = {
  getImagesList: async (category_id: number, pg: number) => {
      if(pg === 0) store.dispatch(resetImages())
      await axios.get(`images/search?limit=10&category_ids=${category_id}&pg=${pg}`)
      .then(function (response) {
        store.dispatch(setImages(response.data))
      })
      .catch(function (error) {

      });
  },

}