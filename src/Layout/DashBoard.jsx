import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils,  } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart()

    // todo: get is admin value form the database
    const [isAdmin ]= useAdmin()

    return (
        <div className='flex'>
            <div className='w-64 min-h-full bg-orange-400'>
                <ul className='menu'>
                   {
                    isAdmin ? <>
                     <li>
                        
                        <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin  Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/bookings'><FaBook></FaBook> Manage Bookings</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/users'><FaUser></FaUser> All Users</NavLink>
                    </li>
                    </>
                    :
                    <>
                     <li>
                        
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/history'><FaCalendar></FaCalendar>  History</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart {cart.length}</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/review'><FaAd></FaAd> Review</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/paymentHistory'><FaList></FaList>  Real Payment History</NavLink>
                    </li>
                    </>
                   }
                    {/* shared/ common nav links */}
                    <div className='divider'></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;