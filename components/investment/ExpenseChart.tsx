"use client";
import React, { useMemo, useRef } from "react";
import { SxProps, useMediaQuery, useTheme } from "@mui/material";
import EChartsReactCore from "echarts-for-react/lib/core";
import { BarChart, BarSeriesOption } from "echarts/charts";
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TitleComponent,
  TooltipComponentOption,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LegendComponentOption } from "echarts";
// import { useBreakpoints } from "providers/useBreakpoints"; // Adjust this path as per your implementation

// Compose the ECharts option type with necessary components
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
>;

// Register necessary ECharts components
echarts.use([
  BarChart,
  LegendComponent,
  CanvasRenderer,
  GridComponent,
  TitleComponent,
]);

export const transactionData = [
  { Month: "Aug", Expense: 420 },
  { Month: "Sep", Expense: 332 },
  { Month: "Oct", Expense: 301 },
  { Month: "Nov", Expense: 334 },
  { Month: "Dec", Expense: 490 },
  { Month: "Jan", Expense: 160 },
];

const ExpenseChart: React.FC = () => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);
  //   const { up } = useBreakpoints(); // Custom hook for breakpoints, adjust this as per your setup
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const barWidth = upMd ? 24 : upSm ? 21 : 16;
  const barSpacing = upMd ? 0.3 : upSm ? 0.2 : 0.1;

  const chartOptions: ECOption = useMemo(() => {
    const xAxisData = transactionData.map((item) => item.Month);
    const ExpenseData = transactionData.map((item) => item.Expense);

    return {
      xAxis: {
        axisLabel: {
          padding: 10,
          baseline: "top",
          color: theme.palette.primary.light,
          fontSize: 15,
        },
        axisLine: { show: false },
        axisTick: { show: false },
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        axisLabel: {
          show: false,
          color: theme.palette.primary.light,
          fontSize: 15,
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: false,
          lineStyle: {
            color: theme.palette.secondary.contrastText,
          },
        },
        type: "value",
      },
      grid: {
        left: "2%",
        top: "6%",
        right: "2%",
        bottom: "6%",
        containLabel: true,
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: ${c}",
        backgroundColor: theme.palette.primary.main,
        textStyle: { color: theme.palette.secondary.contrastText },
        borderWidth: 0,
        padding: 10,
      },

      series: [
        {
          data: ExpenseData,
          type: "bar",
          stack: "1",
          name: "Expense",
          barWidth: barWidth,
          itemStyle: {
            borderRadius: 6,
          },
          color: "#CBD5E1",
          emphasis: {
            itemStyle: { color: theme.palette.primary.dark },
          },
          barGap: barSpacing,
          animationDuration: 500,
        },
      ],
    };
  }, [theme, upMd, upSm]);

  return (
    <div className="pb-4 bg-white rounded-2xl">
      <EChartsReactCore
        ref={chartRef}
        echarts={echarts}
        option={chartOptions}
        notMerge={true}
        lazyUpdate={true}
        style={{ maxHeight: "180px" }}
      />
    </div>
  );
};

export default ExpenseChart;
