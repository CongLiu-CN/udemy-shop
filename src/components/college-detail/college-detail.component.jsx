import {CollegeBriefContainer, CollegeBriefHeader, SubHeader, Title, CollegeBriefText, MajorCards} from './college-detail.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CardWrapper, {CARD_WRAPPER_CLASSES} from '../card-wapper/card-wrapper.component'
import { useState, } from 'react';
import { useNavigate } from "react-router-dom";

const CollegeDetail = () => {

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

  //refactor
  const spaceToDash = (x) => {
    if(x.includes(` `)){
      const y = x.replace(/ *\([^)]*\) */g, "").replace(/[ ]/g, "-")
      return y
    }
    return x
  }

  let navigate = useNavigate();

  function onMajorClick(collegeName){
    console.log(`collegeName: `, collegeName)
    const collegeWithDash = spaceToDash(collegeName)
    console.log(`dashed: `, collegeWithDash)
    navigate(`./${collegeWithDash}`)
  }

  return (
   <CollegeBriefContainer>
    <CollegeBriefHeader>
      <Title>Conestoga College</Title>
    </CollegeBriefHeader>
    <SubHeader>
      <MajorCards>
        {
          labels.map(label => {
            return <Button key={label} type='button' buttonType={BUTTON_TYPE_CLASSES.grow} onClick={() => handleClick(label)}>{label}</Button>
          })
        }
      </MajorCards>
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
                  <CardWrapper key={name} cardType={CARD_WRAPPER_CLASSES.small} onClick={()=>onMajorClick(name)}>
                    <span>{name}</span><br />
                    <span>{length} Year</span> | <span>{campus} Campus</span>
                  </CardWrapper> 
                : ``
              return result
            })}
          </CardWrapper>
        :
        <CardWrapper cardType={CARD_WRAPPER_CLASSES.line}>
          <CollegeBriefText>
            Conestoga College Institute of Technology and Advanced Learning is a public college located in Kitchener, Ontario, Canada
          </CollegeBriefText>
        </CardWrapper> 
      }
    </CardWrapper>
   </CollegeBriefContainer>
  )
};

export default CollegeDetail;