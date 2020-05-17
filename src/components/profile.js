import React from "react";
import { Link } from "gatsby";
export default () => (
  <div className="dashboard-header">
    <nav>
      <Link to="/dashboard/secret" activeClassName="active">
        Secret
      </Link>
      <Link to="/dashboard/base" activeClassName="active">
        Base
      </Link>
    </nav>
    <span>TODO show login status</span>
  </div>
);
