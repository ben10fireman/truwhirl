import React from "react";
import "./style/dashboard.css"; // Ensure the CSS file is in the same folder or update the path.

const Page = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>
        <ul>
          <li>
            <img src="/dashboard (2).png" alt="" /> <span>Dashboard</span>
          </li>
          <li>
            <img src="/customer.png" alt="" /> <span>Customer</span>
          </li>
          <li>
            <img src="/employee.png" alt="" /> <span>Employee</span>
          </li>
          <li>
            <img src="/product.png" alt="" /> <span>Product</span>
          </li>
          <li>
            <img src="/payment.png" alt="" /> <span>Income</span>
          </li>
          <li>
            <img src="/help-web-button.png" alt="" /> <span>Help</span>
          </li>
          <li>
            <img src="/settings.png" alt="" /> <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <img src="/search.png" alt="" />
              </button>
            </div>
            <div className="user">
              <a href="#" className="btn">
                Add New
              </a>
              <img src="/notifications.png" alt="" />
              <div className="img-case">
                <img src="/user.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="cards">
            {/* Cards Section */}
            <div className="card">
              <div className="box">
                <h1>2194</h1>
                <h3>Customers</h3>
              </div>
              <div className="icon-case">
                <img src="/customer.png" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>53</h1>
                <h3>Employee</h3>
              </div>
              <div className="icon-case">
                <img src="/employee.png" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>5</h1>
                <h3>Product</h3>
              </div>
              <div className="icon-case">
                <img src="/product.png" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>350000</h1>
                <h3>Income</h3>
              </div>
              <div className="icon-case">
                <img src="/income.png" alt="" />
              </div>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="content-2">
            <div className="recent-payments">
              <div className="title">
                <h2>Recent Payments</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr key={index}>
                      <td>John Doe</td>
                      <td>Baggy Jean</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New Customers */}
            <div className="new-students">
              <div className="title">
                <h2>New Customers</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr key={index}>
                      <td>
                        <img src="/user.png" alt="" />
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <img src="/info.png" alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
