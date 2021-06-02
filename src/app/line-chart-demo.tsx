import { defineComponent, reactive, Ref, ref, watch } from "vue";
import { LineChart } from "@opd/g2plot-vue";
import { Plot, LineOptions } from "@antv/g2plot";

export default defineComponent(() => {
  const chartRef = ref<Plot<LineOptions> | null>(null);

  const config = reactive({
    height: 350,
    autoFit: true,
    xField: "year",
    yField: "value",
    smooth: true,
    data: [
      { year: "1991", value: 3 },
      { year: "1992", value: 4 },
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 11 }
    ]
  });

  const handleConfigChangeClick = () => {
    console.log(chartRef.value);
    config.smooth = !config.smooth;
  };

  const handleDataChangeClick = () => {
    const { data } = config;
    data.push({
      year: (+data[data.length - 1].year + 1).toString(),
      value: 10 + +(Math.random() * 10).toFixed(0)
    });
    config.data = [...data];
  };

  watch(chartRef, () => {
    chartRef.value?.on("click", (e: any) => {
      console.log(e);
    });
  });

  return () => {
    return (
      <div>
        <button onClick={handleConfigChangeClick}>change config</button>
        <button onClick={handleDataChangeClick}>change data</button>
        <LineChart {...config} chartRef={chartRef as Ref<Plot<LineOptions>>} />
      </div>
    );
  };
});
