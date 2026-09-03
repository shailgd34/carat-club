import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Camera, User, X } from 'lucide-react';

export default function AccountPage() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'saved', label: 'Saved Items', icon: Heart },
    { id: 'address', label: 'Address Book', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-8 pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Breadcrumb */}
        <div className="text-[10px] uppercase tracking-widest text-brand-taupe mb-8">
          <Link to="/" className="hover:text-brand-charcoal">Home</Link> / My Account
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">

          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0 sticky top-8">
            <div className="bg-white border border-brand-light-border p-6 mb-4 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAF8F5] rounded-full border border-brand-light-border mb-4 flex items-center justify-center overflow-hidden">
                <User className="w-8 h-8 text-[#EBEBEB]" />
              </div>
              <h1 className="font-serif text-xl text-brand-charcoal mb-1">Sarah Jenkins</h1>
              <p className="text-xs text-brand-taupe">sarah.jenkins@example.com</p>
            </div>

            <nav className="bg-white border border-brand-light-border flex flex-col">
              {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 px-6 py-4 text-[12px] font-bold tracking-widest uppercase transition-colors text-left border-b border-brand-light-border last:border-b-0 border-l-2 ${isActive ? 'text-brand-charcoal bg-gray-50 border-l-[#ff5474]' : 'text-brand-taupe hover:text-brand-charcoal hover:bg-gray-50 border-l-transparent hover:border-l-[#ff5474]'}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                    <ChevronRight className={`w-4 h-4 ml-auto ${isActive ? 'text-brand-charcoal' : 'text-gray-300'}`} />
                  </button>
                );
              })}
              <button onClick={() => setShowLogoutModal(true)} className="flex items-center gap-3 px-6 py-4 text-[12px] font-bold tracking-widest uppercase text-brand-taupe hover:text-brand-charcoal hover:bg-gray-50 transition-colors text-left border-l-2 border-l-transparent hover:border-l-[#ff5474]">
                <LogOut className="w-4 h-4 shrink-0" />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Main Content Area - Tabbed View */}
          <div className="flex-1 w-full overflow-hidden">

            {/* Dashboard Section */}
            {activeTab === 'dashboard' && (
              <section id="dashboard" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <div className="space-y-8">
                  <h2 className="font-serif text-2xl text-brand-charcoal">Welcome back, Sarah!</h2>
                  <p className="text-sm text-brand-taupe">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#FAF8F5] p-6 border border-brand-light-border text-center flex flex-col items-center">
                      <Package className="w-8 h-8 text-[#ff5474] mb-3" />
                      <h3 className="font-bold text-sm text-brand-charcoal mb-1">Recent Orders</h3>
                      <p className="text-xs text-brand-taupe mb-4">You have 1 recent order</p>
                      <button onClick={() => setActiveTab('orders')} className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal underline hover:text-[#ff5474]">View Orders</button>
                    </div>
                    <div className="bg-[#FAF8F5] p-6 border border-brand-light-border text-center flex flex-col items-center">
                      <Heart className="w-8 h-8 text-[#ff5474] mb-3" />
                      <h3 className="font-bold text-sm text-brand-charcoal mb-1">Saved Items</h3>
                      <p className="text-xs text-brand-taupe mb-4">3 items in your wishlist</p>
                      <button onClick={() => setActiveTab('saved')} className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal underline hover:text-[#ff5474]">View Wishlist</button>
                    </div>
                    <div className="bg-[#FAF8F5] p-6 border border-brand-light-border text-center flex flex-col items-center">
                      <MapPin className="w-8 h-8 text-[#ff5474] mb-3" />
                      <h3 className="font-bold text-sm text-brand-charcoal mb-1">Addresses</h3>
                      <p className="text-xs text-brand-taupe mb-4">Manage shipping details</p>
                      <button onClick={() => setActiveTab('address')} className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal underline hover:text-[#ff5474]">Edit Addresses</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Orders Section */}
            {activeTab === 'orders' && (
              <section id="orders" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <h2 className="font-serif text-2xl text-brand-charcoal mb-6">My Orders</h2>
                <div className="border border-brand-light-border rounded overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="text-[10px] uppercase tracking-wider text-brand-charcoal bg-gray-50 border-b border-brand-light-border">
                      <tr>
                        <th className="px-6 py-4 font-bold">Order ID</th>
                        <th className="px-6 py-4 font-bold">Date</th>
                        <th className="px-6 py-4 font-bold">Status</th>
                        <th className="px-6 py-4 font-bold">Total</th>
                        <th className="px-6 py-4 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">#ORD-99382</td>
                        <td className="px-6 py-4 text-brand-taupe">Oct 12, 2026</td>
                        <td className="px-6 py-4"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Processing</span></td>
                        <td className="px-6 py-4 font-serif">$2,890.00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal border border-brand-charcoal px-3 py-1 hover:bg-brand-charcoal hover:text-white transition-colors">
                            Track
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">#ORD-88211</td>
                        <td className="px-6 py-4 text-brand-taupe">Aug 05, 2025</td>
                        <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Delivered</span></td>
                        <td className="px-6 py-4 font-serif">$853.00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal border border-brand-charcoal px-3 py-1 hover:bg-brand-charcoal hover:text-white transition-colors">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Saved Items Section */}
            {activeTab === 'saved' && (
              <section id="saved" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Saved Items</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="bg-[#FAF8F5] border border-brand-light-border p-4 flex gap-4">
                    <div className="w-24 h-24 bg-white border border-brand-light-border flex items-center justify-center shrink-0">
                      <img src="/images/rings/ring (14).webp" alt="Ring" className="w-16 h-16 object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="font-bold text-[13px] text-brand-charcoal mb-1">Classic Solitaire Round Brilliant</h4>
                      <p className="text-xs text-brand-taupe mb-2">18K Yellow Gold</p>
                      <div className="font-serif font-bold text-brand-charcoal mb-auto">$2,890</div>
                      <div className="flex gap-2 mt-2">
                        <button className="flex-1 bg-brand-charcoal text-white text-[9px] font-bold uppercase tracking-wider py-2 hover:bg-black transition-colors">Move to Cart</button>
                        <button className="text-xs text-brand-taupe underline hover:text-red-500">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FAF8F5] border border-brand-light-border p-4 flex gap-4">
                    <div className="w-24 h-24 bg-white border border-brand-light-border flex items-center justify-center shrink-0">
                      <img src="/images/diamond/Oval.png" alt="Diamond" className="w-16 h-16 object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="font-bold text-[13px] text-brand-charcoal mb-1">1.20 Carat Oval Diamond</h4>
                      <p className="text-xs text-brand-taupe mb-2">E Color • VS2 Clarity</p>
                      <div className="font-serif font-bold text-brand-charcoal mb-auto">$1,250</div>
                      <div className="flex gap-2 mt-2">
                        <button className="flex-1 bg-brand-charcoal text-white text-[9px] font-bold uppercase tracking-wider py-2 hover:bg-black transition-colors">Move to Cart</button>
                        <button className="text-xs text-brand-taupe underline hover:text-red-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Address Book Section */}
            {activeTab === 'address' && (
              <section id="address" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="font-serif text-2xl text-brand-charcoal">Address Book</h2>
                  <button className="bg-brand-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 hover:bg-black transition-colors">Add New Address</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#FAF8F5] border border-brand-light-border p-6 relative">
                    <span className="absolute top-0 right-0 bg-[#ff5474] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">Default Shipping</span>
                    <h4 className="font-bold text-[13px] text-brand-charcoal mb-2">Sarah Jenkins</h4>
                    <p className="text-sm text-brand-taupe leading-relaxed mb-4">
                      123 Luxury Lane<br />
                      Suite 400<br />
                      Sydney, NSW 2000<br />
                      Australia
                    </p>
                    <p className="text-sm text-brand-taupe mb-4">Ph: +61 400 123 456</p>
                    <div className="flex gap-4 border-t border-brand-light-border pt-4">
                      <button className="text-[11px] uppercase tracking-widest font-bold text-brand-charcoal hover:text-[#ff5474]">Edit</button>
                      <button className="text-[11px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500">Delete</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Payment Methods Section */}
            {activeTab === 'payment' && (
              <section id="payment" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="font-serif text-2xl text-brand-charcoal">Payment Methods</h2>
                  <button className="bg-brand-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 hover:bg-black transition-colors">Add New Card</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#FAF8F5] border border-brand-light-border p-6 relative">
                    <span className="absolute top-0 right-0 bg-[#ff5474] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">Default</span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-8 bg-brand-charcoal rounded flex items-center justify-center text-white font-bold italic text-xs">VISA</div>
                      <div>
                        <h4 className="font-bold text-[13px] text-brand-charcoal">Visa ending in 4242</h4>
                        <p className="text-xs text-brand-taupe">Expires 12/28</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-taupe mb-4">Name on card: Sarah Jenkins</p>
                    <div className="flex gap-4 border-t border-brand-light-border pt-4">
                      <button className="text-[11px] uppercase tracking-widest font-bold text-brand-charcoal hover:text-[#ff5474]">Edit</button>
                      <button className="text-[11px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Account Settings Section */}
            {activeTab === 'settings' && (
              <section id="settings" className="bg-white border border-brand-light-border p-6 md:p-10 animate-fade-in-up">
                <div className="max-w-xl">
                  <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Account Settings</h2>

                  {/* Profile Image Upload */}
                  <div className="flex items-center gap-6 pb-6 border-b border-brand-light-border">
                    <div className="w-20 h-20 bg-[#FAF8F5] rounded-full border border-brand-light-border flex items-center justify-center overflow-hidden shrink-0">
                      <User className="w-8 h-8 text-[#EBEBEB]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-brand-taupe">Upload a new avatar. Larger image will be resized automatically.</p>
                      <p className="text-[10px] text-gray-400">Maximum upload size is 1 MB</p>
                      <div className="flex gap-3 mt-1">
                        <label className="cursor-pointer bg-brand-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 hover:bg-black transition-colors flex items-center gap-2">
                          <Camera className="w-3.5 h-3.5" />
                          Change Image
                          <input type="file" className="hidden" accept="image/*" />
                        </label>
                        <button type="button" className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group pt-4">
                        <input type="text" id="firstName" defaultValue="Sarah" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="firstName" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">First Name</label>
                      </div>

                      <div className="relative group pt-4">
                        <input type="text" id="lastName" defaultValue="Jenkins" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="lastName" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Last Name</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group pt-4">
                        <input type="email" id="email" defaultValue="sarah.jenkins@example.com" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Email" />
                        <label htmlFor="email" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Email Address</label>
                      </div>

                      <div className="relative group pt-4">
                        <input type="tel" id="phone" defaultValue="+61 400 123 456" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Phone" />
                        <label htmlFor="phone" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Phone Number</label>
                      </div>
                    </div>

                    <div className="relative group pt-4 mb-8">
                      <input type="date" id="dob" defaultValue="1990-05-15" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" />
                      <label htmlFor="dob" className="absolute left-0 top-0 text-[11px] font-semibold text-[#555] tracking-widest uppercase transition-all peer-focus:text-[#ff5474]">Date of Birth</label>
                    </div>

                    <div className="pt-8 border-t border-brand-light-border">
                      <h3 className="font-bold text-sm text-brand-charcoal mb-6">Change Password</h3>
                      <div className="space-y-8">
                        <div className="relative group pt-4">
                          <input type="password" id="currentPassword" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="Current Password" />
                          <label htmlFor="currentPassword" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">Current Password</label>
                        </div>
                        <div className="relative group pt-4">
                          <input type="password" id="newPassword" required className="w-full bg-transparent border-b border-[#C4C4C4] py-2 text-[15px] text-[#2B2728] outline-none focus:border-[#ff5474] transition-colors peer placeholder-transparent" placeholder="New Password" />
                          <label htmlFor="newPassword" className="absolute left-0 top-6 text-[13px] text-[#777] tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#ff5474] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-semibold peer-valid:text-[#555]">New Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8">
                      <button type="submit" className="w-full bg-brand-charcoal text-white text-[12px] font-bold tracking-widest uppercase py-4 hover:bg-brand-gold transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            )}

          </div>

        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowLogoutModal(false)}></div>
          <div className="bg-white shadow-2xl w-full max-w-md relative z-10 animate-fade-in-up">
            <button onClick={() => setShowLogoutModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-brand-charcoal transition-colors">
              <X size={20} />
            </button>
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 text-brand-charcoal border border-brand-light-border">
                <LogOut size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-2">Sign Out</h3>
              <p className="text-sm text-brand-taupe mb-8 leading-relaxed px-4">Are you sure you want to sign out of your account?</p>
              <div className="flex gap-4">
                <button onClick={() => setShowLogoutModal(false)} className="flex-1 py-4 border border-brand-light-border text-[11px] font-bold tracking-widest uppercase text-brand-charcoal hover:bg-gray-50 transition-colors">
                  CANCEL
                </button>
                <button onClick={() => navigate('/auth')} className="flex-1 py-4 bg-brand-charcoal text-[11px] font-bold tracking-widest uppercase text-white hover:bg-brand-gold transition-colors">
                  SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
