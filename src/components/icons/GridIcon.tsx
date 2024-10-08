import * as React from "react";
type GridIconProps = React.SVGProps<SVGSVGElement>;

const GridIcon = (props: GridIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#2E2E2E"
      d="M8.333 2.5h-5a.833.833 0 0 0-.833.833v5a.833.833 0 0 0 .833.834h5a.833.833 0 0 0 .834-.834v-5a.833.833 0 0 0-.834-.833Zm-.833 5H4.167V4.167H7.5V7.5Zm4.167 1.667h5a.833.833 0 0 0 .833-.834v-5a.833.833 0 0 0-.833-.833h-5a.833.833 0 0 0-.834.833v5a.833.833 0 0 0 .834.834Zm.833-5h3.333V7.5H12.5V4.167Zm-10 12.5a.833.833 0 0 0 .833.833h5a.833.833 0 0 0 .834-.833v-5a.833.833 0 0 0-.834-.834h-5a.833.833 0 0 0-.833.834v5ZM4.167 12.5H7.5v3.333H4.167V12.5Zm6.666 4.167a.833.833 0 0 0 .834.833h5a.833.833 0 0 0 .833-.833v-5a.833.833 0 0 0-.833-.834h-5a.833.833 0 0 0-.834.834v5ZM12.5 12.5h3.333v3.333H12.5V12.5Z"
    />
  </svg>
);
export default GridIcon;
