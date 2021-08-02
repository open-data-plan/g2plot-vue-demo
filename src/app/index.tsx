import { defineComponent } from "vue";
import PieChartDemo from "./pie-chart-demo";
import LineChartDemo from "./line-chart-demo";
import AreaChartDemo from "./area-chart-demo.vue";
import customThemeDemo from "./custom-theme-demo";

export default defineComponent({
  name: "App",
  components: {
    LineChartDemo,
    AreaChartDemo,
    PieChartDemo,
    customThemeDemo
  },
  render() {
    return (
      <>
        <LineChartDemo />
        <PieChartDemo />
        <AreaChartDemo />
        <customThemeDemo />
      </>
    );
  }
});
