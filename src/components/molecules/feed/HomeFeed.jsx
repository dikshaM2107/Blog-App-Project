import React from 'react'
import HomeFeedCustom from '../../reusable/HomeFeedCustom'

const HomeFeed = () => {
  return (
    <div className="d-flex justify-content-center">
      <HomeFeedCustom
        name="John Doe"
        avatarSrc="https://picsum.photos/50"
        content="Lorem ipsum dolor sit amet,"
        imageSrc="https://picsum.photos/600/400"
        isNew={true}
      />
    </div>
  )
}

export default HomeFeed