import React from 'react'
import "./AppTopBanner.scss";
interface IBannerProps {
  title?:string
  img?: string
  imageFormat?: { w?: string; h?: string };
  className?: string
}

const   AppTopBanner  = (props: IBannerProps) => {
  return (
    <div id="banner" style={{
      background: `url(${props.img}) center`,
      backgroundSize: "cover"
    }} className={props.className}>
      <div id="title-wrapper">
        <span id="banner-title">{props.title}</span>
      </div>
    </div>
  )
}

export default AppTopBanner