import React from "react";
import { BreakingNews } from "./BreakingNews";
import { MoreWatching } from "./MoreWatching";
import { ContentHeader } from "./ContentHeader";
import { IMAGES } from "../config/images";

export const HomeListHeader: React.FC = () => {
  return (
    <>
      <BreakingNews />
      <MoreWatching />
      <ContentHeader text="آخر الأخبار" imageSource={IMAGES.lastNews} />
    </>
  );
};
