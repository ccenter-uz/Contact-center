'use client'
import { FC, useState } from 'react'
import './style.scss'
import ReactInstaStories from 'react-insta-stories'

type IStories = {
  id: number
  title: string
  story?: any
}
// story
const storyContent = {
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  margin: 'auto'
}
export const StoriesComponent: FC<IStories> = ({ id, title, story }) => {
  const [state, setState] = useState<boolean>(false)

  return (
    <section id='stories'>
      <div key={id} className='d-flex flex-column align-center'>
        <div className='circle-item d-flex align-center justify-center m-b-2' onClick={() => setState(true)}></div>
        <p>{title}</p>
      </div>
      {state && (
        <ReactInstaStories
          stories={story}
          defaultInterval={1500}
          width={'100%'}
          height={'100%'}
          loop={false}
          storyStyles={storyContent}
        />
      )}
    </section>
  )
}
