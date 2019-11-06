import React from "react"

type Props = {
  size: "big" | "small"
  color?: string
}

export const PlusIcon = (props: Props) => {
  const { size } = props
  return (
    <svg
      width={size === "big" ? "25px" : "15px"}
      height={size === "big" ? "25px" : "15"}
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      enableBackground="new 0 0 50 50"
      xmlSpace={"preserve"}
    >
      <path
        d="M9.077,25.99h14v14c0,0.553,0.448,1,1,1s1-0.447,1-1v-14h14c0.552,0,1-0.447,1-1s-0.448-1-1-1h-14v-14c0-0.553-0.448-1-1-1
	s-1,0.447-1,1v14h-14c-0.552,0-1,0.447-1,1S8.525,25.99,9.077,25.99z"
      />
    </svg>
  )
}
