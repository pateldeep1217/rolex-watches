import * as React from "react";

type ShopingBagIconProps = React.SVGProps<SVGSVGElement>;
const ShopingBagIcon = (props: ShopingBagIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#2E2E2E"
      d="M4.167 18.333h11.666c.92 0 1.667-.747 1.667-1.666V7.5a.833.833 0 0 0-.833-.833h-2.5v-.834A4.171 4.171 0 0 0 10 1.667a4.171 4.171 0 0 0-4.167 4.166v.834h-2.5A.833.833 0 0 0 2.5 7.5v9.167c0 .919.748 1.666 1.667 1.666ZM7.5 5.833c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v.834h-5v-.834Zm-3.333 2.5h1.666V10H7.5V8.333h5V10h1.667V8.333h1.666l.002 8.334H4.167V8.333Z"
    />
  </svg>
);
export default ShopingBagIcon;
