import { BASIC_LINK, IHistory } from '@/@core/utils/type'
import { Spin } from 'antd'
import Stories from 'react-insta-stories'

type IStories = {
  stories: IHistory
  onAllStoriesEndHandler: () => void
}
// styles for story
// content
const storyContent = {
  width: '768px',
  maxWidth: '100%',
  maxHeight: '100%',
  margin: 'auto'
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
  height: '100dvh',
  zIndex: 999,
  overFlow: 'hidden'
}

export function StoriesComponent({ stories, onAllStoriesEndHandler }: IStories) {
  const story = [
    {
      url: BASIC_LINK + '' + stories.image_link,
      type: 'image',
      duration: 5000
    }
  ]

  return (
    <Stories
      loader={<Spin size='large' />}
      storyInnerContainerStyles={innerContainer}
      storyContainerStyles={container}
      stories={story}
      defaultInterval={5000}
      width={'100%'}
      height={'100%'}
      storyStyles={storyContent}
      loop={false}
      keyboardNavigation={true}
      onAllStoriesEnd={onAllStoriesEndHandler}
    />
  )
}
