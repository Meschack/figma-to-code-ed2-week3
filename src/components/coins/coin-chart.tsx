import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { CoinOverviewState } from './coin-overview'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#00C234'
  },
  average: {
    label: 'Price',
    color: '#00C234'
  },
  label: {
    label: 'Month',
    color: '#00C234'
  }
} satisfies ChartConfig

interface CoinChartProps {
  data: Required<CoinOverviewState['chartData']>
}

export const CoinChart = ({ data }: CoinChartProps) => {
  return (
    <ChartContainer className='p-0' config={chartConfig}>
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid />

        <XAxis
          dataKey='label'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value => value.slice(0, 3)}
        />

        <YAxis
          dataKey='average'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value => value.toLocaleString('en')}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

        <Line dataKey='average' type='linear' stroke='#00C234' strokeWidth={1.5} />
      </LineChart>
    </ChartContainer>
  )
}
