import { useState } from "react";

export default function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue)

  function toggle() {
    setIsOn(state => !state)
  }

  return [isOn, toggle]
}