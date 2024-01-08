import { BASIC_LINK, IHistory } from '@/@core/utils/type'
import { Spin } from 'antd'
import { X } from 'react-feather'
import Stories from 'react-insta-stories'

type IStories = {
  stories: IHistory | any
  onAllStoriesEndHandler: () => void
  index: number
}
// styles for story
// content
const storyContent = {
  width: '800px',
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

export function StoriesComponent({ stories, onAllStoriesEndHandler, index }: IStories) {
  const story = stories?.map((story: any) => {
    return {
      url: BASIC_LINK + '' + story.image_link,
      type: 'image',
      duration: 5000
    }
  })

  return (
    <div>
      <div className='d-flex justify-end' style={{ position: 'absolute', top: '2%', right: '1%', zIndex: 9999 }}>
        <X onClick={onAllStoriesEndHandler} size={'10%'} color='#fff' cursor={'pointer'} />
      </div>
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
        currentIndex={index}
      />
    </div>
  )
}
