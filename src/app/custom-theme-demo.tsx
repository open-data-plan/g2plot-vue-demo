import { defineComponent } from "vue";
import { PieChart } from "@opd/g2plot-vue";
import { G2 } from "@antv/g2plot";

G2.registerTheme("custom", {
  colors10: [
    "#025DF4",
    "#DB6BCF",
    "#2498D1",
    "#BBBDE6",
    "#4045B2",
    "#21A97A",
    "#FF745A",
    "#007E99",
    "#FFA8A8",
    "#2391FF"
  ],
  colors20: [
    "#025DF4",
    "#DB6BCF",
    "#2498D1",
    "#BBBDE6",
    "#4045B2",
    "#21A97A",
    "#FF745A",
    "#007E99",
    "#FFA8A8",
    "#2391FF",
    "#FFC328",
    "#A0DC2C",
    "#946DFF",
    "#626681",
    "#EB4185",
    "#CD8150",
    "#36BCCB",
    "#327039",
    "#803488",
    "#83BC99"
  ]
});

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
      theme: "custom",
      interactions: [{ type: "element-selected" }, { type: "element-active" }]
    };

    return () => <PieChart {...config} data={data} />;
  }
});
