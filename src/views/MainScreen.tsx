import { ScrollView } from "react-native";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { BreakingNews } from "../components/BreakingNews";
import { MoreWatching } from "../components/MoreWatching";
import { LastNews } from "../components/LastNews";

export const MainScreen: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Container>
          <BreakingNews />
          {/* <ADS /> */}
          <MoreWatching />
          <LastNews />
        </Container>
      </ScrollView>
    </>
  );
};
