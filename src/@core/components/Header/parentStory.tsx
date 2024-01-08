'use client'
import { FC, memo, useCallback, useState } from 'react'
import './style.scss'
import { StoriesComponent } from '../Stories'
import { Avatar } from 'antd'
import { BASIC_LINK, IGlobalDataType, IHistory } from '@/@core/utils/type'

export const ParentStory: FC<IGlobalDataType> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [stories, setStories] = useState<IHistory | any>()
  const [index, setIndex] = useState<number>(0)

  // closeStoryModal
  const onAllStoriesEndHandler = useCallback(() => {
    setOpen(false), (document.body.style.overflow = 'unset')
  }, [])

  return (
    <section id='parent-story'>
      <div className='circle-wrapper d-flex align-center justify-between gap-x-3 m-t-2'>
        {data?.histories.map((item: IHistory, index: number) => (
          <div key={item.id} className='d-flex flex-column align-center gap-y-1'>
            <div
              onClick={() => {
                setOpen(prev => !prev),
                  setStories(data.histories),
                  setIndex(index),
                  (document.body.style.overflow = 'hidden')
              }}
              className='circle-item d-flex align-center justify-center'
            >
              <Avatar src={BASIC_LINK + '' + item.image_link} size={'large'} alt='stories' />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
        {open && <StoriesComponent stories={stories} onAllStoriesEndHandler={onAllStoriesEndHandler} index={index} />}
      </div>
    </section>
  )
}

export default memo(ParentStory)
