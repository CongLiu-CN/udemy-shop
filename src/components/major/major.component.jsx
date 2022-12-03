import {CollegeBriefContainer, CollegeBriefHeader, Tag, TagBtn, TagContainer, Title, LikeBtn, CollegeBriefText, VerticalNavContainer, MajorCards, MajorContent} from './major.styles';
import Button from '../button/button.component'
import CardWrapper, {CARD_WRAPPER_CLASSES} from '../card-wapper/card-wrapper.component'
import { useState, } from 'react';
import Emoji from '../icon/icon.component';

const Major = () => {

  //pass in as props
  const province = "ON"
  const college = {
    "name": "Conestoga",
    "website": "https://www.conestogac.on.ca/",
  }

  //college data
  const data = [
    {
     "tag": "Default",
     "name": "Computer Applications Development (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo",
     "pgwp": true,
     "coop": true,
     "url": "https://www.conestogac.on.ca/fulltime/computer-applications-development",
     "description": "This one-year, full-time, graduate certificate program provides students with a broad business and technical background in computer applications, database applications, data communications, programming, data design and systems analysis and design. This program provides the student with programming experience and the skills necessary to analyze and design Information Technology (IT) based solutions.In the Computer Applications Development program, students benefit from specialized courses taught by highly qualified industry experts. As a result, students should expect to have classes scheduled up until 8:00 p.m.The optional co-op stream includes one co-op work term.For more information contact the Program Coordinator at itprograms@conestogac.on.ca.",
    },
    {
      "tag": "Basic Info",
      "content": "toefl 99"
    },
    {
      "tag": "Admission",
      "content": "toefl 944"
    },
    {
      "tag": "Availability",
      "content": "toefl 44"
    },
    {
      "tag": "Career",
      "content": "toefl 33"
    },
    {
      "tag": "More Info",
      "content": "toefl 22"
    },
   ]
  const labels = [...new Set(data.filter(item => item.tag !== "Default").map(item => item.tag))];

  const [selectedLabel, setSelectedLabel]=useState(null)
  const [liked, setLiked]=useState(false)
  
  const handleClick = (value) => {
    if(selectedLabel && value === selectedLabel){
      setSelectedLabel(null)
    }else{
      setSelectedLabel(value)
    }
  }

  const defaultInfo = data[0]

  const {
    name,
    url,
    pgwp = false,
    coop = false,
    description,
  } = defaultInfo

  const {
    name: collegeName,
    website,
  } = college

  return (
   <CollegeBriefContainer>
    <CollegeBriefHeader>
      <Title>{name} <LikeBtn onClick={()=>setLiked(!liked)}>{liked ? <Emoji>⭐️</Emoji> : <Emoji>➕</Emoji>}</LikeBtn></Title>
      <TagContainer>
        <Tag>PGWP {pgwp ? <Emoji>✅</Emoji> : <Emoji>❌</Emoji>} </Tag>
        <Tag>CO-OP {coop ? <Emoji>✅</Emoji> : <Emoji>❌</Emoji>} </Tag>
        <Tag>{province}</Tag>
        <TagBtn onClick={()=>window.open(website, '_blank')}>{collegeName}</TagBtn>
        <TagBtn onClick={()=>window.open(url, '_blank')}>Link<Emoji>🔗</Emoji></TagBtn>
      </TagContainer>
    </CollegeBriefHeader>
    <MajorContent>
      <VerticalNavContainer>
        <MajorCards>
          {
            labels.map(label => {
              return <Button key={label} type='button' onClick={() => handleClick(label)}>{label}</Button>
            })
          }
        </MajorCards>
      </VerticalNavContainer>
      <CardWrapper cardType={CARD_WRAPPER_CLASSES.blue}>
        {
          selectedLabel ? 
            <CardWrapper cardType={CARD_WRAPPER_CLASSES.line}>
              {data.map(item => {
                console.log(item)
                const {tag, content} = item
                const result = 
                  tag === selectedLabel ? 
                    <CardWrapper key={tag} cardType={CARD_WRAPPER_CLASSES.small}>
                      <span>{content}</span>
                    </CardWrapper> 
                  : ``
                return result
              })}
            </CardWrapper>
          :
          <CardWrapper cardType={CARD_WRAPPER_CLASSES.line}>
            <CollegeBriefText>
              {description}
            </CollegeBriefText>
          </CardWrapper> 
        }
      </CardWrapper>
    </MajorContent>
   </CollegeBriefContainer>
  )
};

export default Major;