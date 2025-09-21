// User interface
export const createUser = (id, name, email, avatar) => ({
  id,
  name,
  email,
  avatar
});

// Order interface
export const createOrder = (id, orderId, user, project, address, date, status, selected = false) => ({
  id,
  orderId,
  user,
  project,
  address,
  date,
  status,
  selected
});

// Product interface
export const createProduct = (name, price, quantity, amount) => ({
  name,
  price,
  quantity,
  amount
});

// Activity interface
export const createActivity = (id, user, action, time, type) => ({
  id,
  user,
  action,
  time,
  type
});

// Notification interface
export const createNotification = (id, title, description, time, read, type) => ({
  id,
  title,
  description,
  time,
  read,
  type
});

// Contact interface
export const createContact = (id, name, avatar, isOnline = false) => ({
  id,
  name,
  avatar,
  isOnline
});