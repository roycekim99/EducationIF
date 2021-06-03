import React, { useRef, useEffect, useState } from "react";
import VideoDisplayButton from "./VideoDisplayButton.js";
import VideoPlayer from "./VideoPlayer.jsx";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay_visibility: "hidden",
      overlay_opacity: 0,
      overlay_display: "none"
    }

    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal() {
    this.setState({
      overlay_visibility: "visible",
      overlay_opacity: 1,
      overlay_display: "block"
    })
  }

  closeModal() {
    this.setState({
      overlay_visibility: "hidden",
      overlay_opacity: 0,
      overlay_display: "none"
    })
  }

  render() {return (
    <>
      <div
        style={{ color: this.props.color, animation: this.props.animation }}
        className="topic-name"
        onClick={this.showModal}
      >
        {this.props.videoTitle}
      </div>
      <div 
        class="popup__overlay"
        style={{
            visibility: this.state.overlay_visibility,
            opacity: this.state.overlay_opacity,
            display: this.state.overlay_display
        }}
      >
        <div class="popup">
          <a href="#" class="popup__close" onClick={this.closeModal}>X</a>
          <VideoPlayer url={this.props.videoURL} />
        </div>
      </div>
    </>
  );}
}

export default VideoItem;
