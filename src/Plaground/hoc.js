import React from "react";

const info = props => (
  <div>
    <h1>info</h1>
    <p>{props.info}</p>
  </div>
);
const withAdminWarning = WrapedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is a priver info pleased do not sher it</p>}
      <WrapedComponent {...props} />
    </div>
  );
};
const requireAuthentication = WrapedComponent => {
  return props => <div>{props.isAdmin && <WrapedComponent {...props} />}</div>;
};

export const AdminInfo = withAdminWarning(info);
export const AuthenticationInfo = requireAuthentication(info);
