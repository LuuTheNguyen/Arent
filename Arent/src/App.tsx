import { Grid, MantineProvider, Text, rem } from "@mantine/core";
import { CustomFonts } from "./component/custom_font";
import { MainLayout } from "./component/main_layout";
import MantineProviderCus from "./component/mantineProviderCus";

function App() {
  return (
    <MantineProviderCus>
      <CustomFonts />
      <MainLayout>
        <Grid>
          <Grid.Col span={12} style={{ minHeight: rem(80) }}>
            <Text>Welcome to Mantine!</Text>
          </Grid.Col>
          <Grid.Col span={3} style={{ minHeight: rem(120) }}>
            2
          </Grid.Col>
          <Grid.Col span={3}>3</Grid.Col>
        </Grid>
      </MainLayout>
    </MantineProviderCus>
  );
}

export default App;
