'use client'
import { FC, useState } from 'react'
import './style.scss'
import { StoriesComponent } from '../Stories'
import { Avatar, Modal } from 'antd'
import { X } from 'react-feather'

const data = [
  {
    id: 1,
    title: 'Birinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  },
  {
    id: 2,
    title: 'Ikkinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  },
  {
    id: 3,
    title: 'Uchinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  },
  {
    id: 4,
    title: 'Tortinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  },
  {
    id: 5,
    title: 'Beshinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  },
  {
    id: 6,
    title: 'Oltinchi story',
    avatar: '/assets/collective/community.svg',
    stories: [
      {
        url: 'https://i.imgur.com/QpUEcfi.jpg',
        type: 'image',
        duration: 1500
      },

      {
        url: 'https://i.imgur.com/LBRXhIq.jpg',
        type: 'image',
        duration: 1500
      },
      {
        url: 'https://i.imgur.com/ARMxyC4.png',
        type: 'image',
        duration: 1500
      }
    ]
  }
]

export const ParentStory: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  // closeStoryModal
  const onAllStoriesEndHandler = () => {
    setOpen(false)
  }

  return (
    <section id='parent-story'>
      <div className='circle-wrapper d-flex align-center justify-between gap-x-3 m-t-2'>
        {data?.map(item => (
          <div key={item.id} className='d-flex flex-column align-center gap-y-1'>
            <div onClick={() => setOpen(true)} className='circle-item d-flex align-center justify-center'>
              <Avatar src={item.avatar} size={'large'} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Modal
        closeIcon={<X color='#fff' />}
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        className='story-modal'
      >
        <StoriesComponent stories={data[0].stories} onAllStoriesEndHandler={onAllStoriesEndHandler} />
      </Modal>
    </section>
  )
}
