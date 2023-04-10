import React from 'react'
import "./AppTopBanner.scss";
interface IBannerProps {
  title?:string
  img?: string
  imageFormat?: { w?: string; h?: string };
}

const   AppTopBanner  = (props: IBannerProps) => {
  return (
    <div id="banner" style={{
      background: `url(${props.img}) center`,
      backgroundSize: "cover"
    }}>
      <div id="title-wrapper">
        <span id="title">{props.title}</span>
      </div>
    </div>
  )
}

export default AppTopBanner