"use client";
import React, { useMemo } from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import EChartsReactCore from "echarts-for-react/lib/core";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const YearlyChart = () => {
  const chartOptions = useMemo(() => {
    return {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 180, 260, 135, 147, 260],
          type: "line",
        },
      ],
    };
  }, []);

  return (
    <div className="w-full">
      <EChartsReactCore
        echarts={echarts}
        option={chartOptions}
        notMerge={true}
        lazyUpdate={true}
        // style={{ height: "300px", width: "100%" }}
      />
    </div>
  );
};

export default YearlyChart;
