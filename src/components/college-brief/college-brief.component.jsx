import {CollegeBriefContainer, CollegeBriefHeader, Title, CollegeBriefText, MajorCards} from './college-brief.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CardWrapper, {CARD_WRAPPER_CLASSES} from '../card-wapper/card-wrapper.component'
import { useState } from 'react';
import Emoji from '../icon/icon.component';

const CollegeBrief = () => {
  const data = [
    {
     "Program Name": "Applied Artificial Intelligence & Machine Learning (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Applied Network Infrastructure and System Administration",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Doon"
    },
    {
     "Program Name": "Bachelor of Applied Health Information Science (Honours)",
     "Credential": "Bachelor",
     "Length": 4,
     "Campus ": "Online"
    },
    {
     "Program Name": "Bachelor of Computer Science (Honours)",
     "Credential": "Bachelor",
     "Length": 4,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Big Data Solution Architecture (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Kitchener"
    },
    {
     "Program Name": "Cloud Data Management",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Doon"
    },
    {
     "Program Name": "Computer Application Security (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Computer Applications Development (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Online"
    },
    {
     "Program Name": "Computer Programming",
     "Credential": "College Diploma",
     "Length": 2,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Computer Programming and Analysis (Optional Co-op)",
     "Credential": "Advanced Diploma",
     "Length": 3,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Computer Systems Technician - Information Technology Infrastructure and Services (Optional Co-op)",
     "Credential": "College Diploma",
     "Length": 2,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Digital Solutions Management (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Kitchener"
    },
    {
     "Program Name": "Information Technology Business Analysis",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Brantford"
    },
    {
     "Program Name": "Information Technology Infrastructure",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Information Technology Network Security",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Interactive Media Management - Interaction Design",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Kitchener"
    },
    {
     "Program Name": "IT Innovation and Design (Optional Co-op)",
     "Credential": "Advanced Diploma",
     "Length": 3,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Mobile Solutions Development (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Network Technical Support",
     "Credential": "College Certificate",
     "Length": 1,
     "Campus ": "Doon"
    },
    {
     "Program Name": "Predictive Analytics",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Guelph"
    },
    {
     "Program Name": "Reporting Systems and Database Development",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Kitchener"
    },
    {
     "Program Name": "Software Engineering Technician",
     "Credential": "College Diploma",
     "Length": 2,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Software Engineering Technology (Optional Co-op)",
     "Credential": "Advanced Diploma",
     "Length": 3,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Software Quality Assurance and Test Engineering (Optional Co-op)",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Virtual Reality Production",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Kitchener"
    },
    {
     "Program Name": "Virtualization and Cloud Computing",
     "Credential": "Graduate Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    },
    {
     "Program Name": "Web Development",
     "Credential": "Graduate Certificate",
     "Length": 2,
     "Campus ": "Brantford"
    },
    {
     "Program Name": "Web Development and Internet Applications Fundamentals",
     "Credential": "College Certificate",
     "Length": 1,
     "Campus ": "Waterloo"
    }
   ]
  const labels = [...new Set(data.map(item => item.Credential))];

  const [selectedLabel, setSelectedLabel]=useState(null)
  
  const handleClick = (value) => {
    if(selectedLabel && value === selectedLabel){
      setSelectedLabel(null)
    }else{
      setSelectedLabel(value)
    }
  }

  return (
   <CollegeBriefContainer>
    <CollegeBriefHeader>
      <Title>Conestoga College</Title>
    </CollegeBriefHeader>
    <MajorCards>
      {
        labels.map(label => {
          const isSelected = selectedLabel && label === selectedLabel
          return <Button key={label} type='button' buttonType={isSelected ? BUTTON_TYPE_CLASSES.labelSelected : BUTTON_TYPE_CLASSES.label} onClick={() => handleClick(label)}>{label}</Button>
        })
      }
    </MajorCards>
    <CardWrapper cardType={CARD_WRAPPER_CLASSES.blue}>
      <Emoji>🧐</Emoji>
      <CollegeBriefText>
        Conestoga College Institute of Technology and Advanced Learning is a public college located in Kitchener, Ontario, Canada
      </CollegeBriefText>
    </CardWrapper>
   </CollegeBriefContainer>
  )
};

export default CollegeBrief;