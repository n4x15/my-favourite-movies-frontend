import { useState } from "react"

export const useBlockView = () => {
  const [isBlockView, setBlockView] = useState<boolean>(true)

  const changeBlockView = (flag:boolean) => {
      setBlockView(flag)
  }
  return {isBlockView, changeBlockView}
}