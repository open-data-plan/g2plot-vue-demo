import { defineComponent } from "vue";
import { PieChart } from "@opd/g2plot-vue";

export default defineComponent({
  setup() {
    const data = [
      { type: "分类一", value: 27 },
      { type: "分类二", value: 25 },
      { type: "分类三", value: 18 },
      { type: "分类四", value: 15 },
      { type: "分类五", value: 10 },
      { type: "其他", value: 5 }
    ];
    const config = {
      appendPadding: 10,
      angleField: "value",
      colorField: "type",
      radius: 0.75,
      label: {
        type: "spider",
        content: "{name} {percentage} {value}"
      },
      interactions: [{ type: "element-selected" }, { type: "element-active" }]
    };

    return () => <PieChart {...config} data={data} />;
  }
});
