'use client'

import { Bar, Doughnut } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { BarChart3, CreditCard, DollarSign, LayoutDashboard, Settings, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Dashboard() {
  // Placeholder chart data
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgb(0, 100, 80)',
      },
      {
        label: 'Expenses',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgb(150, 200, 150)',
      },
    ],
  }

  const doughnutData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [33, 33, 34],
        backgroundColor: ['rgb(0, 100, 80)', 'rgb(150, 200, 150)', 'rgb(200, 230, 200)'],
      },
    ],
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[rgb(0,40,30)] text-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Gia</h1>
        </div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-[rgb(0,50,40)]">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-[rgb(0,50,40)]">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-[rgb(0,50,40)]">
            <DollarSign className="mr-2 h-4 w-4" />
            Transactions
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-[rgb(0,50,40)]">
            <CreditCard className="mr-2 h-4 w-4" />
            Accounts
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-[rgb(0,50,40)]">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Welcome Card */}
          <Card className="md:col-span-4 bg-gradient-to-br from-emerald-800 to-emerald-600 text-white">
            <CardHeader>
              <CardTitle>Welcome to Gia</CardTitle>
              <CardDescription className="text-white/70">
                Your business management solution
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Stats Cards */}
          <div className="md:col-span-8 grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
                <p className="text-xs text-muted-foreground">
                  +0% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  +0% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  +0% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>
                Your business metrics at a glance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Bar data={barChartData} />
            </CardContent>
          </Card>

          {/* Analysis */}
          <Card className="md:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Distribution</CardTitle>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Doughnut data={doughnutData} />
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="md:col-span-12">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No recent activity
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
