import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from './../../redux/reducers';
import {
  useParams
} from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import { imageServices } from './../../services/api/images';
import Image from '../../components/common/Image/Image';

function SingleCategoryPage() {
  const [categoryId] = useParams()['id'];
  const images = useSelector((state: RootState) => state.images.list);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [page])

  useEffect(() => {
    if(page) setPage(0);
    else fetchImages();
  }, [categoryId])

  const fetchImages = () => {
    imageServices.getImagesList(categoryId, page);
  }

  return (
    <div className="images__container--area">
      <div className="images__content">
      {
        images && images.map((image, index) => {
          return <Image key={index} src={image.url} alt="" width={300} height={300} />
        })
      }
      </div>
      <div className="images__loadMore">
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    </div>
  );
}

export default SingleCategoryPage;
