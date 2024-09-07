import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Package, ShoppingCart, Users } from "lucide-react";

function AdminDashboard() {
  const totalSales = 12400;
  const totalOrders = 120;
  const totalUsers = 350;
  const totalProducts = 75;

  const recentOrders = [
    { id: 1, customer: "John Doe", total: "$250.00", status: "Completed" },
    { id: 2, customer: "Jane Smith", total: "$180.00", status: "Pending" },
    { id: 3, customer: "Michael Brown", total: "$120.00", status: "Shipped" },
  ];

  return (
    <div className="p-6">
      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="flex flex-row items-center justify-between p-6">
          <div>
            <h3 className="text-xl font-bold">Total Sales</h3>
            <p className="text-lg font-semibold">${totalSales}</p>
          </div>
          <BarChart2 className="w-8 h-8 text-blue-500" />
        </Card>

        <Card className="flex flex-row items-center justify-between p-6">
          <div>
            <h3 className="text-xl font-bold">Orders</h3>
            <p className="text-lg font-semibold">{totalOrders}</p>
          </div>
          <ShoppingCart className="w-8 h-8 text-green-500" />
        </Card>

        <Card className="flex flex-row items-center justify-between p-6">
          <div>
            <h3 className="text-xl font-bold">Users</h3>
            <p className="text-lg font-semibold">{totalUsers}</p>
          </div>
          <Users className="w-8 h-8 text-yellow-500" />
        </Card>

        <Card className="flex flex-row items-center justify-between p-6">
          <div>
            <h3 className="text-xl font-bold">Products</h3>
            <p className="text-lg font-semibold">{totalProducts}</p>
          </div>
          <Package className="w-8 h-8 text-red-500" />
        </Card>
      </div>

      {/* Recent Orders Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sales Analytics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sales Analytics</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-center text-gray-500">[Chart Placeholder]</p>
          {/* You can integrate any charting library such as Chart.js or Recharts here */}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end">
        <Button className="bg-blue-500 text-white">Add New Product</Button>
      </div>
    </div>
  );
}

export default AdminDashboard;
