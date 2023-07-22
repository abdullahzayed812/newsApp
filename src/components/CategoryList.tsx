import { FlatList, ImageSourcePropType } from "react-native";
import { Category as CategoryType } from "../redux/categories/categoriesSlice";
import { Category } from "./Category";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getAdvertisements } from "../redux/advertisement";
import { IMAGES } from "../config/images";
import { Loading } from "./Loading";
import { ADS } from "./Adds";

interface Props {
  categories: CategoryType[];
}

const CATEGORY_IMAGE: ImageSourcePropType[] = [
  IMAGES.ball,
  IMAGES.note,
  IMAGES.share,
  IMAGES.ball,
  IMAGES.note,
  IMAGES.share,
  IMAGES.ball,
  IMAGES.note,
];

export const CategoryList: React.FC<Props> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const categoryListRef = React.useRef<FlatList>(null);

  const { loading: advertisementLoading, advertisement } =
    useAppSelector(getAdvertisements);

  const { loading } = useAppSelector((state) => state.postsByCategory);

  React.useEffect(() => {
    categoryListRef?.current?.scrollToIndex({
      animated: true,
      index: activeIndex,
      viewPosition: 0.5,
    });
  }, [activeIndex]);

  return (
    <>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <>
            <Category
              categoryID={item.id}
              index={index}
              key={`${item.id}-${item.key}`}
              text={item.name}
              imageSource={CATEGORY_IMAGE[index]}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </>
        )}
        onScrollToIndexFailed={({ index, averageItemLength }) => {
          // Layout doesn't know the exact location of the requested element.
          // Falling back to calculating the destination manually
          categoryListRef.current?.scrollToOffset({
            offset: activeIndex,
            animated: false,
          });
        }}
        initialNumToRender={10}
        ref={categoryListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {advertisementLoading ? (
        <Loading />
      ) : advertisement?.position_1 ? (
        <ADS
          adsImageSource={{
            uri: advertisement?.position_7,
          }}
        />
      ) : null}
      {loading ? <Loading /> : null}
    </>
  );
};
