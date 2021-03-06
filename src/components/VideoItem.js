import React, { useRef, useEffect, useState } from "react";
import VideoDisplayButton from "./VideoDisplayButton.js";
import VideoPlayer from "./VideoPlayer.jsx";
import ReactPlayer from "react-player";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay_visibility: "hidden",
      overlay_opacity: 0,
      overlay_display: "none",
      playVideo: false,
      boxText: this.props.school,
      switchTopic: true,
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.delayTimer = this.delayTimer.bind(this);
    this.delayedFunction = this.delayedFunction.bind(this);
  }

  delayedFunction() {
    this.setState({
      switchTopic: !this.state.switchTopic,
      boxText: this.state.switchTopic
        ? this.props.videoTitle
        : this.props.school,
    });
    this.delayTimer();
  }

  delayTimer() {
    setTimeout(this.delayedFunction, 3000);
  }

  componentDidMount() {
    this.delayTimer();
  }

  showModal() {
    this.setState({
      overlay_visibility: "visible",
      overlay_opacity: 1,
      overlay_display: "block",
      playVideo: true,
    });
  }

  closeModal() {
    this.setState({
      overlay_visibility: "hidden",
      overlay_opacity: 0,
      overlay_display: "none",
      playVideo: false,
    });
  }

  render() {
    return (
      <>
        <div
          style={{ color: this.props.color, animation: this.props.animation }}
          className="topic-name"
          onClick={this.showModal}
        >
          {this.state.boxText}
        </div>
        <div
          class="popup__overlay"
          style={{
            visibility: this.state.overlay_visibility,
            opacity: this.state.overlay_opacity,
            display: this.state.overlay_display,
          }}
        >
          <div class="popup">
            <a href="#" class="popup__close" onClick={this.closeModal}>
              X
            </a>
            <ReactPlayer
              url={this.props.videoURL}
              playing={this.state.playVideo}
              controls="True"
            />
          </div>
        </div>
      </>
    );
  }
}

export default VideoItem;
