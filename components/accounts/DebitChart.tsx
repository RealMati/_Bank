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

export type TransactionDataType = {
  day: string;
  Debit: number;
  Credit: number;
}[];

export const transactionData: TransactionDataType = [
  { day: "Sat", Debit: 320, Credit: 420 },
  { day: "Sun", Debit: 332, Credit: 232 },
  { day: "Mon", Debit: 301, Credit: 251 },
  { day: "Tue", Debit: 334, Credit: 334 },
  { day: "Wed", Debit: 490, Credit: 390 },
  { day: "Thu", Debit: 160, Credit: 230 },
  { day: "Fri", Debit: 320, Credit: 320 },
];

const BarStat: React.FC = () => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);
  //   const { up } = useBreakpoints(); // Custom hook for breakpoints, adjust this as per your setup
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const barWidth = upMd ? 24 : upSm ? 19 : 16;
  const barSpacing = upMd ? 0.4 : upSm ? 0.2 : 0.1;

  const chartOptions: ECOption = useMemo(() => {
    const xAxisData = transactionData.map((item) => item.day);
    const DebitData = transactionData.map((item) => item.Debit);
    const CreditData = transactionData.map((item) => item.Credit);

    return {
      xAxis: {
        axisLabel: {
          padding: 10,
          baseline: "top",
          color: theme.palette.primary.light,
          fontSize: 13,
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
        left: "0%",
        top: "15%",
        right: "0%",
        bottom: "5%",
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
      legend: {
        data: [
          { name: "Debit", icon: "square" },
          { name: "Credit", icon: "square" },
        ],
        itemGap: 20,
        itemHeight: 12,
        textStyle: {
          color: theme.palette.primary.light,
        },
        right: 6,
        top: 4,
        zLevel: 10,
      },
      series: [
        {
          data: DebitData,
          type: "bar",
          stack: "1",
          name: "Debit",
          barWidth: barWidth,
          itemStyle: {
            borderRadius: 6,
          },
          color: "#1814F3",
          emphasis: {
            itemStyle: { color: theme.palette.primary.dark },
          },
          barGap: barSpacing,
          animationDuration: 500,
        },
        {
          data: CreditData,
          type: "bar",
          stack: "2",
          name: "Credit",
          barWidth: barWidth,
          itemStyle: {
            borderRadius: 7,
          },
          color: "#FFA500",
          animationDuration: 500,
        },
      ],
    };
  }, [theme, upMd, upSm]);

  return (
    <div className="pb-2">
      <EChartsReactCore
        ref={chartRef}
        echarts={echarts}
        option={chartOptions}
        notMerge={true}
        lazyUpdate={true}
        // style={{ height: "400px", width: "100%" }}
      />
    </div>
  );
};

export default BarStat;
