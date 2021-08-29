import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgArrowLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  )
}

export default SvgArrowLeft
