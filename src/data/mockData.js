export const users = [
  {
    id: "1",
    name: "Natali Craig",
    email: "natali@example.com",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
  {
    id: "2",
    name: "Kate Morrison",
    email: "kate@example.com",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
  {
    id: "3",
    name: "Drew Cano",
    email: "drew@example.com",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
  {
    id: "4",
    name: "Orlando Diggs",
    email: "orlando@example.com",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
  {
    id: "5",
    name: "Andi Lane",
    email: "andi@example.com",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
];

export const orders = [
  {
    id: "1",
    orderId: "#CM9801",
    user: users[0],
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "2",
    orderId: "#CM9802",
    user: users[1],
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "3",
    orderId: "#CM9803",
    user: users[2],
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "4",
    orderId: "#CM9804",
    user: users[3],
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "5",
    orderId: "#CM9805",
    user: users[4],
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

export const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

export const activities = [
  {
    id: "1",
    user: users[0],
    action: "You have a bug that needs to be fixed",
    time: "Just now",
    type: "bug",
  },
  {
    id: "2",
    user: users[2],
    action: "Released a new version",
    time: "59 minutes ago",
    type: "version",
  },
  {
    id: "3",
    user: users[1],
    action: "Submitted a bug",
    time: "12 hours ago",
    type: "bug",
  },
  {
    id: "4",
    user: users[3],
    action: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    type: "data",
  },
  {
    id: "5",
    user: users[4],
    action: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    type: "page",
  },
];

export const notifications = [
  {
    id: "1",
    title: "You have a bug that needs to be fixed",
    time: "Just now",
    read: false,
    type: "bug",
  },
  {
    id: "2",
    title: "New user registered",
    time: "59 minutes ago",
    read: false,
    type: "user",
  },
  {
    id: "3",
    title: "You have a bug that needs to be fixed",
    time: "12 hours ago",
    read: false,
    type: "bug",
  },
  {
    id: "4",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    read: false,
    type: "subscription",
  },
];

export const contacts = [
  { id: "1", name: "Natali Craig", avatar: users[0].avatar },
  { id: "2", name: "Drew Cano", avatar: users[2].avatar },
  { id: "3", name: "Orlando Diggs", avatar: users[3].avatar },
  { id: "4", name: "Andi Lane", avatar: users[4].avatar },
  { id: "5", name: "Kate Morrison", avatar: users[1].avatar },
  {
    id: "6",
    name: "Koray Okumus",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1",
  },
];

export const revenueData = [
  { month: "Jan", current: 12, previous: 7 },
  { month: "Feb", current: 7, previous: 17 },
  { month: "Mar", current: 12, previous: 15 },
  { month: "Apr", current: 16, previous: 10 },
  { month: "May", current: 20, previous: 18 },
  { month: "Jun", current: 18, previous: 23 },
];

export const projectionsData = [
  { month: "Jan", actuals: 16, projections: 4 },
  { month: "Feb", actuals: 20, projections: 4 },
  { month: "Mar", actuals: 17, projections: 4 },
  { month: "Apr", actuals: 22, projections: 4 },
  { month: "May", actuals: 14, projections: 3 },
  { month: "Jun", actuals: 19, projections: 5 },
];

export const locationData = [
  { city: "New York", amount: "72K" },
  { city: "San Francisco", amount: "39K" },
  { city: "Sydney", amount: "25K" },
  { city: "Singapore", amount: "61K" },
];

export const salesData = [
  { label: "Direct", value: 300.56, percentage: 38.6, color: "#3B82F6" },
  { label: "Affiliate", value: 135.18, percentage: 22.5, color: "#8B5CF6" },
  { label: "Sponsored", value: 154.02, percentage: 29.1, color: "#10B981" },
  { label: "E-mail", value: 48.96, percentage: 9.8, color: "#F59E0B" },
];
