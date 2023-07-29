import { FlatList, ImageSourcePropType } from "react-native";
import { Category as CategoryType } from "../redux/categories/categoriesSlice";
import { Category } from "./Category";
import React, { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../redux/hooks";
import { getAdvertisements } from "../redux/advertisement";
import { IMAGES } from "../config/images";
import { Loading } from "./Loading";
import { ADS } from "./Adds";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  categories: CategoryType[];
  setPostsLimit: Dispatch<SetStateAction<number>>;
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

export const CategoryList: React.FC<Props> = ({
  categories,
  setPostsLimit,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const categoryListRef = React.useRef<FlatList>(null);

  const { loading } = useAppSelector((state) => state.postsByCategory);

  // React.useEffect(() => {
  //   categoryListRef?.current?.scrollToIndex({
  //     animated: true,
  //     index: activeIndex,
  //     viewPosition: 0.5,
  //   });
  // }, [activeIndex]);

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
              setPostsLimit={setPostsLimit}
            />
          </>
        )}
        inverted
        // onScrollToIndexFailed={({ index, averageItemLength }) => {
        //   // Layout doesn't know the exact location of the requested element.
        //   // Falling back to calculating the destination manually
        //   categoryListRef.current?.scrollToOffset({
        //     offset: activeIndex,
        //     animated: false,
        //   });
        // }}
        // initialNumToRender={10}
        // ref={categoryListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SMALL_SPACING }}
      />
      {loading ? <Loading /> : null}
    </>
  );
};
