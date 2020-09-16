import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.div`
width:55vw;
height:200px;
padding:0;
display:flex;
align-items:center;
`;

const SlideBox = styled.div`
width:55vw;
height:200px;
display:flex;
overflow:hidden;
`;

const Slides = styled.ul`
display:flex;
position:relative;
left :${prop => prop.left}px;
li:not(:last-child){
    float: left;
  margin-right: 20px;
}
transition: left 0.5s ease-in;

`;



const MoveBtn = styled.button` 
height: 60px;
width:60px;
border-radius: 50%;
opacity: 0.7;
background-color:transparent ;
border:none;
transition: color 0.1s ease-in;
&:hover{

    color:white;

}
`;





const VideoContainer = styled.iframe`
  height: 200px;
  width: 300px;
`;

const Slider = ({videos, key,length,count}) =>{

    const [ move , setMove] =useState(0);
    const [ currentIdx , setCurrentIdx] =useState(0);

   const moveSlide = num =>{
    setMove(-(num * 320));
    setCurrentIdx(num);
   }
        
        
   const movePrev= e =>{
       e.preventDefault();
       console.log(currentIdx)
       if(currentIdx >0 ){
        moveSlide(currentIdx-1);
       }else{
        moveSlide(length-count);
       }
        console.log(move)
   }

   const moveNext= e =>{
    e.preventDefault();
    console.log(currentIdx,length,count)
    if(currentIdx < (length- count) ){
        moveSlide(currentIdx+1);
   }else{
    moveSlide(0);
   }
    console.log(move)
}
  
return (<Container>
    <MoveBtn onClick={movePrev}><FontAwesomeIcon icon={faAngleLeft}  size="4x"/></MoveBtn>
    <SlideBox>
    <Slides left={move}>{videos && videos.length >0 && videos.map(video => (<li><VideoContainer  
                  id={video.id}
                  key={video.id}
                  title={video.id}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allowFullScreen="allowFullScreen"
                  frameBorder="0"
                /></li>))}</Slides>
    </SlideBox>
    <MoveBtn onClick={moveNext}><FontAwesomeIcon icon={faAngleRight} size="4x"/></MoveBtn>

</Container>
)};

Slider.propTypes ={
    key : PropTypes.string,
    videos : PropTypes.array.isRequired,
    count : PropTypes.number,
    length: PropTypes.number
};

export default Slider ; 