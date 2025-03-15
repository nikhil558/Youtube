import React, { useEffect, useRef, useState } from "react";
import { SEARCH_YOUTUBE_VIDEOS_API, SEARCH_YOUTUBE_VIDEOS_NEXT_PAGE_API, YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userSearchResults } from "../utils/videoSlice";
import { loadMoreVideos } from "../utils/videoSlice";
import { updateFetchInput } from "../utils/videoSlice";

const VideoContainer = () => {
  const [page, setPage] = useState(null)
  const {searchInput, resultsVideos, fetchInput} = useSelector(store => store.video)
  const dispatch = useDispatch()
  const containerRef = useRef(null);


  useEffect(() => {
    if(fetchInput !== searchInput){
      getVideos();
    }
  }, [searchInput]);

  const getVideos = async () => {
    console.log(searchInput)
    console.log(fetchInput)

    const url = searchInput ? SEARCH_YOUTUBE_VIDEOS_API(searchInput) : YOUTUBE_VIDEOS_API
    const data = await fetch(url);
    const json = await data.json();
    const nextPageToken = json.nextPageToken;
    setPage(nextPageToken)
    dispatch(userSearchResults(json.items))
    dispatch(updateFetchInput(searchInput))
  };

  const handelScroll = () => {
     if (containerRef.current){
        const {scrollTop, scrollHeight, clientHeight} = containerRef.current

        if(scrollTop + clientHeight >= scrollHeight - 100){
           getMoreVideos()
        }
     }
  }

  const getMoreVideos = async() => {
    const url = searchInput ? SEARCH_YOUTUBE_VIDEOS_NEXT_PAGE_API(searchInput, page) : YOUTUBE_VIDEOS_API
    const data = await fetch(url);
    const json = await data.json();
    setPage(json.nextPageToken)
    dispatch(loadMoreVideos(json.items))
  }

  if(!resultsVideos) return

  return (
    <div className="flex flex-wrap overflow-y-scroll h-[80vh]" ref={containerRef} onScroll={handelScroll}>
      {resultsVideos.map((video,index) => {
        const videoId = video?.id?.videoId ? video.id.videoId : video.id;
        return (
          <Link key={videoId + index} to={"/watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
