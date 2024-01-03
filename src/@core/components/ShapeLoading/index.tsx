import { FC } from 'react'
import './style.scss'

type IShapeLoading = {
  width: string
  height: string
  radius: string
}

const ShapeLoading: FC<IShapeLoading> = ({ width, height, radius }) => {
  return <div className='shape-loading' style={{ width: width, height: height, borderRadius: radius }}></div>
}

export default ShapeLoading
