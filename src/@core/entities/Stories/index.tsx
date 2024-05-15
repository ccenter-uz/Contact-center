import { BASIC_LINK, IHistory } from '@/@core/shared/type'
import { ArrowLeft, ArrowRight, X } from 'react-feather'
import Stories from 'react-insta-stories'
import LoadingUI from '@/@core/shared/ui/LoadingUI'
import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react'

type IStories = {
  stories: IHistory | any
  onAllStoriesEndHandler: () => void
  index: number
  handleNext: () => void
  handlePrev: () => void
  setWatchedstory: Dispatch<SetStateAction<number[]>>
}
// styles for story
const storyContent = {
  width: '100%',
  height: '100%',
  maxWidth: '768px',
  maxHeight: '93dvh',
  margin: 'auto',
  objectFit: 'contain'
}
// innerContainer
const innerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
// container
const container = {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: 999,
  overFlow: 'hidden',
  background: 'rgb(17 17 17 / 92%)'
}

export function StoriesComponent({
  stories,
  onAllStoriesEndHandler,
  index,
  setWatchedstory,
  handleNext,
  handlePrev
}: IStories) {
  const story = stories?.map((story: any) => {
    return {
      url: BASIC_LINK + '' + story.image_link,
      type: 'image',
      duration: 5000
    }
  })
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isMobile, setMobile] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (window.document !== undefined) {
      if (window.innerWidth <= 768) {
        setMobile(true)
      }
    }
  }, [])

  // handleTouchStart
  const handleTouchStart = () => {
    setIsPaused(true)
  }

  // handleTouchEnd
  const handleTouchEnd = () => {
    setIsPaused(false)
  }

  // When Mobile
  if (isMobile) {
    return (
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className='d-flex justify-end' style={{ position: 'fixed', top: '2%', right: '1%', zIndex: 9999 }}>
          <X onClick={onAllStoriesEndHandler} size={'10%'} color='#fff' cursor={'pointer'} />
        </div>
        <div aria-label='button-controls' className='d-flex align-center justify-between'>
          {index == 0 ? null : (
            <div onClick={handlePrev} role='button' aria-label='prev-button' className='btn-controls prev-btn'>
              <ArrowLeft />
            </div>
          )}
          <Stories
            onStoryStart={(e: number) => setWatchedstory(prevState => [...prevState, e])}
            onNext={handleNext}
            onPrevious={handlePrev}
            loader={<LoadingUI />}
            storyInnerContainerStyles={innerContainer}
            storyContainerStyles={container}
            stories={story}
            defaultInterval={5000}
            width={'100%'}
            height={'100%'}
            storyStyles={storyContent}
            loop={false}
            preventDefault={true}
            isPaused={isPaused}
            onAllStoriesEnd={onAllStoriesEndHandler}
            currentIndex={index}
            key={index}
          />
          {index == stories.length - 1 ? null : (
            <div onClick={handleNext} role='button' aria-label='next-button' className='btn-controls next-btn'>
              <ArrowRight />
            </div>
          )}
        </div>
      </div>
    )
  }

  // When Desktop
  return (
    <div>
      <div className='d-flex justify-end' style={{ position: 'fixed', top: '2%', right: '1%', zIndex: 9999 }}>
        <X onClick={onAllStoriesEndHandler} size={'10%'} color='#fff' cursor={'pointer'} />
      </div>
      <Stories
        onStoryStart={(e: number) => setWatchedstory(prevState => [...prevState, e])}
        loader={<LoadingUI />}
        storyInnerContainerStyles={innerContainer}
        storyContainerStyles={container}
        stories={story}
        defaultInterval={5000}
        width={'100%'}
        height={'100%'}
        storyStyles={storyContent}
        loop={false}
        onAllStoriesEnd={onAllStoriesEndHandler}
        currentIndex={index}
        key={index}
      />
    </div>
  )
}
