import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const useIsPhone =()=> useMediaQuery({
    query: '(max-width: 650px)'
  })