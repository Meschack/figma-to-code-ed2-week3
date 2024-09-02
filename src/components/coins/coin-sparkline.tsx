import { cn } from '@/lib/utils'
import { Line, LineChart, YAxis } from 'recharts'

interface CoinSparklineProps {
  data: Array<{ value: number; index: number }>
  positiveEvolution: boolean
}

export const CoinSparkline = ({ data, positiveEvolution }: CoinSparklineProps) =>
  data.length === 0 ? (
    '---'
  ) : (
    <LineChart
      width={112}
      height={32}
      data={data}
      className={cn(positiveEvolution ? 'text-tokena-green' : 'text-tokena-red', 'w-full')}
    >
      <YAxis domain={['dataMin', 'dataMax']} hide={true} tickLine={false} axisLine={false} />
      <Line type='monotone' dataKey='value' stroke='currentColor' strokeWidth={1} dot={false} />
    </LineChart>
  )
