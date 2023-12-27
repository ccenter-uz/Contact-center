'use client'
import { FC } from 'react'
import Stories from 'react-insta-stories'

type InsideStoryType = {
  url: string
  type: string
  duration: number
}

type IStories = {
  stories: InsideStoryType[]
  onAllStoriesEndHandler: () => void
}

export const StoriesComponent: FC<IStories> = ({ stories, onAllStoriesEndHandler }) => {
  const storyContent = {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  }

  return (
    <>
      <Stories
        stories={stories}
        defaultInterval={3000}
        width={'100%'}
        height={'80dvh'}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
        onAllStoriesEnd={onAllStoriesEndHandler}
      />
    </>
  )
}
