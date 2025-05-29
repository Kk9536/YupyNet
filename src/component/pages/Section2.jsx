import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Avatar from "../../component/Avatar"



const bgColors = ["#fd7024", "#2062e6"]; // 橙色、蓝色

const Section2 = () => {
  const section2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [1, 2, 3, 4, 5];
    sections.forEach((num, idx) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#section2-${num}`,
            start: "10% 100%",
            end: "90% 0%",
            scrub: true,
            duration: 1,
          },
        })
        .to(
          `#top-nav-sec2${num === 1 ? "" : `-${num - 1}`}`,
          { backgroundColor: "#fd7024" },
          "a"
        )
        .from(
          `#section2-${num} h1, #section2-${num} p, #section2-${num} img, #section2-${num} .section2-video`,
          { opacity: 0, y: -850 },
          "a"
        )
        .to(
          `#section2-${num} h1, #section2-${num} p, #section2-${num} img, #section2-${num} .section2-video`,
          { opacity: 0, y: 850 }
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 视频资源列表（可根据需要替换为不同视频）
  const videoList = [
    require("../../assets/Valorant_caomei.mp4"),
    require("../../assets/Valorant_05-25-2025_0-29-12-178.mp4"),
    require("../../assets/Valorant_kk.mp4"),
    require("../../assets/Valorant_natro.mp4"),
    require("../../assets/Valorant_05-25-2025_0-29-12-178.mp4"),
  ];

  return (
    <div className="section-2" ref={section2Ref}>
      {/* 顶部导航栏 */}
      <div id="top-nav-sec2" className="nav-inner-2">
        <h3>草莓</h3>
      </div>
      {/* 背景占位层 */}
      <div className="video-flow"></div>

      {/* Section 2-1 */}
      <div id="section2-1" className="content-inner-2">
        <div className="lft-content-inner-2">
          <Avatar
            userId="624015564532219904"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p>请和我一起解救U3U！</p>
        </div>
        <div className="rght-content-inner-2">
          <video
            className="section2-video"
            src={videoList[0]}
            controls
            style={{ width: "100%", borderRadius: "16px" }}
          ></video>
        </div>
        <div className="rght-content-inner-2">
          <img width="60%" src={require("../../assets/u3u.webp")} alt="" />
        </div>
      </div>

      {/* Section 2-2 */}
      <div id="section-2-2-p" className="inner-2-1">
        <div id="top-nav-sec2-1" className="nav-inner-2">
          <h3>Yoviker</h3>
        </div>
        <div id="section2-2" className="content-inner-2">
          <div className="lft-content-inner-2">
          <Avatar
            userId="564167773371236353"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            />
            <p>北美最好的DMA使用者</p>
          </div>
          <div className="rght-content-inner-2">
            <video
              className="section2-video"
              src={videoList[1]}
              controls
              style={{ width: "100%", borderRadius: "16px" }}
            ></video>
          </div>
          <div className="rght-content-inner-2">
            <img width="60%" src={require("../../assets/yoviker.webp")} alt="" />
          </div>
        </div>
      </div>

      {/* Section 2-3 */}
      <div id="section-2-3-p" className="inner-2-1">
        <div id="top-nav-sec2-2" className="nav-inner-2">
          <h3>KK</h3>
        </div>
        <div id="section2-3" className="content-inner-2">
          <div className="lft-content-inner-2">
          <Avatar
            userId="999316935424606238"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            />
            <p>我引以为傲的自瞄却被你说成天赋</p>
          </div>
          <div className="rght-content-inner-2">
            <video
              className="section2-video"
              src={videoList[2]}
              controls
              style={{ width: "100%", borderRadius: "16px" }}
            ></video>
          </div>
          <div className="rght-content-inner-2">
            <img width="60%" src={require("../../assets/kk.webp")} alt="" />
          </div>
        </div>
      </div>

      {/* Section 2-4 */}
      <div id="section-2-4-p" className="inner-2-1">
        <div id="top-nav-sec2-3" className="nav-inner-2">
          <h3>Natro</h3>
        </div>
        <div id="section2-4" className="content-inner-2">
          <div className="lft-content-inner-2">
          <Avatar
            userId="960767582988804096"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            />
            <p>ZMJJKK我永远的神！</p>
          </div>
          <div className="rght-content-inner-2">
            <video
              className="section2-video"
              src={videoList[3]}
              controls
              style={{ width: "100%", borderRadius: "16px" }}
            ></video>
          </div>
          <div className="rght-content-inner-2">
            <img width="60%" src={require("../../assets/natro.webp")} alt="" />
          </div>
        </div>
      </div>

      {/* Section 2-5 */}
      <div id="section-2-5-p" className="inner-2-1">
        <div id="top-nav-sec2-4" className="nav-inner-2">
          <h3>Potato</h3>
        </div>
        <div id="section2-5" className="content-inner-2">
          <div className="lft-content-inner-2">
            <Avatar
              userId="287288000298352641"
              style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
            <p>?????</p>
          </div>
          <div className="rght-content-inner-2">
            <video
              className="section2-video"
              src={videoList[4]}
              controls
              style={{ width: "100%", borderRadius: "16px" }}
            ></video>
          </div>
          <div className="rght-content-inner-2">
            <img width="60%" src={require("../../assets/potato.webp")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
