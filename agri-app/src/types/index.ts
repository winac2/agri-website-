export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'consumer' | 'farmer';
  address?: Address;
  createdAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  farmerId: string;
  farmerName: string;
  stock: number;
  unit: string;
  rating: number;
  reviewCount: number;
  isOrganic: boolean;
  isSeasonal: boolean;
  shippingArea: string[];
  createdAt: Date;
}

export type ProductCategory = 
  | 'thực phẩm'
  | 'phụ phẩm'
  | 'thảo dược'
  | 'đồ gia dụng'
  | 'trái cây'
  | 'sản phẩm tái chế';

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: Address;
  status: OrderStatus;
  paymentMethod: string;
  createdAt: Date;
  estimatedDelivery?: Date;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
} 