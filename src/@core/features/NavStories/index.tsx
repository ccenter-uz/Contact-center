import { FC, memo, useCallback, useState } from 'react'
import './style.scss'
import { Avatar } from 'antd'
import { BASIC_LINK, IGlobalDataType, IHistory } from '@/@core/shared/type'
import dynamic from 'next/dynamic'
import Loading from '@/app/[locale]/loading'

const StoriesComponent = dynamic(() => import('@/@core/entities/Stories').then(res => res.StoriesComponent), {
  loading: () => (
    <div
      style={{
        position: 'absolute',
        zIndex: 99,
        inset: 0,
        width: '100dvw',
        height: '100dvh',
        background: 'rgba(17, 17, 17, 0.92)'
      }}
    >
      <Loading />
    </div>
  )
})

export const ParentStory: FC<IGlobalDataType> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [stories, setStories] = useState<IHistory | any>()
  const [index, setIndex] = useState<number>(0)
  const [watchedStory, setWatchedstory] = useState<number[]>([])

  // closeStoryModal
  const onAllStoriesEndHandler = useCallback(() => {
    setOpen(false), (document.body.style.overflow = 'unset')
  }, [])

  // handleNext
  const handleNext = () => {
    setWatchedstory(prevState => [...prevState, index])
    setIndex(prevState => ++prevState)
  }
  // handlePrev
  const handlePrev = () => {
    setWatchedstory(prevState => [...prevState, index])
    setIndex(prevState => --prevState)
  }

  return (
    <section id='parent-story' className='fade-in'>
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
              className={
                !watchedStory.includes(index)
                  ? 'circle-item d-flex align-center justify-center'
                  : 'watched-item d-flex align-center justify-center'
              }
            >
              <Avatar src={BASIC_LINK + '' + item.image_link} size={'large'} alt='stories' />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
        {open && (
          <StoriesComponent
            stories={stories}
            onAllStoriesEndHandler={onAllStoriesEndHandler}
            index={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
            setWatchedstory={setWatchedstory}
          />
        )}
      </div>
    </section>
  )
}

export default memo(ParentStory)
