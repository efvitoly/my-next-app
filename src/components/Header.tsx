'use client';

import { useState, useRef, useEffect } from 'react';
import {
  FiRefreshCw,
  FiZap,
  FiUsers,
  FiCalendar,
  FiCheckSquare,
  FiClipboard,
  FiMessageSquare,
  FiBox,
  FiList,
  FiSettings,
  FiPlus,
  FiSearch,
  FiX,
  FiUser,
  FiLogOut,
  FiMenu,
  FiFilter,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';

const icons = [
  { icon: <FiRefreshCw size={16} />, label: 'Refresh', badge: false },
  { icon: <FiZap size={16} />, label: 'Early', badge: true },
  { icon: <FiUsers size={16} />, label: 'Radar', badge: false },
  { icon: <FiMessageSquare size={16} />, label: 'SoEarly', badge: false },
  { icon: <FiCalendar size={16} />, label: 'Daily', badge: false },
  { icon: <FiCheckSquare size={16} />, label: 'Todo', badge: false },
  { icon: <FiClipboard size={16} />, label: 'Quest', badge: false },
  { icon: <FiBox size={16} />, label: 'NFT', badge: false },
  { icon: <FiList size={16} />, label: 'MyList', badge: false },
  { icon: <FiSettings size={16} />, label: 'Settings', badge: false },
];

const coins = [
  { name: "Bitcoin", symbol: "BTC", trending: true, favorite: true },
  { name: "Ethereum", symbol: "ETH", trending: true, favorite: false },
  { name: "Solana", symbol: "SOL", trending: true, favorite: true },
  { name: "BNB", symbol: "BNB", trending: false, favorite: false },
  { name: "XRP", symbol: "XRP", trending: false, favorite: false },
  { name: "Dogecoin", symbol: "DOGE", trending: false, favorite: false },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const searchRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        // Arama sonuçlarını kapat
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let results = coins;
    
    if (searchQuery) {
      results = results.filter(coin => 
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeFilter === 'trending') {
      results = results.filter(coin => coin.trending);
    } else if (activeFilter === 'favorites') {
      results = results.filter(coin => coin.favorite);
    }
    
    setFilteredCoins(results);
  }, [searchQuery, activeFilter]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUsername('CryptoMaster');
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setShowUserDropdown(false);
  };

  const toggleFavorite = (symbol: string) => {
    setFilteredCoins(prevCoins => 
      prevCoins.map(coin => 
        coin.symbol === symbol ? { ...coin, favorite: !coin.favorite } : coin
      )
    );
  };

  return (
    <>
      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#101e33] rounded-xl max-w-md w-full p-6 border border-gray-700/50 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Sign In</h3>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-[#0f1c2e] text-white placeholder-gray-500 
                      border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/70"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg bg-[#0f1c2e] text-white placeholder-gray-500 
                      border border-gray-700/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/70"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
                    text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-500/10"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm text-gray-400">
              Don't have an account? <button className="text-blue-400 hover:text-blue-300">Sign up</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-[#0B1624] text-white w-full border-b border-gray-700/50 shadow-lg">
        <div className="mx-auto max-w-screen-xl">
          {/* Top Bar with Login */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0f1c2e] to-[#0B1624]">
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white md:hidden">
                <FiMenu size={20} />
              </button>
              <div className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                EarlyBase
              </div>
            </div>

            {isLoggedIn ? (
              <div className="relative" ref={userDropdownRef}>
                <button 
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                    {username.charAt(0)}
                  </div>
                  <span className="hidden md:inline text-sm font-medium text-gray-200 group-hover:text-white">
                    {username}
                  </span>
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#101e33] rounded-lg shadow-xl border border-gray-700/50 z-10 overflow-hidden">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a2b45]">Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#1a2b45]">Settings</a>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-[#1a2b45] flex items-center"
                      >
                        <FiLogOut className="mr-2" size={14} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center space-x-1.5 text-sm font-medium bg-gradient-to-r from-blue-600/20 to-blue-600/10 hover:from-blue-600/30 hover:to-blue-600/20 text-blue-400 hover:text-white px-3 py-1.5 rounded-lg border border-blue-500/20 transition-all"
              >
                <FiUser size={16} />
                <span className="hidden md:inline">Sign In</span>
              </button>
            )}
          </div>

          {/* Icon Menüsü - Modern */}
          <div className="flex flex-wrap gap-2 px-4 py-3 overflow-x-auto scrollbar-hide bg-[#0B1624]/90">
            {icons.map((item, index) => (
              <button
                key={index}
                className={`flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 relative
                  ${index === 0 ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 
                    'bg-[#101e33]/80 hover:bg-[#1a2b45] text-gray-300 hover:text-white'}`}
                title={item.label}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="hidden sm:inline text-xs font-medium">{item.label}</span>
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            ))}
            <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#101e33]/80 hover:bg-[#1a2b45] text-gray-300 hover:text-white transition-all">
              <FiPlus size={16} />
              <span className="hidden sm:inline text-xs font-medium">Add</span>
            </button>
          </div>

          {/* Search Bar with Filters */}
          <div className="relative px-4 py-3 bg-[#0B1624]/80" ref={searchRef}>
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search coins (BTC, ETH, SOL...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-24 py-2.5 rounded-lg bg-[#101e33]/90 text-sm text-white placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-700/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiX size={16} />
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-400 hover:text-white px-2 py-1 rounded-md bg-[#0f1c2e] border border-gray-700/50"
              >
                <FiFilter size={14} />
                <span className="text-xs">Filter</span>
              </button>
            </div>

            {/* Filters Dropdown */}
            {showFilters && (
              <div 
                ref={filtersRef}
                className="absolute right-4 left-4 mt-2 bg-[#101e33] rounded-lg shadow-xl border border-gray-700/50 z-10 p-3"
              >
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1.5 text-xs rounded-full flex items-center space-x-1 transition-all ${
                      activeFilter === 'all' 
                        ? 'bg-blue-600/80 text-white' 
                        : 'bg-[#0f1c2e] text-gray-300 hover:bg-[#1a2b45]'
                    }`}
                  >
                    <span>All</span>
                  </button>
                  <button
                    onClick={() => setActiveFilter('trending')}
                    className={`px-3 py-1.5 text-xs rounded-full flex items-center space-x-1 transition-all ${
                      activeFilter === 'trending' 
                        ? 'bg-purple-600/80 text-white' 
                        : 'bg-[#0f1c2e] text-gray-300 hover:bg-[#1a2b45]'
                    }`}
                  >
                    <FiTrendingUp size={12} />
                    <span>Trending</span>
                  </button>
                  <button
                    onClick={() => setActiveFilter('favorites')}
                    className={`px-3 py-1.5 text-xs rounded-full flex items-center space-x-1 transition-all ${
                      activeFilter === 'favorites' 
                        ? 'bg-yellow-600/80 text-white' 
                        : 'bg-[#0f1c2e] text-gray-300 hover:bg-[#1a2b45]'
                    }`}
                  >
                    <FiStar size={12} />
                    <span>Favorites</span>
                  </button>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="absolute left-4 right-4 mt-2 max-h-60 overflow-y-auto bg-[#101e33] rounded-lg shadow-xl border border-gray-700/50 z-10 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {filteredCoins.length > 0 ? (
                  <ul>
                    {filteredCoins.map((coin, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-3 hover:bg-[#1a2b45] cursor-pointer border-b border-gray-700/30 last:border-b-0 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold">
                              {coin.symbol}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{coin.name}</div>
                              <div className="text-xs text-gray-400">{coin.symbol}</div>
                            </div>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(coin.symbol);
                            }}
                            className={`p-1.5 rounded-full ${coin.favorite ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'}`}
                          >
                            <FiStar size={14} fill={coin.favorite ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                        {coin.trending && (
                          <div className="mt-2 flex items-center text-xs text-purple-400">
                            <FiTrendingUp size={12} className="mr-1" />
                            <span>Trending</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-center text-sm text-gray-400">
                    No coins found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}