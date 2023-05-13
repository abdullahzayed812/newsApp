import { ScrollView, Text } from "react-native";
import { Header } from "../../components/global/header";
import { Container } from "../../components/global/container";
import { BreakingNews } from "../../components/global/breakingNews";
import { ADS } from "../../components/global/ads";
import { MoreWatching } from "../../components/global/moreWatching";
import { LastNews } from "../../components/global/lastNews";

export const MainScreen: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Container>
          <BreakingNews />
          <ADS />
          <MoreWatching />
          <LastNews />
        </Container>
      </ScrollView>
    </>
  );
};
