import { getAdvertisements } from "../redux/advertisement";
import { useAppSelector } from "../redux/hooks";
import { ADS } from "./Adds";
import { Loading } from "./Loading";

export const NewsListHeader = () => {
  const { loading: advertisementLoading, advertisement } =
    useAppSelector(getAdvertisements);

  return advertisementLoading ? (
    <Loading />
  ) : advertisement?.position_1 ? (
    <ADS
      adsImageSource={{
        uri: advertisement?.position_7,
      }}
    />
  ) : null;
};
