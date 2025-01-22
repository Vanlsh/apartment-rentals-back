'use client';

import FlatList from '@/components/flat/flat-list';
import { selectFavorites } from '@/store/favorite/selectors';
import { useSelector } from 'react-redux';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  const isEmpty = favorites.length === 0;
  return isEmpty ? (
    <h2 className="text-center text-muted-foreground">
      No apartment added to favorite list
    </h2>
  ) : (
    <FlatList flats={favorites} />
  );
};

export default FavoritePage;
