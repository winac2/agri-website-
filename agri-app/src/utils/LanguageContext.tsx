import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang Chủ',
    'nav.categories': 'Danh Mục',
    'nav.contact': 'Liên Hệ',
    'nav.login': 'Đăng Nhập',
    'nav.signup': 'Đăng Ký',
    'nav.logout': 'Đăng Xuất',
    'nav.cart': 'Giỏ Hàng',
    'nav.profile': 'Hồ Sơ',
    'nav.orders': 'Đơn Hàng Của Tôi',
    
    // Categories
    'category.food': 'Thực phẩm',
    'category.dried': 'Phụ phẩm',
    'category.herbs': 'Thảo dược',
    'category.household': 'Đồ gia dụng',
    'category.fruits': 'Trái cây',
    'category.recycled': 'Sản phẩm tái chế',
    
    // Search
    'search.placeholder': 'Tìm kiếm sản phẩm...',
    'search.button': 'Tìm Kiếm',
    
    // Common
    'common.add': 'Thêm',
    'common.remove': 'Xóa',
    'common.edit': 'Sửa',
    'common.save': 'Lưu',
    'common.cancel': 'Hủy',
    'common.confirm': 'Xác nhận',
    'common.back': 'Quay lại',
    'common.next': 'Tiếp theo',
    'common.previous': 'Trước',
    'common.loading': 'Đang tải...',
    'common.error': 'Có lỗi xảy ra',
    'common.success': 'Thành công',
    
    // Product
    'product.addToCart': 'Thêm vào giỏ',
    'product.buyNow': 'Mua ngay',
    'product.outOfStock': 'Hết hàng',
    'product.inStock': 'Còn hàng',
    'product.rating': 'Đánh giá',
    'product.reviews': 'đánh giá',
    'product.organic': 'Hữu cơ',
    'product.seasonal': 'Theo mùa',
    'product.unit': 'đơn vị',
    
    // Cart
    'cart.empty': 'Giỏ hàng trống',
    'cart.total': 'Tổng cộng',
    'cart.checkout': 'Thanh toán',
    'cart.continueShopping': 'Tiếp tục mua sắm',
    
    // Auth
    'auth.email': 'Email',
    'auth.password': 'Mật khẩu',
    'auth.confirmPassword': 'Xác nhận mật khẩu',
    'auth.name': 'Họ tên',
    'auth.phone': 'Số điện thoại',
    'auth.address': 'Địa chỉ',
    'auth.forgotPassword': 'Quên mật khẩu?',
    'auth.rememberMe': 'Ghi nhớ đăng nhập',
    'auth.alreadyHaveAccount': 'Đã có tài khoản?',
    'auth.dontHaveAccount': 'Chưa có tài khoản?',
    
    // Footer
    'footer.about': 'Về chúng tôi',
    'footer.terms': 'Điều khoản',
    'footer.privacy': 'Chính sách bảo mật',
    'footer.support': 'Hỗ trợ',
    'footer.description': 'Kết nối nông dân và người tiêu dùng cho các sản phẩm nông nghiệp tươi ngon, địa phương và bền vững.',
    'footer.helpCenter': 'Trung Tâm Trợ Giúp',
    'footer.shipping': 'Thông Tin Vận Chuyển',
    'footer.returns': 'Đổi Trả',
    'footer.cookies': 'Chính Sách Cookie',
    'footer.createdForFarmers': 'Được tạo ra để hỗ trợ nông dân',
    'footer.partnerorganization': 'Đơn vị đồng hành',
    
    // Homepage
    'home.hero.title': 'Fresh from Farm to Your Table',
    'home.hero.description': 'Farm2Tech là nền tảng kết nối nông dân, hợp tác xã và người tiêu dùng thông qua công nghệ, giúp tối ưu sản xuất, phân phối và tiêu thụ nông sản. Chúng tôi mang đến giải pháp quản lý thông minh, truy xuất nguồn gốc minh bạch và kênh bán hàng trực tuyến, góp phần nâng cao giá trị nông sản Việt',
    'home.hero.buyNow': 'Mua Ngay',
    'home.hero.joinFarmer': 'Tham Gia Làm Nông Dân',
    'home.categories.title': 'Mua Sắm Theo Danh Mục',
    'home.categories.products': 'sản phẩm',
    'home.featured.title': 'Sản Phẩm Nổi Bật',
    'home.featured.viewAll': 'Xem Tất Cả',
    'home.featured.viewDetails': 'Xem Chi Tiết',
    'home.featured.by': 'by',
    'home.featured.perUnit': 'mỗi',
    'home.whyChoose.title': 'Tại Sao Chọn Nền Tảng Của Chúng Tôi?',
    'home.whyChoose.fresh.title': 'Tươi & Hữu Cơ',
    'home.whyChoose.fresh.desc': 'Tất cả sản phẩm được lấy trực tiếp từ nông dân địa phương, đảm bảo độ tươi ngon và chất lượng.',
    'home.whyChoose.delivery.title': 'Giao Hàng Nhanh',
    'home.whyChoose.delivery.desc': 'Nhận sản phẩm tươi ngon tại nhà trong vòng 24-48 giờ.',
    'home.whyChoose.farmers.title': 'Hỗ Trợ Nông Dân',
    'home.whyChoose.farmers.desc': 'Kết nối trực tiếp với nông dân đảm bảo giá cả công bằng và thực hành bền vững.',
    'home.testimonials.title': 'Khách Hàng Nói Gì Về Chúng Tôi',
    'home.testimonials.regularCustomer': 'Khách Hàng Thường Xuyên',
    'home.testimonials.localFarmer': 'Nông Dân Địa Phương',
    'home.testimonials.healthEnthusiast': 'Người Yêu Sức Khỏe',
    'home.cta.title': 'Sẵn Sàng Bắt Đầu Mua Sắm?',
    'home.cta.description': 'Tham gia cùng hàng nghìn khách hàng đang tận hưởng sản phẩm tươi ngon từ địa phương.',
    'home.cta.startNow': 'Bắt Đầu Ngay',
    'home.cta.browseProducts': 'Duyệt Sản Phẩm',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    'nav.cart': 'Cart',
    'nav.profile': 'Profile',
    'nav.orders': 'My Orders',
    
    // Categories
    'category.food': 'Food',
    'category.dried': 'Dried Products',
    'category.herbs': 'Herbs',
    'category.household': 'Household',
    'category.fruits': 'Fruits',
    'category.recycled': 'Recycled Products',
    
    // Search
    'search.placeholder': 'Search products...',
    'search.button': 'Search',
    
    // Common
    'common.add': 'Add',
    'common.remove': 'Remove',
    'common.edit': 'Edit',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    
    // Product
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.outOfStock': 'Out of Stock',
    'product.inStock': 'In Stock',
    'product.rating': 'Rating',
    'product.reviews': 'reviews',
    'product.organic': 'Organic',
    'product.seasonal': 'Seasonal',
    'product.unit': 'unit',
    
    // Cart
    'cart.empty': 'Cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.continueShopping': 'Continue Shopping',
    
    // Auth
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.name': 'Full Name',
    'auth.phone': 'Phone Number',
    'auth.address': 'Address',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.rememberMe': 'Remember me',
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.dontHaveAccount': "Don't have an account?",
    
    // Footer
    'footer.about': 'About Us',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy Policy',
    'footer.support': 'Support',
    'footer.description': 'Connecting farmers and consumers for fresh, local, and sustainable agricultural products.',
    'footer.helpCenter': 'Help Center',
    'footer.shipping': 'Shipping Information',
    'footer.returns': 'Returns',
    'footer.cookies': 'Cookie Policy',
    'footer.createdForFarmers': 'Created to support farmers',
    'footer.partnerorganization': 'Partner Organization',
    
    // Homepage
    'home.hero.title': 'Fresh from Farm to Your Table',
    'home.hero.description': 'Farm2Tech is a platform connecting farmers, cooperatives, and consumers through technology, helping optimize production, distribution, and consumption of agricultural products. We provide smart management solutions, transparent traceability, and online sales channels, contributing to enhancing the value of Vietnamese agricultural products.',
    'home.hero.buyNow': 'Buy Now',
    'home.hero.joinFarmer': 'Join as Farmer',
    'home.categories.title': 'Shop by Category',
    'home.categories.products': 'products',
    'home.featured.title': 'Featured Products',
    'home.featured.viewAll': 'View All',
    'home.featured.viewDetails': 'View Details',
    'home.featured.by': 'by',
    'home.featured.perUnit': 'per',
    'home.whyChoose.title': 'Why Choose Our Platform?',
    'home.whyChoose.fresh.title': 'Fresh & Organic',
    'home.whyChoose.fresh.desc': 'All products are sourced directly from local farmers, ensuring freshness and quality.',
    'home.whyChoose.delivery.title': 'Fast Delivery',
    'home.whyChoose.delivery.desc': 'Receive fresh products at home within 24-48 hours.',
    'home.whyChoose.farmers.title': 'Support Farmers',
    'home.whyChoose.farmers.desc': 'Direct connection with farmers ensures fair pricing and sustainable practices.',
    'home.testimonials.title': 'What Our Customers Say',
    'home.testimonials.regularCustomer': 'Regular Customer',
    'home.testimonials.localFarmer': 'Local Farmer',
    'home.testimonials.healthEnthusiast': 'Health Enthusiast',
    'home.cta.title': 'Ready to Start Shopping?',
    'home.cta.description': 'Join thousands of customers enjoying fresh local products.',
    'home.cta.startNow': 'Start Now',
    'home.cta.browseProducts': 'Browse Products',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
