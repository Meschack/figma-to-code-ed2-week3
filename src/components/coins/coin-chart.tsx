import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { CoinOverviewState } from './coin-overview'

const chartConfig = {
  average: {
    label: 'Price',
    color: 'var(--tokena-green)'
  },

  label: {
    label: 'Month',
    color: 'var(--tokena-green)'
  }
} satisfies ChartConfig

interface CoinChartProps {
  data: Required<CoinOverviewState['chartData']>
  currency: string
}

const CustomizedLegend = () => (
  <div className='ms-14 mt-4 flex items-center gap-2'>
    <div className='h-2 w-8 bg-tokena-green'></div>
    <span className='text-xs text-tokena-dark-gray'>Price</span>
  </div>
)

export const CoinChart = ({ data, currency }: CoinChartProps) => {
  const maxValue = Math.max(...data!.map(item => item.average))
  const minValue = Math.min(...data!.map(item => item.average))
  const range = maxValue - minValue
  const tickCount = 4

  return (
    <ChartContainer config={chartConfig}>
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid />

        <XAxis dataKey='label' tickLine={false} axisLine={false} tickMargin={8} />

        <YAxis
          dataKey='average'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value =>
            (value as number).toLocaleString('en', { currency, maximumFractionDigits: 2 })
          }
          domain={[minValue, maxValue]}
          ticks={[minValue, minValue + range / 3, minValue + (2 * range) / 3, maxValue]}
          tickCount={tickCount}
          tickSize={-2}
        />

        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              className='w-fit'
              formatter={(value, name) => (
                <>
                  <span className='font-medium capitalize text-tokena-dark dark:text-tokena-dark-gray'>
                    {name}
                  </span>
                  <span className='font-semibold uppercase text-tokena-dark dark:text-tokena-light-gray'>
                    {currency} {value.toLocaleString('en')}
                  </span>
                </>
              )}
              hideLabel
            />
          }
        />

        <Line
          dataKey='average'
          type='linear'
          stroke='var(--tokena-green)'
          strokeWidth={1.5}
          name='Price'
        />

        <Legend content={<CustomizedLegend />} />
      </LineChart>
    </ChartContainer>
  )
}
