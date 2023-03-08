import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyDiv,
} from './directory-item.styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyDiv>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyDiv>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
