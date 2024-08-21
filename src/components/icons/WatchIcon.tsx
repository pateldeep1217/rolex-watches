import * as React from "react";

type WatchIconProps = React.SVGProps<SVGSVGElement>;

const WatchIcon = (props: WatchIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path fill="#2E2E2E" d="M10.833 6.667H9.167v4.166h4.166V9.167h-2.5v-2.5Z" />
    <path
      fill="#2E2E2E"
      d="M16.666 10a6.663 6.663 0 0 0-3.333-5.763V2.5a.834.834 0 0 0-.833-.833h-5a.833.833 0 0 0-.833.833v1.736A6.664 6.664 0 0 0 3.334 10a6.67 6.67 0 0 0 3.447 5.833h-.114v1.701a.833.833 0 0 0 .833.834h5a.833.833 0 0 0 .833-.834v-1.7h-.116A6.668 6.668 0 0 0 16.666 10Zm-6.667 5a5.005 5.005 0 0 1-4.998-5 5.004 5.004 0 0 1 4.998-5c2.758 0 5 2.243 5 5a5.005 5.005 0 0 1-5 5Z"
    />
  </svg>
);
export default WatchIcon;
