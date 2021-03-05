import { defineComponent } from "vue";
import PieChartDemo from "./pie-chart-demo";
import LineChartDemo from "./line-chart-demo";
import AreaChartDemo from "./area-chart-demo.vue";

export default defineComponent({
  name: "App",
  components: {
    LineChartDemo,
    AreaChartDemo,
    PieChartDemo
  },
  render() {
    return (
      <>
        <LineChartDemo />
        <PieChartDemo />
        <AreaChartDemo />
      </>
    );
  }
});
