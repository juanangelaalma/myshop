import React from "react";

import "./footer_item.css"

const FooterItem = ({ title, children }) => {
  return (
    <div className="footer__content-item">
      <h1 className="footer__content-item_title">{ title }</h1>
      { children }
    </div>
  );
};

export default FooterItem;
