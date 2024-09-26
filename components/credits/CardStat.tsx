"use client";
import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import EChartsReactCore from "echarts-for-react/lib/core";
import { PieChart, PieSeriesOption } from "echarts/charts";
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TooltipComponentOption,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

// Compose the ECharts option type with necessary components
export type ECOption = echarts.ComposeOption<
  PieSeriesOption | TooltipComponentOption | GridComponentOption
>;

// Register necessary ECharts components
echarts.use([PieChart, LegendComponent, CanvasRenderer, GridComponent]);

// Sample Expense Data
type ExpenseDataType = { value: number; name: string; selected: boolean }[];
const expenseData: ExpenseDataType = [
  { value: 26, name: "DBL bank", selected: true },
  { value: 23, name: "ABM bank", selected: true },
  { value: 27, name: "BRC bank", selected: true },
  { value: 24, name: "PRG bank", selected: true },
];

const CardStat = () => {
  const theme = useTheme();
  const { palette } = theme;

  // Memoize chart options for optimization
  const chartOptions: ECOption = useMemo(() => {
    return {
      backgroundColor: palette.common.white,
      tooltip: {
        trigger: "item",
      },
      color: ["#fcd34d", "#38bdf8", "#4ade80", "#fca5a5"],
      series: [
        {
          name: "Expense",
          type: "pie",
          selectedMode: "series",
          selectedOffset: 5,
          radius: "93%",
          center: ["50%", "50%"],
          roseType: "radius",
          avoidLabelOverlap: false,
          data: expenseData,
          startAngle: 45,
          label: {
            show: true,
            position: "inside",
            formatter: (params) => {
              return `{name|${params.name}}`;
            },
            rich: {
              percent: {
                fontSize: 16,
                fontWeight: "bold",
                color: palette.common.white,
              },
              name: {
                fontSize: 13,
                fontWeight: "bold",
                color: palette.common.white,
              },
            },
          },
          emphasis: {
            itemStyle: {
              borderColor: palette.common.white,
              borderWidth: 2,
            },
          },
          animationType: "expansion",
          animationEasing: "backOut",
          animationDuration: 1000,
        },
      ],
    };
  }, [palette]);

  return (
    <EChartsReactCore
      echarts={echarts}
      option={chartOptions}
      notMerge={true}
      lazyUpdate={true}
      // style={{ height: "400px", width: "100%" }}
    />
  );
};

export default CardStat;
