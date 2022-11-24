import {CollegeBriefContainer, CollegeBriefHeader, SubHeader, Arrow, Title, CollegeBriefText, MajorCards} from './college-brief.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CardWrapper, {CARD_WRAPPER_CLASSES} from '../card-wapper/card-wrapper.component'
import { useState, useRef, } from 'react';
import Emoji from '../icon/icon.component';

const CollegeBrief = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

  //Slide click
  const slide = (shift) => {
    // scrl.current.scrollLeft += shift;
    let scrollAmount = 0;
    let step = shift/10
    let speed = 25
    let element = scrl.current

    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= Math.abs(shift)) {
        clearInterval(slideTimer);
      }
    }, speed);

    setscrollX(scrollX + shift);

    // console.log(scrl.current.scrollWidth, scrl.current.scrollLeft, scrl.current.offsetWidth)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };


  //scrollbar for college majors
  // const sideScroll = (
  //   element,
  //   speed,
  //   distance,
  //   step,
  // ) => {
  //   let scrollAmount = 0;

  //   const slideTimer = setInterval(() => {
  //     element.scrollLeft += step;
  //     scrollAmount += Math.abs(step);
  //     if (scrollAmount >= distance) {
  //       clearInterval(slideTimer);
  //     }
  //   }, speed);
  // };

  //name, type, length, campus
  const data = [
    {
     "name": "Applied Artificial Intelligence & Machine Learning (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Applied Network Infrastructure and System Administration",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Doon"
    },
    {
     "name": "Bachelor of Applied Health Information Science (Honours)",
     "type": "Bachelor",
     "length": 4,
     "campus": "Online"
    },
    {
     "name": "Bachelor of Computer Science (Honours)",
     "type": "Bachelor",
     "length": 4,
     "campus": "Waterloo"
    },
    {
     "name": "Big Data Solution Architecture (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Kitchener"
    },
    {
     "name": "Cloud Data Management",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Doon"
    },
    {
     "name": "Computer Application Security (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Computer Applications Development (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Online"
    },
    {
     "name": "Computer Programming",
     "type": "College Diploma",
     "length": 2,
     "campus": "Waterloo"
    },
    {
     "name": "Computer Programming and Analysis (Optional Co-op)",
     "type": "Advanced Diploma",
     "length": 3,
     "campus": "Waterloo"
    },
    {
     "name": "Computer Systems Technician - Information Technology Infrastructure and Services (Optional Co-op)",
     "type": "College Diploma",
     "length": 2,
     "campus": "Waterloo"
    },
    {
     "name": "Digital Solutions Management (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Kitchener"
    },
    {
     "name": "Information Technology Business Analysis",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Brantford"
    },
    {
     "name": "Information Technology Infrastructure",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Information Technology Network Security",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Interactive Media Management - Interaction Design",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Kitchener"
    },
    {
     "name": "IT Innovation and Design (Optional Co-op)",
     "type": "Advanced Diploma",
     "length": 3,
     "campus": "Waterloo"
    },
    {
     "name": "Mobile Solutions Development (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Waterloo"
    },
    {
     "name": "Network Technical Support",
     "type": "College Certificate",
     "length": 1,
     "campus": "Doon"
    },
    {
     "name": "Predictive Analytics",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Guelph"
    },
    {
     "name": "Reporting Systems and Database Development",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Kitchener"
    },
    {
     "name": "Software Engineering Technician",
     "type": "College Diploma",
     "length": 2,
     "campus": "Waterloo"
    },
    {
     "name": "Software Engineering Technology (Optional Co-op)",
     "type": "Advanced Diploma",
     "length": 3,
     "campus": "Waterloo"
    },
    {
     "name": "Software Quality Assurance and Test Engineering (Optional Co-op)",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Virtual Reality Production",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Kitchener"
    },
    {
     "name": "Virtualization and Cloud Computing",
     "type": "Graduate Certificate",
     "length": 1,
     "campus": "Waterloo"
    },
    {
     "name": "Web Development",
     "type": "Graduate Certificate",
     "length": 2,
     "campus": "Brantford"
    },
    {
     "name": "Web Development and Internet Applications Fundamentals",
     "type": "College Certificate",
     "length": 1,
     "campus": "Waterloo"
    }
   ]
  const labels = [...new Set(data.map(item => item.type))];

  const [selectedLabel, setSelectedLabel]=useState(null)
  
  const handleClick = (value) => {
    if(selectedLabel && value === selectedLabel){
      setSelectedLabel(null)
    }else{
      setSelectedLabel(value)
    }
  }

  // useEffect(() => {
  //   setRightArrow(true)
  // }, [])

  // const leftClicked = () => {sideScroll(scrollWrapper.current, 25, 100, -10);}
  // const rightClicked = () => {
  //   setLeftArrow(true)
  //   sideScroll(scrollWrapper.current, 25, 100, 10);
  // }

  return (
   <CollegeBriefContainer>
    <CollegeBriefHeader>
      <Title>Conestoga College</Title>
    </CollegeBriefHeader>
    <SubHeader>
      {scrollX !== 0 && (<Arrow onClick={() => slide(-155)}><Emoji>◀️</Emoji></Arrow>)}
      <MajorCards ref={scrl} onScroll={scrollCheck}>
        {
          labels.map(label => {
            const isSelected = selectedLabel && label === selectedLabel
            return <Button key={label} type='button' buttonType={isSelected ? BUTTON_TYPE_CLASSES.labelSelected : BUTTON_TYPE_CLASSES.label} onClick={() => handleClick(label)}>{label}</Button>
          })
        }
      </MajorCards>
      {!scrolEnd && (<Arrow onClick={() => slide(+155)}><Emoji>▶️</Emoji></Arrow>)}
    </SubHeader>
    <CardWrapper cardType={CARD_WRAPPER_CLASSES.blue}>
      {
        selectedLabel ? 
          <CardWrapper cardType={CARD_WRAPPER_CLASSES.line}>
            {data.map(item => {
              console.log(item)
              const {name, type, length, campus} = item
              const result = 
                type === selectedLabel ? 
                  <CardWrapper key={name} cardType={CARD_WRAPPER_CLASSES.small}>
                    <span>{name}</span><br />
                    <span>{length} Year</span> | <span>{campus} Campus</span>
                  </CardWrapper> 
                : ``
              return result
            })}
          </CardWrapper>
        :
          <CollegeBriefText>
            Conestoga College Institute of Technology and Advanced Learning is a public college located in Kitchener, Ontario, Canada
          </CollegeBriefText>
      }
    </CardWrapper>
   </CollegeBriefContainer>
  )
};

export default CollegeBrief;