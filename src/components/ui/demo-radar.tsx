"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/radar-chart";
import { Badge } from "@/src/components/ui/badge";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function GlowingStrokeRadarChart() {
  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader className="items-center pb-4">
        <CardTitle className="flex items-center gap-2">
          Radar Chart
          <Badge
            variant="outline"
            className="text-accent bg-accent/10 border-none ml-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="ml-1">5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription className="text-white/40">
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" stroke="rgba(255,255,255,0.2)" fontSize={12} />
            <PolarGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <Radar
              name="Desktop"
              stroke="#00FF88"
              dataKey="desktop"
              fill="#00FF88"
              fillOpacity={0.2}
              strokeWidth={2}
              filter="url(#stroke-line-glow)"
            />
            <defs>
              <filter
                id="stroke-line-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
