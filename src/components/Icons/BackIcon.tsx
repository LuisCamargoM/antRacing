import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const BackIcon = (props: SvgProps) => (
    <Svg
        width={10}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.754 1.524A.935.935 0 0 0 5.757.263.8.8 0 0 0 4.575.259L.246 4.868a.935.935 0 0 0-.003 1.26l4.332 4.613a.799.799 0 0 0 1.182-.004.935.935 0 0 0-.003-1.261L2.019 5.5l3.735-3.976Z"
            fill="#000"
        />
    </Svg>
)

export default BackIcon;
